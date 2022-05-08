import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Home";

// TODO add dynamic import
// TODO add auth page

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ],
};

// const LoginRoutes = {
//   path: "/",
//   element: <MinimalLayout />,
//   children: [
//     {
//       path: "login",
//       element: <AuthLogin />,
//     },
//     {
//       path: "register",
//       element: <AuthRegister />,
//     },
//   ],
// };

export default function Routes() {
  // return useRoutes([MainRoutes, LoginRoutes]);
  return useRoutes([MainRoutes]);
}
