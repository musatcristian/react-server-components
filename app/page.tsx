"use client";
import { useEffect, useState } from "react";

import LoadingPage from "./loading";
import { Courses } from "./components/Courses";
import { CourseSearch } from "@/app/components/CourseSearch";

const HomePage = () => {
  const [c, setC] = useState<any[]>([]);
  const [l, setL] = useState<boolean>(false);

  useEffect(() => {
    const fetcher = async () => {
      setL(true);
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        console.info(data);
        setC(data);
      } catch (error) {
        console.error(error);
      } finally {
        setL(false);
      }
    };

    fetcher();
  }, []);

  const handleSearch = (res: any[]) => {
    setC(res);
  };

  if (l) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h3>Home Page</h3>
      <CourseSearch getSearchResults={handleSearch} />
      <Courses courses={c} />
    </div>
  );
};
export default HomePage;
