// import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Home</Link>
        </div>
        <div className="links">
          <Link href="/about">Abouasdasdasdadt</Link>
          <Link href="/about/team">About TEAM</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
};
