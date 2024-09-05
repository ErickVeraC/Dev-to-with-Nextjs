import { useEffect, useState } from "react";
import { getPosts } from "@/utils/api";
import SortPosts from "./SortPosts";

export default function PrintAllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((response) => {
        if (response.success && Array.isArray(response.data.posts)) {
          setPosts(response.data.posts);
        } else {
          console.error("Expected an array but got:", response);
        }
      })
      .catch((error) => console.error("[get error to receive posts]", error));
  }, []);

  return (
    <main>
      <SortPosts posts={posts} />
    </main>
  );
}
