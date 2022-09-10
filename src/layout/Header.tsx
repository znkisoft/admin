import { createStyles, Header as MHeader, Image } from "@mantine/core"
import { HeaderSearchProps } from "../types/layout"
import Logo from "assets/logo.znkisoft.png"

const useStyles = createStyles((theme) => ({
    inner: {
        height: 56,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        padding: "0.1rem 0.2rem",
        marginLeft: "1rem",
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
                <Image className={classes.logo} src={Logo} height={40} width={200} fit={"scale-down"} />
            </div>
        </MHeader>
    )
}
