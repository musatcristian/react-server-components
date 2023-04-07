import Link from "next/link";

interface ReposProps {
  name: string;
}

const url = "https://api.github.com/repos/musatcristian";

export const fetchRepos = async (name: string) => {
  await new Promise((r) => setTimeout(r, 3000));
  const res = await fetch(`${url}/${name}/contents`, {
    next: {
      revalidate: 60,
    },
  });
  return await res.json();
};

export const RepoDirs: NextComponent<ReposProps> = async ({ name }) => {
  const contents = await fetchRepos(name);
  const dirs = contents.filter((c: any) => c.type === "dir");
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((d: any) => {
          return (
            <li key={d.path}>
              <Link href={`/code/repos/${name}/${d.path}`}>{d.path}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
