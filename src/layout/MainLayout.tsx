import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { NavbarMinimal } from "./Navbar";
import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { footerConfig, headerConfig, navbarConfig } from "../config/layout.config";

export default function MainLayout() {
  return (
    <AppShell
      padding="md"
      navbar={NavbarMinimal(navbarConfig)}
      header={Header(headerConfig)}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      footer={Footer(footerConfig)}
    >
      <Outlet />
    </AppShell>
  );
}
