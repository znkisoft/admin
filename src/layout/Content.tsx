import { createStyles, Paper } from "@mantine/core"
import { ReactNode } from "react"

const useStyles = createStyles((theme) => ({
    root: {
        height: "100vh",
    },
}))

interface Props {
    children: ReactNode
}

const AppContent = ({ children }: Props) => {
    const { classes } = useStyles()

    return (
        <Paper className={classes.root} shadow="xs" p="md">
            {children}
        </Paper>
    )
}

export default AppContent
