# Blogging App

A modern **CRUD-based blogging app** built with **React, TypeScript, and Firebase**. This app allows users to create, read, update, and delete blog posts while handling user authentication with Firebase.

## Features

✅ User authentication with Firebase (Sign Up, Login, Logout)  
✅ Create, Read, Update, and Delete (CRUD) blog posts  
✅ Rich text editor with formatting (bold, bullet points, line spacing)  
✅ Real-time updates using Firebase Firestore  
✅ Notifications for new posts  
✅ SEO-friendly blog posts  
✅ Responsive design with Tailwind CSS  

## Firebase Setup

This template requires **Firebase** to function correctly. You must set up your Firebase project before running the app. Below are the steps to configure Firebase:

### Step 1: Create Firestore Collection

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Firestore Database** and create a new collection named **blogs**.
3. This collection must have the following fields:
   - `userId` (string) - The ID of the user who created the blog post.
   - `content` (string) - The main content of the blog post.
   - `title` (string) - The title of the blog post.

### Step 2: Create Firebase Configuration File

1. In your project’s **src** directory, create a new folder named **config**.
2. Inside the **config** folder, create a file named **firebaseConfig.ts**.

### Step 3: Configure Firebase

In **firebaseConfig.ts**, add the following code:

```ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "your API key",
  authDomain: "your authDomain",
  projectId: "your projectId",
  storageBucket: "your storageBucket",
  messagingSenderId: "your messagingSenderId",
  appId: "your appId",
  measurementId: "your measurementId",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

Replace the placeholders with your actual Firebase project credentials.

### Step 4: Install Dependencies & Run the App

1. Install the required dependencies:
   ```sh
   npm install  # or yarn install
   ```
2. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```

That’s it! Your blogging app is now ready to run. 🚀

## Deployment

To deploy the app on **Vercel**, follow these steps:

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Login to Vercel:
   ```sh
   vercel login
   ```
3. Deploy the project:
   ```sh
   vercel
   ```

## Contributing

Feel free to contribute! Fork the repo, create a new branch, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

📧 Email: your.email@example.com  
🔗 LinkedIn: [Your Name](https://linkedin.com/in/yourname)

