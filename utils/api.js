const API_URL = "https://desafio-backend-jnku.onrender.com";

export async function getPosts() {
  const response = await fetch(`${API_URL}/post`);
  if (!response.ok) {
    throw new Error(`Error fetching posts: ${response.statusText}`);
  }
  const data = await response.json();
  if (data.success && Array.isArray(data.data.posts)) {
    return data.data.posts;
  } else {
    throw new Error("Unexpected response structure");
  }
}

export async function getPopularTags() {
  const posts = await getPosts();
  if (!Array.isArray(posts)) {
    throw new Error("Expected posts to be an array");
  }
  const tagCount = {};

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  const tags = Object.keys(tagCount)
    .map((tag) => ({
      name: tag,
      count: tagCount[tag],
      createdAt: new Date().toISOString(),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return tags;
}

export async function getRecentTags() {
  const posts = await getPosts();
  if (!Array.isArray(posts)) {
    throw new Error("Expected posts to be an array");
  }
  const tagSet = new Set();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagSet.add(tag);
    });
  });

  const tags = Array.from(tagSet).map((tag) => ({
    name: tag,
    count: 1,
    createdAt: new Date().toISOString(),
  }));

  return tags.slice(0, 5);
}

export async function login(email, password) {
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

export async function getUserData(userId) {
  const response = await fetch(`${API_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error(`Error fetching user data: ${response.statusText}`);
  }
  const result = await response.json();
  console.log("User data fetched:", result);
  return result.data.user;
}

export async function createUser(email, password, name, profilePic) {
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

export async function getPostById(id) {
  try {
    console.log(`Fetching post with id: ${id}`);
    const response = await fetch(`${API_URL}/post/${id}`);
    if (!response.ok) {
      console.error(`Error fetching post: ${response.statusText}`);
      throw new Error(`Error fetching post: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Data received from API:", data);
    if (data.success) {
      return data.data;
    } else {
      console.error("Unexpected response structure:", data);
      throw new Error("Unexpected response structure");
    }
  } catch (error) {
    console.error("Error in getPostById:", error);
    throw error;
  }
}

export async function createPost(postData, token) {
  try {
    const response = await fetch(`${API_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorDetails}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}
