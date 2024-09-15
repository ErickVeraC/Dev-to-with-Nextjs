import { useEffect, useState } from "react";
import { getUserData } from "../utils/api";

export default function PostsCard({ post, showImage }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData(post.user).then(setUserData).catch(console.error);
  }, [post.user]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <article
      id={`post-${post._id}`}
      className="bg-white border border-gray-200 rounded-xl cursor-pointer overflow-hidden"
    >
      {showImage && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto mb-4 m-0"
        />
      )}
      <div className="p-8">
        <div className="flex items-center mb-4">
          <img
            src={userData.profilePic}
            alt={userData.name}
            className="h-8 w-8 rounded-full object-cover mr-4"
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
            <span key={index}>{tag}</span>
          ))}
        </div>
        <p className="text-sm text-gray-700">{post.body}</p>
      </div>
    </article>
  );
}
