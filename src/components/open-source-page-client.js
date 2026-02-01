"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import OpenSourceContributions from "./open-source-contributions";

const TIME_OPTIONS = [
  { label: "Last 30 days", value: 30 },
  { label: "Last 90 days", value: 90 },
  { label: "Last 180 days", value: 180 },
];

const TYPE_OPTIONS = [
  { label: "All activity", value: "all" },
  { label: "PRs only", value: "prs" },
  { label: "Commits only", value: "commits" },
];

export default function OpenSourcePageClient() {
  const [days, setDays] = useState(90);
  const [filterOrg, setFilterOrg] = useState("all");
  const [filterRepo, setFilterRepo] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [availableOrgs, setAvailableOrgs] = useState([]);
  const [availableRepos, setAvailableRepos] = useState([]);

  const repoOptions = useMemo(() => {
    const options = filterOrg === "all"
      ? availableRepos
      : availableRepos.filter((repo) => repo.startsWith(`${filterOrg}/`));
    return ["all", ...options];
  }, [availableRepos, filterOrg]);

  useEffect(() => {
    if (!repoOptions.includes(filterRepo)) {
      setFilterRepo("all");
    }
  }, [repoOptions, filterRepo]);

  function handleClearFilters() {
    setDays(90);
    setFilterOrg("all");
    setFilterRepo("all");
    setFilterType("all");
  }

  const handleDataLoaded = useCallback((data) => {
    if (data.status !== "ok") return;
    const orgs = Array.from(new Set(data.repos.map((repo) => repo.owner).filter(Boolean)));
    const repos = Array.from(
      new Set(data.repos.map((repo) => `${repo.owner}/${repo.name}`))
    );
    setAvailableOrgs(orgs);
    setAvailableRepos(repos);
  }, []);

  return (
    <div className="px-6 md:px-12">
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end mb-8">
        <label className="text-xs uppercase tracking-widest text-slate-400">
          Time range
          <select
            className="mt-2 block w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-slate-200"
            value={days}
            onChange={(event) => setDays(Number(event.target.value))}
          >
            {TIME_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs uppercase tracking-widest text-slate-400">
          Organization
          <select
            className="mt-2 block w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-slate-200"
            value={filterOrg}
            onChange={(event) => setFilterOrg(event.target.value)}
          >
            <option value="all">All orgs</option>
            {availableOrgs.map((org) => (
              <option key={org} value={org}>
                {org}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs uppercase tracking-widest text-slate-400">
          Repository
          <select
            className="mt-2 block w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-slate-200"
            value={filterRepo}
            onChange={(event) => setFilterRepo(event.target.value)}
          >
            <option value="all">All repos</option>
            {repoOptions
              .filter((repo) => repo !== "all")
              .map((repo) => (
                <option key={repo} value={repo}>
                  {repo}
                </option>
              ))}
          </select>
        </label>

        <label className="text-xs uppercase tracking-widest text-slate-400">
          Activity type
          <select
            className="mt-2 block w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-slate-200"
            value={filterType}
            onChange={(event) => setFilterType(event.target.value)}
          >
            {TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={handleClearFilters}
          className="h-10 px-4 rounded-md border border-white/10 text-sm text-slate-200 hover:text-white hover:border-white/30 transition-colors"
        >
          Clear filters
        </button>
      </div>

      <OpenSourceContributions
        days={days}
        filterOrg={filterOrg}
        filterRepo={filterRepo}
        filterType={filterType}
        onDataLoaded={handleDataLoaded}
      />
    </div>
  );
}
