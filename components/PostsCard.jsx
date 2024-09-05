export default function PostsCard({ post }) {
  return (
    <article
      id={`post-${post.id}`}
      className="border border-black rounded-xl cursor-pointer overflow-hidden"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto mb-4 m-0"
      />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <div className="flex gap-2 text-gray-400 mb-2">
          {post.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <h5 className="text-lg font-semibold mb-1">{post.user}</h5>
        <p className="text-sm text-gray-500 mb-2">{post.created_at}</p>
        <p className="text-sm text-gray-700">{post.body}</p>
      </div>
    </article>
  );
}
