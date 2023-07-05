import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//Routes
import Root from "./routes/Root/Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import About from "./routes/About/About.jsx";
import Explore from "./routes/Explore/Explore.jsx";
import Train from "./routes/Train/Train.jsx";
import Login from "./routes/Login/Login.jsx";
import Signup from "./routes/Signup/Signup.jsx";
import Description from "./routes/Explore/Description.jsx";
import Quiz from "./routes/Quiz/Quiz.jsx";
import Profile from "./routes/Profile/Profile.jsx";
import EditProfile from "./routes/EditProfile/EditProfile.jsx";
import QuizResult from "./routes/Quiz/QuizResult.jsx";

//Layouts
import RootLayout from "./layouts/RootLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

//Action
import signUpAction from "./action/signup.js";
import loginAction from "./action/login.js";
import getCurrentUserLoader from "./action/getCurrentUser.js";
import getProfileLoader from "./action/getProfile.js";
import updateProfileAction from "./action/updateProfile.js";

import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />} loader={getCurrentUserLoader}>
        <Route index element={<Root />} />
        <Route path="about" element={<About />} />
        <Route path="explore" element={<Explore />} />
        <Route path="description" element={<Description />} />
        <Route path="train" element={<Train />} />
        <Route path="profile" element={<Profile />} loader={getProfileLoader} />
        <Route
          path="editprofile"
          element={<EditProfile />}
          action={updateProfileAction}
        />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} action={loginAction} />
        <Route path="/signup" element={<Signup />} action={signUpAction} />
      </Route>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quizresult" element={<QuizResult />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
