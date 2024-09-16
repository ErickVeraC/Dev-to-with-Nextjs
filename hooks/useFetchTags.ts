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
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTags();
        setTags(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchTags]);

  return { tags, loading, error };
}
