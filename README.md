# User Feed Application

## Description

The **User List Application** displays an infinite-scroll feed of users, loading more data as the user scrolls down using the **Intersection Observer API** and the custom hook `useInfiniteScroll`. Data is fetched from the public API [RandomUser.me](https://randomuser.me). The project utilizes **React**, **Tailwind CSS**, and **ShadCN UI**

## Tech Stack

-   **React**: For building user interfaces.
-   **Vite**: For fast development and build setup.
-   **Tailwind CSS**: Utility-first CSS framework for styling.
-   **ShadCN UI**: Component library with dark theme support.
-   **RandomUser API**: Public API for user data.

## Features

-   **Infinite Scroll User Feed** with data fetching.
-   **Skeleton Loading Screens** for smoother data loading UX.
-   **Responsive UI** for a consistent experience on various devices.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/user-feed-app.git
    cd user-feed-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the RandomUser API base URL:

    ```env
    VITE_BASE_API_URL=https://randomuser.me/api/
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```plaintext
src/
├── api/                        # API requests
│   └── userApi.js              # fetchUsers function to get user data
├── assets/                     # Static assets and global styles
│   └── styles/
│       └── index.css           # Global styles using Tailwind CSS
├── components/
│   ├── UserCard/               # UserCard component to display user info
│   ├── SkeletonCard/           # SkeletonCard component for loading state
│   ├── UserList/               # UserList component for user feed
├── config/                     # Configurations
│   └── apiConfig.js            # API URL configuration
├── hooks/
│   └── useInfiniteScroll.js    # Custom hook for infinite scrolling
├── pages/
│   └── userPage.js             # Page to display user feed
├── App.jsx                     # Main app component
├── index.js                    # Entry point
└── vite.config.js              # Vite config with alias support
```

Custom Scripts

In package.json, custom scripts are set up for ESLint and Prettier:

    •	npm run lint: Runs ESLint to identify issues.
    •	npm run format: Formats all files based on Prettier rules.
    •	npm run format:check: Checks files against Prettier formatting without making changes.
