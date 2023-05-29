import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Routes
import Root from "./routes/root";
import Contact from "./routes/contact";
import Posts from "./routes/posts";
import Headers from "./routes/headers";
import Tags from "./routes/tags";
import Authors from "./routes/authors";
import Login from "./routes/login";
// Error pages
import Error404 from "./routes/404";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error404 />,
  },
  {
    path: "/posts",
    element: <Posts />,
    errorElement: <Error404 />,
  },
  {
    path: "/tags",
    element: <Tags />,
    errorElement: <Error404 />,
  },
  {
    path: "/authors",
    element: <Authors />,
    errorElement: <Error404 />,
  },
  {
    path: "/headers",
    element: <Headers />,
    errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
