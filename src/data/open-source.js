const DEFAULT_USERNAME = "almee98";

const DEFAULT_REPOS = [
  { owner: "WeVote", name: "WebApp" },
  { owner: "WeVote", name: "WeVoteServer" },
  { owner: "WeVote", name: "weconnect-client" },
  { owner: "WeVote", name: "weconnect-server" },
  { owner: "freeCodeCamp", name: "freeCodeCamp" },
];

function parseRepoTargets(value) {
  if (!value) return [];
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const [owner, name] = entry.split("/").map((part) => part.trim());
      if (!owner || !name) return null;
      return { owner, name };
    })
    .filter(Boolean);
}

const USER_SUMMARY_QUERY = `
  query($username: String!, $since: DateTime!) {
    user(login: $username) {
      id
      contributionsCollection(from: $since) {
        totalCommitContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalRepositoriesWithContributedCommits
      }
    }
  }
`;

const REPO_ACTIVITY_QUERY_BASE = `
  query($prLimit: Int!, $commitLimit: Int!, $since: GitTimestamp!, $userId: ID!) {
    __FIELDS__
  }
`;

function buildRepoActivityQuery(repoTargets, username, sinceDate) {
  const sinceDateOnly = sinceDate.toISOString().split("T")[0];
  const fields = repoTargets
    .map((repo, index) => {
      const alias = `repo_${index}`;
      const prsAlias = `prs_${index}`;
      const searchQuery = `repo:${repo.owner}/${repo.name} is:pr is:merged author:${username} merged:>=${sinceDateOnly}`;
      return `
        ${alias}: repository(owner: "${repo.owner}", name: "${repo.name}") {
          owner {
            login
          }
          name
          description
          url
          pushedAt
          primaryLanguage {
            name
          }
          defaultBranchRef {
            name
            target {
              ... on Commit {
                history(first: $commitLimit, since: $since, author: { id: $userId }) {
                  nodes {
                    messageHeadline
                    committedDate
                    url
                  }
                }
              }
            }
          }
        }
        ${prsAlias}: search(query: "${searchQuery}", type: ISSUE, first: $prLimit) {
          nodes {
            ... on PullRequest {
              title
              url
              mergedAt
              author {
                login
              }
            }
          }
        }
      `;
    })
    .join("\n");
  return REPO_ACTIVITY_QUERY_BASE.replace("__FIELDS__", fields);
}

async function githubGraphQL(token, query, variables) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL error: ${response.status}`);
  }

  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(payload.errors[0]?.message || "GitHub GraphQL error");
  }

  return payload.data;
}

function normalizeRepos({ repos, username, sinceDate }) {
  const sinceTime = sinceDate.getTime();
  return repos
    .filter(Boolean)
    .map((repo) => {
      const mergedPullRequests = (repo.mergedPullRequests || repo.pullRequests?.nodes || [])
        .filter((pr) => {
          if (!pr?.author?.login) return true;
          return pr.author.login.toLowerCase() === username.toLowerCase();
        })
        .filter((pr) => pr?.mergedAt && new Date(pr.mergedAt).getTime() >= sinceTime)
        .slice(0, 5)
        .map((pr) => ({
          title: pr.title,
          url: pr.url,
          mergedAt: pr.mergedAt,
        }));

      const commits = (repo.defaultBranchRef?.target?.history?.nodes || []).map((commit) => ({
        message: commit.messageHeadline,
        url: commit.url,
        committedDate: commit.committedDate,
      }));

      return {
        owner: repo.owner?.login || repo.owner || null,
        name: repo.name,
        description: repo.description,
        url: repo.url,
        primaryLanguage: repo.primaryLanguage?.name || null,
        pushedAt: repo.pushedAt,
        mergedPullRequests,
        commits,
      };
    });
}

function buildSummary(repos) {
  let mergedPrCount = 0;
  let commitCount = 0;
  let reposWithContribs = 0;

  repos.forEach((repo) => {
    mergedPrCount += repo.mergedPullRequests.length;
    commitCount += repo.commits.length;
    if (repo.mergedPullRequests.length || repo.commits.length) {
      reposWithContribs += 1;
    }
  });

  return {
    mergedPrCount,
    commitCount,
    reposWithContribs,
  };
}

export async function fetchOpenSourceContributions({ days = 90 } = {}) {
  const token = process.env.GITHUB_TOKEN || process.env.GITHUB_GRAPHQL_TOKEN;
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || process.env.GITHUB_USERNAME || DEFAULT_USERNAME;
  const envRepoTargets = parseRepoTargets(process.env.GITHUB_REPOS);
  const repoTargets = envRepoTargets.length ? envRepoTargets : DEFAULT_REPOS;
  const sinceDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  if (!token) {
    return {
      status: "missing-token",
      sinceDate,
      summary: null,
      repos: [],
    };
  }

  try {
    const summaryData = await githubGraphQL(token, USER_SUMMARY_QUERY, {
      username,
      since: sinceDate.toISOString(),
    });

    const userId = summaryData?.user?.id;
    if (!userId) {
      return {
        status: "missing-user",
        sinceDate,
        summary: null,
        repos: [],
      };
    }

    const activityQuery = buildRepoActivityQuery(repoTargets, username, sinceDate);
    const activityData = await githubGraphQL(token, activityQuery, {
      prLimit: 20,
      commitLimit: 8,
      since: sinceDate.toISOString(),
      userId,
    });

    const repoNodes = repoTargets.map((_, index) => {
      const repo = activityData?.[`repo_${index}`];
      const prs = activityData?.[`prs_${index}`]?.nodes || [];
      const mergedPullRequests = prs
        .filter((pr) => pr?.author?.login?.toLowerCase() === username.toLowerCase())
        .filter((pr) => pr?.mergedAt && new Date(pr.mergedAt).getTime() >= sinceDate.getTime())
        .map((pr) => ({
          title: pr.title,
          url: pr.url,
          mergedAt: pr.mergedAt,
        }));
      return repo ? { ...repo, mergedPullRequests } : null;
    });
    const repos = normalizeRepos({
      repos: repoNodes,
      username,
      sinceDate,
    });

    return {
      status: "ok",
      sinceDate,
      summary: buildSummary(repos),
      repos,
    };
  } catch (error) {
    return {
      status: "error",
      sinceDate,
      summary: null,
      repos: [],
      error: error.message,
    };
  }
}
