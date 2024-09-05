const API_URL = "https://desafio-backend-jnku.onrender.com";

export async function getPosts() {
  const response = await fetch(`${API_URL}/post`);
  const data = await response.json();
  return data;
}
