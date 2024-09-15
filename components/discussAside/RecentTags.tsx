import { useFetchTags } from "@/hooks/useFetchTags";
import { getRecentTags } from "@/utils/api";

export default function RecentTags() {
  const { tags, loading, error } = useFetchTags(getRecentTags);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="border rounded-md border-gray-300 bg-white py-2">
      <h2 className="text-xl font-semibold pb-2 px-2 border-b border-gray-300/8">
        Recent Tags
      </h2>
      <ul className="list-none">
        {tags.map((tag, index) => (
          <li
            key={tag.name}
            className={`text-gray-700 ${
              index !== tags.length - 1 ? "border-b border-gray-300/8" : ""
            } py-2`}
          >
            <span className="px-2">{tag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
