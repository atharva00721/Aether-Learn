"use client"
import { useEffect, useState } from "react";

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/courses");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Courses</h1>
      <ul>
        {courses.map((course: any) => (
          <li key={course._id}>{course.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default CoursesPage;

