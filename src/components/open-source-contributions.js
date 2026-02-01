"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "../widgets/arrow-right";

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function buildSummaryLine(summary, days) {
  if (!summary) return null;
  return `Last ${days} days: ${summary.mergedPrCount} merged PRs • ${summary.commitCount} commits • ${summary.reposWithContribs} repos`;
}

function buildSummaryFromRepos(repos) {
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

const EMPTY_DATA = {
  status: "loading",
  summary: null,
  repos: [],
};

export default function OpenSourceContributions({
  initialData = null,
  maxRepos = null,
  days = 90,
  apiPath = null,
  showFullLink = false,
  filterOrg = "all",
  filterRepo = "all",
  filterType = "all",
  onDataLoaded = null,
}) {
  const [data, setData] = useState(initialData || EMPTY_DATA);
  const [isLoading, setIsLoading] = useState(!initialData);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      setIsLoading(true);
      try {
        const url = apiPath || `/api/open-source?days=${days}`;
        const response = await fetch(url);
        const payload = await response.json();
        if (isMounted) {
          setData(payload);
        }
      } catch (error) {
        if (isMounted) {
          setData({
            status: "error",
            summary: null,
            repos: [],
            error: error.message,
          });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, [apiPath, days]);

  useEffect(() => {
    if (onDataLoaded && data.status === "ok") {
      onDataLoaded(data);
    }
  }, [data, onDataLoaded]);

  const filteredRepos = useMemo(() => {
    const windowedRepos = data.repos.filter((repo) => {
      if (filterOrg !== "all" && repo.owner !== filterOrg) {
        return false;
      }
      if (filterRepo !== "all" && `${repo.owner}/${repo.name}` !== filterRepo) {
        return false;
      }
      return true;
    });

    return windowedRepos.map((repo) => {
      const mergedPullRequests =
        filterType === "commits" ? [] : repo.mergedPullRequests;
      const commits = filterType === "prs" ? [] : repo.commits;
      return { ...repo, mergedPullRequests, commits };
    });
  }, [data.repos, filterOrg, filterRepo, filterType]);

  const limitedRepos = maxRepos ? filteredRepos.slice(0, maxRepos) : filteredRepos;
  const summary = buildSummaryFromRepos(filteredRepos);
  const summaryLine = buildSummaryLine(summary, data.windowDays || days);
  const showPrs = filterType !== "commits";
  const showCommits = filterType !== "prs";
  return (
    <div className="px-4 w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-slate-50">Open Source Contributions</h3>
        <p className="text-slate-400 mt-2 text-sm">
          Focused on WeVote, a nonprofit civic engagement platform.
        </p>
        {summaryLine && (
          <p className="text-slate-300 mt-3 text-sm">{summaryLine}</p>
        )}
        {data.status === "missing-token" && (
          <p className="text-slate-400 mt-3 text-sm">
            Add a `GITHUB_TOKEN` environment variable to show live activity.
          </p>
        )}
        {isLoading && (
          <p className="text-slate-400 mt-3 text-sm">Loading latest activity...</p>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {limitedRepos.map((repo) => (
          <div
            key={repo.url}
            className="relative rounded-md border border-white/10 px-5 py-4 shadow-[0_4px_10px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)]"
          >
            <div className="flex flex-col gap-2">
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-lg font-semibold text-[#E2E8F0] hover:text-[#5CEAD4] transition-colors"
              >
                {repo.name}
              </a>
              {repo.description && (
                <p className="text-slate-400 text-sm">{repo.description}</p>
              )}
              <div className="text-xs text-slate-500">
                {repo.primaryLanguage ? `${repo.primaryLanguage} • ` : ""}
                Updated {formatDate(repo.pushedAt)}
              </div>
            </div>

            {(showPrs || showCommits) && (
              <div className={`mt-4 grid gap-4 ${showPrs && showCommits ? "md:grid-cols-2" : ""}`}>
                {showPrs && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300">
                      Recent PRs
                    </h4>
                    {repo.mergedPullRequests.length === 0 ? (
                      <p className="text-sm text-slate-400 mt-2">
                        No merged PRs in the last {data.windowDays || days} days.
                      </p>
                    ) : (
                      <ul className="mt-2 space-y-2 text-sm text-slate-300">
                        {repo.mergedPullRequests.map((pr) => (
                          <li key={pr.url} className="flex flex-col">
                            <a
                              href={pr.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="hover:text-[#5CEAD4] transition-colors"
                            >
                              {pr.title}
                            </a>
                            <span className="text-xs text-slate-500">
                              Merged {formatDate(pr.mergedAt)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {showCommits && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300">
                      Recent Commits
                    </h4>
                    {repo.commits.length === 0 ? (
                      <p className="text-sm text-slate-400 mt-2">
                        No recent commits in the last {data.windowDays || days} days.
                      </p>
                    ) : (
                      <ul className="mt-2 space-y-2 text-sm text-slate-300">
                        {repo.commits.map((commit) => (
                          <li key={commit.url} className="flex flex-col">
                            <a
                              href={commit.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="hover:text-[#5CEAD4] transition-colors"
                            >
                              {commit.message}
                            </a>
                            <span className="text-xs text-slate-500">
                              {formatDate(commit.committedDate)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {showFullLink && (
        <div className="mt-6">
          <a
            href="/open-source"
            className="inline-flex items-center group text-[#5CEAD4] hover:text-white transition-colors duration-300 font-medium"
          >
            <span>View Full Activity</span>
            <ArrowRight className="inline-block pl-2 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      )}

      {data.status === "error" && !isLoading && (
        <p className="text-xs text-rose-300 mt-4">
          GitHub data could not be loaded. Please try again later.
        </p>
      )}
    </div>
  );
}
