import { createStyles, Paper } from "@mantine/core"
import { ReactNode } from "react"

const useStyles = createStyles((theme) => ({
    root: {
        height: "100vh",
    },
}))

interface Props {
    children: ReactNode
    title?: string
}

const AppContent = ({ children, title }: Props) => {
    const { classes } = useStyles()

    return (
        <Paper className={classes.root} shadow="xs" p="md">
            {title && <h1 style={{ marginBottom: "1.5rem" }}> {title}</h1>}
            {children}
        </Paper>
    )
}

export default AppContent
