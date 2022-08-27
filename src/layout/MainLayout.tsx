import { AppShell } from "@mantine/core"
import * as React from "react"
import { Outlet } from "react-router-dom"
import { footerConfig, headerConfig, navbarConfig } from "../config/layout.config"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"

export default function MainLayout() {
    return (
        <AppShell
            padding="md"
            navbar={Navbar(navbarConfig)}
            header={Header(headerConfig)}
            styles={(theme) => ({
                main: {
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            })}
            footer={Footer(footerConfig)}
        >
            <React.Suspense fallback={<p>loading...</p>}>
                <Outlet />
            </React.Suspense>
        </AppShell>
    )
}
