import { Col, Container, createStyles, Grid, Title } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
    },

    title: {
        marginBottom: theme.spacing.md,
        paddingLeft: theme.spacing.md,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    item: {
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
    },
}))

const placeholder =
    "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon."

export default function FAQ() {
    const { classes } = useStyles()
    return (
        <div className={classes.wrapper}>
            <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                    <Col span={12} md={6}>
                        {/* TODO add image */}
                    </Col>
                    <Col span={12} md={6}>
                        <Title order={2} align="left" className={classes.title}>
                            Frequently Asked Questions
                        </Title>
                    </Col>
                </Grid>
            </Container>
        </div>
    )
}
