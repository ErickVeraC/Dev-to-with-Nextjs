import { useRouter } from "next/router";
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import PostDetail from "@/components/PostDetail";
import PrintAllPosts from "@/components/PrintAllPosts";
import { getPosts, getPostById } from "@/utils/api"; // Asegúrate de importar getPostById

export default function PostPage({ post }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout onSearch={handleSearch}>
      <article className="p-4">
        <PostDetail post={post} />
      </article>
      <section className="p-4 w-1/2">
        <PrintAllPosts searchQuery={searchQuery} />
      </section>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { id: post._id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  try {
    console.log(`Fetching post with id: ${params.id}`);
    const post = await getPostById(params.id);

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: post.post,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        post: null,
      },
    };
  }
}
