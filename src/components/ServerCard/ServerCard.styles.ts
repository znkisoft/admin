import { createStyles } from "@mantine/core"

export default createStyles((theme) => ({
    root: {
        width: "100%",
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        transition: "transform 150ms ease, box-shadow 100ms ease",
        padding: theme.spacing.xl,
        paddingLeft: theme.spacing.xl * 2,

        "&:hover": {
            boxShadow: theme.shadows.md,
            transform: "scale(1.01)",
        },

        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
            backgroundImage: theme.fn.linearGradient(0, theme.colors.blue[6], theme.colors.blue[4]),
        },
    },
    group: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    menu: {
        position: "absolute",
        top: 0,
        right: 10,
    },
    content: {
        flexGrow: 1,
    },
    rings: {
        width: 300,
    },
}))
