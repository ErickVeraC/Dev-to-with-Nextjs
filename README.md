# Dev-to-with-Nextjs

![Dev-to-with-Nextjs Banner](./public/dev-icon.png)

You can find the project on https://dev-to-with-nextjs-dcqh.vercel.app/
And the backend on https://desafio-backend-jnku.onrender.com

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Git Workflow](#git-workflow)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

**Dev-to-with-Nextjs** is a modern, responsive web application inspired by the popular Dev.to platform. Built with Next.js, this project leverages the power of React for a seamless user experience, Tailwind CSS for efficient styling, and robust API integrations to manage content creation and user authentication. Whether you're a developer looking to share your insights or a tech enthusiast seeking valuable content, Dev-to-with-Nextjs provides a platform tailored to your needs.

## Features

- **User Authentication:** Secure login and registration using JWT-based authentication.
- **Create Posts:** Users can create rich posts with titles, images, tags, and detailed content.
- **Tag Management:** Add up to four tags per post for better categorization and discoverability.
- **Responsive Design:** Optimized for all devices using Tailwind CSS.
- **API Integration:** Seamless communication with a custom backend API for data management.
- **Real-time Feedback:** Instant success and error messages upon post creation.
- **Clean Codebase:** Structured with best practices for maintainability and scalability.

## Technologies Used

- **Next.js:** A React framework for server-side rendering and generating static websites.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **JavaScript (ES6+):** Modern JavaScript features for enhanced functionality.
- **Fetch API:** For making HTTP requests to the backend API.
- **Git:** Version control system for tracking changes and collaborating.
- **GitHub:** Hosting platform for version control and collaboration.

## Project Structure

The project follows a structured and modular approach to ensure scalability and ease of maintenance. Below is an overview of the main directories and files:

```
Dev-to-with-Nextjs/
├── components/
│   ├── Form.js
│   ├── Header.js
│   └── Tag.js
├── pages/
│   ├── api/
│   │   └── posts.js
│   ├── index.js
│   └── new.js
├── public/
│   ├── images/
│   │   └── DevIcon.jpg
│   └── CSS/
│       └── styles.css
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── utils/
│   ├── createPost.js
│   └── parseJwt.js
├── .gitignore
├── package.json
├── tailwind.config.js
├── README.md
└── next.config.js
```

### Key Directories and Files

- **components/**: Contains reusable React components like forms, headers, and tag elements.
- **pages/**: Includes all the Next.js pages, such as the home page (`index.js`) and the new post page (`new.js`).
- **public/**: Hosts static assets like images and CSS files.
- **styles/**: Contains global and module-specific CSS files.
- **utils/**: Utility functions for API interactions and token parsing.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **next.config.js**: Configuration file for Next.js settings.

## Installation

To get started with Dev-to-with-Nextjs locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ErickVeraC/Dev-to-with-Nextjs.git
   cd Dev-to-with-Nextjs
   ```

2. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env.local` file in the root directory and add your API base URL:

   ```env
   NEXT_PUBLIC_API_BASE_URL=https://desafio-backend-jnku.onrender.com
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Usage

### Creating a New Post

1. **Navigate to the New Post Page**

   Go to [http://localhost:3000/new](http://localhost:3000/new) to access the post creation form.

2. **Fill Out the Form**

   - **Cover Image URL:** Provide a URL to the cover image.
   - **Post Title:** Enter the title of your post.
   - **Tags:** Add up to four tags by typing and pressing the spacebar.
   - **Content:** Write the main content of your post.

3. **Publish the Post**

   Click the "Publish" button to submit your post. Upon successful submission, a success message will appear, and you'll be redirected to the home page.

### Viewing Posts

Navigate to the home page [http://localhost:3000](http://localhost:3000) to view all published posts.

## API Integration

Dev-to-with-Nextjs communicates with a backend API to handle data operations such as creating and fetching posts. The API endpoints are defined as follows:

- **Base URL:** The API base URL is defined in the `.env.local` file as `NEXT_PUBLIC_API_BASE_URL`.

### Endpoints

- **Create Post**

  - **URL:** `POST /post`
  - **Headers:**
    - `Content-Type: application/json`
    - `Authorization: Bearer <token>`
  - **Body:**
    ```json
    {
      "title": "Post Title",
      "body": "Post content...",
      "image": "https://image-url.com",
      "tags": ["#tag1", "#tag2"],
      "timestamp": "2024-09-16T12:34:56Z",
      "user": "userId"
    }
    ```
  - **Response:**
    - **Success:** Returns the created post object.
    - **Error:** Returns an error message detailing what went wrong.

### Utility Functions

- **createPost.js**

  Handles the API call to create a new post.

  ```javascript
  export async function createPost(postData, token) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/post`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Error: ${response.statusText} - ${errorDetails}`);
    }

    return await response.json();
  }
  ```

- **parseJwt.js**

  Parses the JWT token to extract user information. _(Note: JWT parsing is handled by the backend, so this may be deprecated or removed in the latest implementation.)_

  ```javascript
  export function parseJwt(token) {
    if (!token) return null;
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }
  ```

## Git Workflow

Dev-to-with-Nextjs employs a structured Git workflow to maintain code quality and facilitate collaboration. Here's an overview of the Git snapshot structure:

### Branching Strategy

- **Main Branch (`main`):** Contains the production-ready code.
- **Development Branch (`develop`):** Integrates features before merging into the main branch.
- **Feature Branches (`feature/*`):** Each new feature is developed in its own branch, e.g., `feature/create-post`.
- **Bugfix Branches (`bugfix/*`):** Fixes for specific issues, e.g., `bugfix/fix-publish-button`.
- **Hotfix Branches (`hotfix/*`):** Critical fixes applied directly to the main branch.

### Commit Messages

Adheres to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for clarity and consistency.

- **Format:**
  ```
  <type>(<scope>): <description>
  ```
- **Examples:**
  - `feat(form): add tag management functionality`
  - `fix(api): handle post creation errors`
  - `docs(readme): update installation instructions`

## Contributing

Contributions are welcome! Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch from `develop`.
3. Make your changes and ensure they adhere to the project's coding standards.
4. Commit your changes with a meaningful message.
5. Push your branch and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **GitHub Issues:** [https://github.com/ErickVeraC/Dev-to-with-Nextjs/issues](https://github.com/ErickVeraC/Dev-to-with-Nextjs/issues)
- **Email:** erickverac90@gmail.com
