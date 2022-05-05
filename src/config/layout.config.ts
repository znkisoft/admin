import {
  Home2,
  Gauge,
  DeviceDesktopAnalytics,
  Fingerprint,
  CalendarStats,
  User,
  Settings,
  Link,
  Database,
} from "tabler-icons-react";
import { FooterLinksProps, HeaderSearchProps, NavbarLinkProps } from "../types/layout";

export const navbarConfig: NavbarLinkProps[] = [
  { icon: Home2, label: "Home" },
  { icon: Gauge, label: "Dashboard" },
  { icon: DeviceDesktopAnalytics, label: "Server Stats" },
  { icon: Database, label: "Database" },
  { icon: Link, label: "URL Shortener" },
  { icon: CalendarStats, label: "Releases" },
  { icon: User, label: "Account" },
  { icon: Fingerprint, label: "Security" },
  { icon: Settings, label: "Settings" },
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
