import { useEffect, useState } from "react";
import { getUserData } from "@/utils/api";
import Link from "next/link";

export default function PostDetail({ post }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("Post data:", post);
    if (post.user) {
      getUserData(post.user).then(setUserData).catch(console.error);
    } else {
      console.error("User ID is undefined");
    }
  }, [post.user]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <article
      id={`post-${post._id}`}
      className="w-3/5 bg-white border border-gray-200 rounded-xl overflow-hidden"
    >
      <img src={post.image} alt={post.title} className="w-full h-auto" />
      <div className="p-8">
        <div className="flex items-center mb-4">
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
            <Link href="/" key={index}>
              <div className="px-2 py-1 border rounded-md border-[#c3c6f3] hover:bg-[#eeeefc]">
                #{tag}
              </div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-700">{post.body}</p>
      </div>
    </article>
  );
}
