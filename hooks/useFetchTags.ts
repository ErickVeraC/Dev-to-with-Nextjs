import { useEffect, useState } from "react";

interface Tag {
  name: string;
  count: number;
  createdAt: string;
}

export function useFetchTags(fetchTags: () => Promise<Tag[]>) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTags()
      .then((data) => {
        setTags(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [fetchTags]);

  return { tags, loading, error };
}
