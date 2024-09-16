import { useEffect, useState } from "react";
import { getUserData } from "@/utils/api";
import Link from "next/link";

export default function PostsCard({ post, showImage }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData(post.user).then(setUserData).catch(console.error);
  }, [post.user]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Link href={`/posts/${post._id}`}>
      <article
        id={`post-${post._id}`}
        className="bg-white border border-gray-200 rounded-xl cursor-pointer overflow-hidden"
      >
        {showImage && (
          <img src={post.image} alt={post.title} className="w-full h-auto" />
        )}
        <div className="p-8">
          <div className="flex items-center">
            <img
              src={userData.profilePic}
              alt={userData.name}
              className="size-8 rounded-full object-cover mr-4"
            />
            <div className="flex flex-col">
              <h5 className="text-lg font-semibold mb-1">{userData.name}</h5>
              <p className="text-sm text-gray-500">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <div className="flex gap-2 text-gray-400 mb-2">
            {post.tags.map((tag, index) => (
              <button
                key={index}
                className="px-2 py-1 bg-transparent border-none hover:px-2 hover:py-1 hover:border hover:rounded-md hover:border-[#c3c6f3] hover:bg-[#eeeefc]"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
