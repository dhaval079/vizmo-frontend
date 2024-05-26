import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogsData from "../../db/BlogsData";

const ShowBlogInDetail = () => {
  const [blogsDataArr, setBlogsDataArr] = blogsData();
  const { id } = useParams();
  const [blogToShow, setBlogToShow] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("blogsDataArr")) {
      setBlogsDataArr(JSON.parse(localStorage.getItem("blogsDataArr")));
    }
  }, []);

  useEffect(() => {
    const blog = blogsDataArr.find((blogData) => blogData.id === id);
    setBlogToShow(blog);
  }, [blogsDataArr]);

  return (
    <div className="py-5 px-2.5 mx-auto max-w-4xl">
      <h1 className="text-3xl font-medium text-black">{blogToShow?.title}</h1>
      <div className="inline-flex justify-between mt-5 flex-wrap items-center gap-8">
        <div className="inline-flex items-center gap-1.5">
          <img
            src={blogToShow?.avatar}
            className="rounded-full w-6 h-6"
            alt={blogToShow?.author}
          />
          <h6 className="text-xs font-medium">{blogToShow?.author}</h6>
        </div>
        <span className="text-xs font-medium">
          {new Date(blogToShow?.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
      <img
        src={blogToShow?.image}
        className="rounded-xl mt-6 h-auto max-h-[20rem]"
        alt="Post Thumbnail"
      />
      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: blogToShow?.content }}
      ></div>
    </div>
  );
};

export default ShowBlogInDetail;
