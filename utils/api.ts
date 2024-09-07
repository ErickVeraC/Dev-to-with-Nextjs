const API_URL = "https://desafio-backend-jnku.onrender.com";

interface Post {
  id: number;
  title: string;
  content: string;
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${API_URL}/post`);
  if (!response.ok) {
    throw new Error(`Error fetching posts: ${response.statusText}`);
  }
  const data: Post[] = await response.json();
  return data;
}
