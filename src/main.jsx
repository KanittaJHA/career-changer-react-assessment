import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./components/Home-Page/HomePage";
import HomePageUser from "./components/Home-Page-User/HomePageUser";
import HomePageAdmin from "./components/Home-Page-Admin/HomePageAdmin";
import OwnerPage from "./components/Owner-Page/OwnerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/user",
    element: <HomePageUser />,
  },
  {
    path: "/admin",
    element: <HomePageAdmin />,
  },
  {
    path: "/owner",
    element: <OwnerPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);