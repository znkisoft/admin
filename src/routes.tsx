import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/FAQ";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import Server from "./pages/Server";

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
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/server",
      element: <Server />,
    },
    {
      path: "*",
      element: <NotFound />,
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
