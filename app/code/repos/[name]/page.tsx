import { NextPage } from "next";
import Link from "next/link";

import { Repo } from "@/app/components/Repo";
import { RepoDirs } from "@/app/components/Repos";
import { Suspense } from "react";

const RepoPage: NextPage<any> = ({ params }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        back
      </Link>
      <Suspense
        fallback={
          <div className="loader">
            <div className="spinner"></div>
          </div>
        }
      >
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
