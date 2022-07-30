import { createStyles, Header as MHeader } from "@mantine/core"
import UserMenu from "components/UserMenu"
import { UserMenuItems } from "config/layout.config"
import { HeaderSearchProps } from "../types/layout"

const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}))

export default function Header({ links }: HeaderSearchProps) {
  const { classes } = useStyles()

  return (
    <MHeader height={56}>
      <div className={classes.inner}>
        <div>{/* TODO logo */}</div>
        <UserMenu menuItems={UserMenuItems} />
      </div>
    </MHeader>
  )
}
