import React from "react"
import { useRoutes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgetPwd from "./pages/ForgetPwd"
import Userver from "./pages/Userver/Userver"
import DockerPage from "./pages/Docker/DockerPage"
import FAQ from "./pages/FAQ"
import NotFound from "./pages/NotFound"
import TTY from "./pages/TTY"
import HomePage from "./pages/Home"

// TODO solve suspense issue
// const Dashboard = React.lazy(() => import("./pages/Dashboard"))
// const DockerPage = React.lazy(() => import("./pages/DockerPage"))
// const FAQ = React.lazy(() => import("./pages/FAQ"))
// const HomePage = React.lazy(() => import("./pages/Home"))
// const NotFound = React.lazy(() => import("./pages/NotFound"))
// const TTY = React.lazy(() => import("./pages/TTY"))

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
            element: <Userver />,
        },
        {
            path: "/faq",
            element: <FAQ />,
        },
        {
            path: "/docker",
            element: <DockerPage />,
        },
        {
            path: "/tty",
            element: <TTY />,
        },
    ],
}

const LoginRoutes = {
    path: "",
    children: [
        {
            path: "",
            element: <Login />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/pwd",
            element: <ForgetPwd />,
        },
    ],
}

const NotFoundRoutes = {
    path: "*",
    element: <NotFound />,
}
export default function Routes() {
    return useRoutes([MainRoutes, LoginRoutes, NotFoundRoutes])
}
