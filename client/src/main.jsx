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
import Logout from "./routes/Logout/Logout.jsx";

//Layouts
import RootLayout from "./layouts/RootLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

//Action
import signUpAction from "./api/signup.js";
import loginAction from "./api/login.js";
import getCurrentUserLoader from "./api/getCurrentUser.js";
import getProfileLoader from "./api/getProfile.js";
import updateProfileAction from "./api/updateProfile.js";
import logoutAction from "./api/logout.js";
import { getAnimalsLoader, getAnimalLoader } from "./api/animals.js";

import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />} loader={getCurrentUserLoader}>
        <Route index element={<Root />} />
        <Route path="about" element={<About />} />
        <Route path="explore" element={<Explore />} loader={getAnimalsLoader} />
        <Route path="description">
          <Route
            path=":id"
            element={<Description />}
            loader={getAnimalLoader}
          />
        </Route>
        <Route path="train" element={<Train />} />
        <Route path="profile" element={<Profile />} loader={getProfileLoader} />
        <Route
          path="editprofile"
          element={<EditProfile />}
          action={updateProfileAction}
        />
        <Route path="logout" element={<Logout />} loader={logoutAction} />
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
