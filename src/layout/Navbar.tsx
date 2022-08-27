import { createStyles, Group, Navbar as MNavbar, Tooltip, UnstyledButton } from "@mantine/core"
import { ColorSchemeToggle } from "components/ColorSchemeToggle/ColorSchemeToggle"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Logout } from "tabler-icons-react"
import { NavbarLinkProps } from "../types/layout"

const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

        "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        "&, &:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 7],
        },
    },
}))

function NavbarLink({ icon: Icon, label, link, active, onClick }: NavbarLinkProps) {
    const { classes, cx } = useStyles()
    return (
        <Tooltip label={label} position="right" withArrow transitionDuration={0}>
            <UnstyledButton
                component={Link}
                to={link}
                onClick={onClick}
                className={cx(classes.link, { [classes.active]: active })}
            >
                <Icon />
            </UnstyledButton>
        </Tooltip>
    )
}

export default function Navbar(navbarItems: NavbarLinkProps[]) {
    const [active, setActive] = useState(2)

    const links = navbarItems.map((link, index) => (
        <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />
    ))

    return (
        <MNavbar width={{ base: 80 }} p="md">
            <MNavbar.Section grow mt={10}>
                <Group position="center" align="center" spacing={0}>
                    {links}
                </Group>
            </MNavbar.Section>
            <MNavbar.Section>
                <Group position="center" align="center" spacing={0}>
                    <ColorSchemeToggle />
                    <NavbarLink icon={Logout} label="Logout" link="/logout" />
                </Group>
            </MNavbar.Section>
        </MNavbar>
    )
}
