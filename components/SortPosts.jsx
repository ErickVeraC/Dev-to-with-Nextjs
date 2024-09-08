import { useState, useEffect } from "react";
import clsx from "clsx";
import PostsCard from "./PostsCard";

export default function SortPosts({ posts }) {
  const [sortedPosts, setSortedPosts] = useState(posts);
  const [sortOrder, setSortOrder] = useState("recent");

  useEffect(() => {
    sortPosts("recent");
  }, [posts]);

  const sortPosts = (order) => {
    let sortedArray = [...posts];
    if (order === "recent") {
      sortedArray.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    } else if (order === "oldest") {
      sortedArray.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    }
    setSortedPosts(sortedArray);
    setSortOrder(order);
  };

  return (
    <div>
      <div className="flex flex-row gap-4 mb-4">
        <button
          onClick={() => sortPosts("recent")}
          className={clsx(
            "bg-transparent text-gray-500 p-2 rounded transition-all duration-300 ease",
            {
              "hover:bg-gray-500 hover:text-white": sortOrder !== "recent",
              "bg-gray-500 text-white": sortOrder === "recent",
            }
          )}
        >
          Most Recent
        </button>
        <button
          onClick={() => sortPosts("oldest")}
          className={clsx(
            "bg-transparent text-gray-500 p-2 rounded transition-all duration-300 ease",
            {
              "hover:bg-gray-500 hover:text-white": sortOrder !== "oldest",
              "bg-gray-500 text-white": sortOrder === "oldest",
            }
          )}
        >
          Oldest
        </button>
      </div>
      <section>
        {sortedPosts.map((post, idx) => (
          <div key={`post-${idx}`} className="pb-8">
            <PostsCard post={post} showImage={idx === 0} />
          </div>
        ))}
      </section>
    </div>
  );
}
