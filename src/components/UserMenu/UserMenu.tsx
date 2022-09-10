import { ActionIcon, Avatar, createStyles, Menu } from "@mantine/core"
import { UserMenuItemsProps } from "types/layout"
import AvatarPH from "assets/avatar.png"
import React from "react"
import { Link } from "react-router-dom"

const useStyles = createStyles((theme) => ({}))

export default function UserMenu({ menuItems }: { menuItems: UserMenuItemsProps }) {
    const { classes } = useStyles()
    // TODO add user authentication state
    const authed = true
    return (
        <Menu withArrow position={"right"} offset={30} width={150}>
            <Menu.Target>
                <ActionIcon>
                    <Avatar src={AvatarPH} radius="xl" />
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                {menuItems
                    .filter((item) => item.loggedIn === authed)
                    .map((item, idx) => {
                        return (
                            <Menu.Item key={idx} component={Link} to={item.link} icon={<item.icon />}>
                                {item.label}
                            </Menu.Item>
                        )
                    })}
            </Menu.Dropdown>
        </Menu>
    )
}
