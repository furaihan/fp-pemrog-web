import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root/Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import About from "./routes/About/About.jsx";
import Explore from "./routes/Explore/Explore.jsx";
import Train from "./routes/Train/Train.jsx";
import Login from "./routes/Login/Login.jsx";
import Signup from "./routes/SignUP/signUp.jsx";
import Description from "./routes/Explore/Description.jsx";
import Quiz from "./routes/Quiz/Quiz.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/explore",
    element: <Explore />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/train",
    element: <Train />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Description",
    element: <Description />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Quiz",
    element: <Quiz />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
