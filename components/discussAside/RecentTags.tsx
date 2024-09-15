import { useFetchTags } from "@/hooks/useFetchTags";
import { getRecentTags } from "@/utils/api";

export default function RecentTags() {
  const { tags, loading, error } = useFetchTags(getRecentTags);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Recent Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag.name}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
}
