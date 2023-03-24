import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Home from "@components/pages/Home";
import Login from "@components/pages/auth/Login";
import Profile from "@components/pages/profile";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/auth/signin", element: <Login /> },
  { path: "/profile", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
