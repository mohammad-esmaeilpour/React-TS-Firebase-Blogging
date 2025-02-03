import { TAboutData } from "src/types/about";

export const about_data: TAboutData = {
  title: "About My Blogging Platform",
  description:
    "Welcome to my Modern Blogging App! This app is designed to give you a seamless and interactive platform for creating and managing your blog posts. Built with React, TypeScript, and Firebase, the app provides a fast, responsive, and real-time blogging experience.",

  list: [
    {
      title: "Key Features",
      description: "Our app comes with the following features to enhance your blogging experience:",
      list: [
        {
          key: "User Authentication:",
          value:
            "Easily sign up, log in, and log out with Firebase Authentication. Each user gets a unique profile to manage their posts.",
        },
        {
          key: "CRUD Functionality:",
          value:
            "Create, read, update, and delete blog posts with ease. Manage your content effortlessly from a clean and intuitive interface.",
        },
        {
          key: "Rich Text Editor:",
          value:
            " Write blogs with rich text formatting, including bold, bullet points, and custom line spacing for a polished look.",
        },
        {
          key: "Real-Time Updates:",
          value:
            "Your blog posts are updated in real-time thanks to Firebase Firestore. See changes immediately as you make them.",
        },
        {
          key: "Responsive Design:",
          value:
            "Built using Tailwind CSS, the app is fully responsive, offering a smooth experience across different devices.",
        },
      ],
    },
    {
      title: "Firebase Integration",
      description:"This app uses Firebase for authentication and Firestore for managing blog posts. Firebase provides secure and scalable services for both user authentication and real-time data storage.",
      list: [
        {
          key: "User Authentication:",
          value:
            "Easily sign up, log in, and log out with Firebase Authentication. Each user gets a unique profile to manage their posts.",
        },
        {
          key: "CRUD Functionality:",
          value:
            "Create, read, update, and delete blog posts with ease. Manage your content effortlessly from a clean and intuitive interface.",
        },
        {
          key: "Rich Text Editor:",
          value:
            " Write blogs with rich text formatting, including bold, bullet points, and custom line spacing for a polished look.",
        },
        {
          key: "Real-Time Updates:",
          value:
            "Your blog posts are updated in real-time thanks to Firebase Firestore. See changes immediately as you make them.",
        },
        {
          key: "Responsive Design:",
          value:
            "Built using Tailwind CSS, the app is fully responsive, offering a smooth experience across different devices.",
        },
      ],
    },
  ],
  about: {
    title: "About the Developer",
    first_description:
      "Mohammad Esmaeilpour—a passionate front-end developer with over 3 years of experience, specializing in building modern, responsive, and feature-rich web applications. My expertise spans React, Next.js, JavaScript, TypeScript, Tailwind CSS, and Material UI.",
    second_description:
      "I have successfully developed and deployed various projects, including dashboards, e-commerce platforms, and portfolio websites. My focus is on delivering high-performance, SEO-friendly, and scalable solutions tailored to meet business needs.",
  },
};
