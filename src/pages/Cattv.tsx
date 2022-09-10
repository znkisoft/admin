import { createStyles, Paper } from "@mantine/core"
import Television from "../components/Television/Television"

const useStyles = createStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}))

export default function Cattv() {
    const { classes } = useStyles()
    return (
        <Paper className={classes.root}>
            <h1>Cattv</h1>
            <Television />
        </Paper>
    )
}
