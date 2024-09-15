import { useEffect, useState } from "react";
import { getPosts } from "@/utils/api";
import SortPosts from "@/components/SortPosts";

export default function PrintAllPosts({ searchQuery }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        if (Array.isArray(posts)) {
          setPosts(posts);
        } else {
          console.error("Expected an array but got:", posts);
        }
      })
      .catch((error) => console.error("[get error to receive posts]", error));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredPosts(
        posts.filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [searchQuery, posts]);

  return (
    <main>
      <SortPosts posts={filteredPosts} />
    </main>
  );
}
