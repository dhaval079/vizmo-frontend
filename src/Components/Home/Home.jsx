import Blog from "../Blog/Blog";
import blogsData from "../../db/BlogsData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const [blogsDataArr, setBlogsDataArr] = blogsData();

  const [loadingContentSrc, setLoadingContentSrc] = useState(
    "/assets/loading.png"
  );

  useEffect(() => {
    setLoadingContentSrc("/assets/loading.png");
    if (localStorage.getItem("blogsDataArr")) {
      setBlogsDataArr(JSON.parse(localStorage.getItem("blogsDataArr")));
    }
    const timer = setTimeout(() => {
      setLoadingContentSrc(null);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  if (loadingContentSrc) {
    return (
      <div className="flex h-[100vh] w-full justify-center items-center">
        <img src={loadingContentSrc} className="w-14" alt="Loading..." />
      </div>
    );
  } else {
    return (
      <div className="p-2 pb-4 sm:pb-5 sm:p-2.5 p-10">
      <h1 className="font-extrabold text-gray-800 justify-center  text-center my-10 mb-10 mx-auto  text-lg mb-4">
          Blog Website by <a href="https://github.com/dhaval079" className="text-blue-900">@dhaval079</a>
        </h1>
        <h2 className="font-extrabold text-gray-800 justify-center  text-center my-10 mb-10 mx-auto  text-lg mb-4">
          Recent Posts 
        </h2>
        <br></br>
        <section
          className={`grid items-stretch place-items-center mx-auto gap-10 ${styles.blogsGrid}`}
        >
          {blogsDataArr.map((blog) => {
            return (
              <Blog
                key={blog.id}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                avatar={blog.avatar}
                author={blog.author}
                date={blog.date}
                id={blog.id}
              />
            );
          })}
          <div
            onClick={() => navigate("/add-blog")}
            className="rounded-lg transition-all cursor-pointer active:scale-[0.96] min-h-[23rem] flex justify-center flex-col gap-4 items-center p-2 ring-1 ring-blue-200 w-[20rem] max-w-xs"
          >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z"/></svg>            <span className="font-medium transition-all hover:scale-[0.98]">Post a Blog</span>
          </div>
        </section>
      </div>
    );
  }
};

export default Home;
