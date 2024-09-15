import { useFetchTags } from "@/hooks/useFetchTags";
import { getPopularTags } from "@/utils/api";

export default function PopularTags() {
  const { tags, loading, error } = useFetchTags(getPopularTags);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Popular Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag.name}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
}
