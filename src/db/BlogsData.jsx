import { useState } from "react";

const blogsData = () => {
  const [blogsDataArr, setBlogsDataArr] = useState([
    {
      id: "blog1",
      image:
        "/assets/profile_1.jpg",
      category: "Introduction",
      title:
        "This is the intro blog of the developer",
      content: `<p>Problem Solver and Full stack developer with three past Internships  and achievements in platforms like Leetcode, CodeChef, GFG. I am Kaggle  Expert , Qualified finals of hackathons and Olympiad gold medalist.</p>`,
      avatar:
      "/assets/caption.jpg",
      author: "Dhaval Rupapara",
      date: "2024-05-27T12:34:56Z",
    },
  ]);
  return [blogsDataArr, setBlogsDataArr];
};

export default blogsData;
