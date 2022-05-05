import { createStyles, Paper } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export default function AppContent({ children }) {
  const { classes } = useStyles();

  return (
    <Paper className={classes.root} shadow="xs" p="md">
      {children}
    </Paper>
  );
}
