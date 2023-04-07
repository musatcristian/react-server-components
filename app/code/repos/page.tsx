import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const url = "https://api.github.com/users/musatcristian/repos";

const fetchRepos = async (): Promise<unknown[]> => {
  const r = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });
  return await r.json();
};

const ReposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div className="repos-container">
      <h2>Repos</h2>
      <ul className="repo-list">
        {repos.map((repo: any) => {
          return (
            <li key={repo.id}>
              <Link href={`/code/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-details">
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span>
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReposPage;
