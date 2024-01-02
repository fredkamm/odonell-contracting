import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectsGallery from "./pages/ProjectsGallery.jsx";

import "./index.css";
import ServicesPage from "./pages/ServicesPage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutUsPage />,
      },
      {
        path: 'projects',
        element: <ProjectsGallery />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);