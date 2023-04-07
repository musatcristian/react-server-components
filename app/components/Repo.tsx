import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

interface RepoProps {
  name: string;
}

const url = "https://api.github.com/repos/musatcristian";

export const fetchRepo = async (name: string) => {
  const res = await fetch(`${url}/${name}`, {
    next: {
      revalidate: 60,
    },
  });
  return await res.json();
};

export const Repo: NextComponent<RepoProps> = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};
