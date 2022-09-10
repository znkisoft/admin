import {
    AppWindow,
    BrandDocker,
    CalendarStats,
    DeviceCctv,
    DeviceDesktopAnalytics,
    InfoCircle,
    Link,
    Login,
    Logout,
    Settings,
    Terminal,
    ZoomQuestion,
} from "tabler-icons-react"
import { FooterLinksProps, HeaderSearchProps, NavbarLinkProps, UserMenuItemsProps } from "../types/layout"

export const navbarConfig: NavbarLinkProps[] = [
    { icon: Terminal, label: "Terminal", link: "/tty" },
    { icon: DeviceCctv, label: "Cattv", link: "/cattv" },
    { icon: DeviceDesktopAnalytics, label: "Dashboard", link: "/dashboard" },
    { icon: AppWindow, label: "Server Stats", link: "/server" },
    { icon: BrandDocker, label: "Docker Management", link: "/docker" },
    { icon: Link, label: "URL Shortener", link: "/uRL" },
    { icon: CalendarStats, label: "Releases", link: "/releases" },
    { icon: ZoomQuestion, label: "FAQ", link: "/faq" },
    { icon: Settings, label: "Settings", link: "/settings" },
]

export const headerConfig: HeaderSearchProps = {
    links: [
        {
            link: "#",
            label: "Home",
            links: [],
        },
    ],
}

export const footerConfig: FooterLinksProps = {
    data: [],
}

export const UserMenuItems: UserMenuItemsProps = [
    { loggedIn: false, icon: Login, label: "Sign in", link: "/tty" },
    { loggedIn: true, icon: Logout, label: "Log out", link: "/tty" },
    { loggedIn: true, icon: InfoCircle, label: "My Info", link: "/tty" },
]
