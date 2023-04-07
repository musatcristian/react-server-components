import Link from "next/link";

// const coursesUrl = "http://localhost:3000/api/courses";

// export const fetchCourses = async () => {
//   const res = await fetch(coursesUrl);
//   return await res.json();
// };

export const Courses: NextComponent<any> = ({ courses }) => {
  // const cs = await fetchCourses();
  return (
    <div className="courses">
      {courses.map((c: any) => {
        console.info(c);
        return (
          <div key={c.id} className="card">
            <h2>{c.title}</h2>
            <small>Level: {c.level}</small>
            <p>{c.description}</p>
            <Link href={c.link} target="_blank" className="btn">
              Go to
            </Link>
          </div>
        );
      })}
    </div>
  );
};
