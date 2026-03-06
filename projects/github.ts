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

async function getRepoCountFromProfileHtml(username: string): Promise<number | null> {
  try {
    const response = await fetch(`https://github.com/${username}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const html = await response.text();
    const descriptionMatch = html.match(/has\s+([\d,]+)\s+repositories?\s+available/i);
    if (!descriptionMatch?.[1]) {
      return null;
    }

    const parsed = Number(descriptionMatch[1].replace(/,/g, ""));
    return Number.isFinite(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export async function getGitHubStats(username: string): Promise<GitHubStats> {
  const profileUrl = `https://github.com/${username}`;
  const apiHeaders = process.env.GITHUB_TOKEN
    ? {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      }
    : undefined;

  try {
    const [userRes, reposRes, contributionsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: apiHeaders,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers: apiHeaders,
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
    const repoCountFromProfile =
      userData?.public_repos == null && !reposRes.ok
        ? await getRepoCountFromProfileHtml(username)
        : null;

    const repositories = Number(
      userData?.public_repos ?? reposData?.length ?? repoCountFromProfile ?? 0,
    );
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
