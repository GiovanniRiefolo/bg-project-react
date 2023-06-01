import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SSRProvider from 'react-bootstrap/SSRProvider';
// Routes
import Root from "./routes/root";
import Contact from "./routes/contact";
import Posts from "./routes/posts";
import Headers from "./routes/headers";
import Tags from "./routes/tags";
import Authors from "./routes/authors";
import Login from "./routes/login";
import Features from "./routes/features";
// Error pages
import Error404 from "./routes/404";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/bg-project-react/",
    element: <Root />,
    errorElement: <Error404 />,
  },
  {
    path: "/bg-project-react/contact",
    element: <Contact />,
    errorElement: <Error404 />,
  },
  {
    path: "/bg-project-react/posts",
    element: <Posts />,
    errorElement: <Error404 />,
  },
  {
    path: "/bg-project-react/tags",
    element: <Tags />,
    errorElement: <Error404 />,
  },
  {
    path: "/bg-project-react/authors",
    element: <Authors />,
    errorElement: <Error404 />,
  },
  {
    path: "/bg-project-react/headers",
    element: <Headers />,
    errorElement: <Error404 />,
  },
  {
    path: "/bg-project-react/features",
    element: <Features />,
    errorElement: <Error404 />,
  },
  {
    path: "/bg-project-react/login",
    element: <Login />,
    errorElement: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <SSRProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </SSRProvider>
);
