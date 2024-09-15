import PopularTags from "@/components/discussAside/PopularTags";
import RecentTags from "@/components/discussAside/RecentTags";

export default function DiscussAside() {
  return (
    <aside className="p-2">
      <article className="pb-4">
        <PopularTags />
      </article>
      <article>
        <RecentTags />
      </article>
    </aside>
  );
}
