import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { getPostById, getPosts } from "@/utils/api";
import MainLayout from "@/layouts/MainLayout";
import PostDetail from "@/components/PostDetail";

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
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { id: post._id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
};
