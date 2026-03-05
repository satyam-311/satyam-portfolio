import PortfolioPage from "@/components/portfolio-page";
import { getGitHubStats } from "@/projects/github";

export default async function Home() {
  const githubStats = await getGitHubStats("satyam-311");
  return <PortfolioPage githubStats={githubStats} />;
}
