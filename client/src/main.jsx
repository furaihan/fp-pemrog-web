import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./routes/Root/Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import About from "./routes/About/About.jsx";
import Explore from "./routes/Explore/Explore.jsx";
import Train from "./routes/Train/Train.jsx";
import Login from "./routes/Login/Login.jsx";
import Signup from "./routes/Signup/Signup.jsx";
import Description from "./routes/Explore/Description.jsx";
import Quiz from "./routes/Quiz/Quiz.jsx";

//Layouts
import RootLayout from "./layouts/RootLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

//Api
import signUpAction from "./action/signup.js"; 

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Root />} />
        <Route path="about" element={<About />} />
        <Route path="explore" element={<Explore />} />
        <Route path="description" element={<Description />} />
        <Route path="train" element={<Train />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} action={signUpAction} />
      </Route>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
