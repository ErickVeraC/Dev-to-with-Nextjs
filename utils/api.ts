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

export async function login(email: string, password: string) {
  console.log("Sending login request with:", { email, password });

  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  console.log("Received response:", response);

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error response data:", errorData);
    throw new Error(errorData.message || "Network response didn't return OK");
  }

  const data = await response.json();
  console.log("Received data:", data);

  if (data.success && data.data && data.data.token && data.data.userId) {
    return { token: data.data.token, userId: data.data.userId };
  } else {
    throw new Error("Invalid response structure");
  }
}

export async function getUserData(userId: string) {
  const response = await fetch(`${API_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error(`Error fetching user data: ${response.statusText}`);
  }
  const result = await response.json();
  console.log("User data fetched:", result);
  return result.data.user;
}

export async function createUser(
  email: string,
  password: string,
  name: string,
  profilePic: string
) {
  const response = await fetch(`${API_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, profilePic }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Network response was not ok");
  }

  const data = await response.json();
  return data;
}
