export type GitHubStats = {
  repositories: number;
  stars: number;
  contributions: string;
  profileUrl: string;
};

const FALLBACK_STATS: GitHubStats = {
  repositories: 0,
  stars: 0,
  contributions: "N/A",
  profileUrl: "https://github.com/satyam-311",
};

export async function getGitHubStats(username: string): Promise<GitHubStats> {
  const profileUrl = `https://github.com/${username}`;

  try {
    const [userRes, reposRes, contributionsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}`, {
        next: { revalidate: 3600 },
      }),
    ]);

    const userData = userRes.ok ? await userRes.json() : null;
    const reposData = reposRes.ok ? await reposRes.json() : [];
    const contributionsData = contributionsRes.ok
      ? await contributionsRes.json()
      : null;

    const repositories = Number(userData?.public_repos ?? reposData?.length ?? 0);
    const stars = Array.isArray(reposData)
      ? reposData.reduce(
          (sum: number, repo: { stargazers_count?: number }) =>
            sum + Number(repo.stargazers_count ?? 0),
          0,
        )
      : 0;

    const contributionsValue = contributionsData?.total ?? contributionsData?.years?.[0]?.total;

    return {
      repositories,
      stars,
      contributions:
        typeof contributionsValue === "number"
          ? contributionsValue.toLocaleString()
          : "N/A",
      profileUrl,
    };
  } catch {
    return { ...FALLBACK_STATS, profileUrl };
  }
}
