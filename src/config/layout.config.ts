import {
  Home2,
  Gauge,
  DeviceDesktopAnalytics,
  Fingerprint,
  CalendarStats,
  User,
  BrandDocker,
  Settings,
  Link,
  AppWindow,
  ZoomQuestion,
  Terminal,
} from "tabler-icons-react";
import { FooterLinksProps, HeaderSearchProps, NavbarLinkProps } from "../types/layout";

export const navbarConfig: NavbarLinkProps[] = [
  { icon: Terminal, label: "Terminal", link: "/tty" },
  { icon: DeviceDesktopAnalytics, label: "Dashboard", link: "/dashboard" },
  { icon: AppWindow, label: "Server Stats", link: "/server" },
  { icon: BrandDocker, label: "Docker Management", link: "/docker" },
  { icon: Link, label: "URL Shortener", link: "/uRL" },
  { icon: CalendarStats, label: "Releases", link: "/releases" },
  { icon: User, label: "Account", link: "/account" },
  { icon: ZoomQuestion, label: "FAQ", link: "/faq" },
  { icon: Settings, label: "Settings", link: "/settings" },
];

export const headerConfig: HeaderSearchProps = {
  links: [
    {
      link: "#",
      label: "Home",
      links: [],
    },
  ],
};

export const footerConfig: FooterLinksProps = {
  data: [],
};
