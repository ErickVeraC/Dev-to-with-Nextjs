import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import MainAside from "@/components/MainAside";
import PrintAllPosts from "@/components/PrintAllPosts";
import { getPosts } from "@/utils/api"; // Importa la función getPosts

export default function Home({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <MainLayout onSearch={handleSearch}>
      {" "}
      {/* Pasa handleSearch a MainLayout */}
      <main className="grid grid-cols-12 gap-4">
        <aside className="col-span-3 hidden md:block">
          <MainAside />
        </aside>
        <section className="col-span-6">
          <PrintAllPosts searchQuery={searchQuery} posts={posts} />
        </section>
        <div className="col-span-3"></div>
      </main>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const response = await getPosts();
  const posts =
    response.success && Array.isArray(response.data.posts)
      ? response.data.posts
      : [];

  return {
    props: {
      posts,
    },
  };
}
