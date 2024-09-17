import { useState, useEffect } from "react";
import clsx from "clsx";
import PostsCard from "@/components/PostsCard";

export default function SortPosts({ posts }) {
  const [sortedPosts, setSortedPosts] = useState(posts);
  const [sortOrder, setSortOrder] = useState("recent");

  useEffect(() => {
    sortPosts("recent");
  }, [posts]);

  const sortPosts = (order) => {
    const sortedArray = [...posts];
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
      <div className="flex flex-row gap-4 mb-2">
        <button
          onClick={() => sortPosts("recent")}
          className={clsx(
            "font-bold text-black px-4 py-2 rounded-md transition-all duration-300 ease",
            {
              "hover:bg-white hover:text-[#3b49df]": sortOrder !== "recent",
              "text-[#3b49df]": sortOrder === "recent",
            }
          )}
        >
          Latest
        </button>
        <button
          onClick={() => sortPosts("oldest")}
          className={clsx(
            "text-gray-500 px-4 py-2 rounded-md transition-all duration-300 ease",
            {
              "hover:bg-white hover:text-[#3b49df]": sortOrder !== "oldest",
              "text-[#3b49df]": sortOrder === "oldest",
            }
          )}
        >
          Relevant
        </button>
      </div>
      <section>
        {sortedPosts.map((post, idx) => (
          <div key={`post-${idx}`} className="pb-4">
            <PostsCard key={post._id} post={post} showImage={idx === 0} />
          </div>
        ))}
      </section>
    </div>
  );
}
