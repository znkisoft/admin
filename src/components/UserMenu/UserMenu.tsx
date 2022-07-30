import { Avatar, Group, Menu, NavLink, Text, UnstyledButton } from "@mantine/core"
import { forwardRef } from "react"
import { ArrowRight } from "tabler-icons-react"
import { UserMenuItemsProps } from "types/layout"

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string
  name: string
  email: string
  icon?: React.ReactNode
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: "block",
        width: "280px",
        padding: theme.spacing.md,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <ArrowRight size={16} />}
      </Group>
    </UnstyledButton>
  )
)

export default function UserMenu({ menuItems }: { menuItems: UserMenuItemsProps }) {
  // TODO add user authentication state
  const authed = true
  return (
    <Menu offset={-8}>
      <Menu.Target>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Harriette Spoonlicker"
          email="hspoonlicker@outlook.com"
        />
      </Menu.Target>
      <Menu.Dropdown>
        {menuItems
          .filter((item) => item.loggedIn === authed)
          .map((item) => {
            return (
              <Menu.Item>
                <NavLink label={item.label} icon={<item.icon size={14} />} />
              </Menu.Item>
            )
          })}
      </Menu.Dropdown>
    </Menu>
  )
}
