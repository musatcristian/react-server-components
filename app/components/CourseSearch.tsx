// "use client";

import { useState, FormEventHandler, ChangeEventHandler } from "react";

export interface CourseSearchProps {
  getSearchResults: (c: any[]) => void;
}

export const CourseSearch: NextComponent<CourseSearchProps> = ({ getSearchResults }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const c = await res.json();
    console.info(c);
    getSearchResults(c);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" className="search-input" placeholder="search..." value={query} onChange={handleChange} />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};
