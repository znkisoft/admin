import { Button, Container, Paper, PasswordInput, TextInput, Title } from "@mantine/core"

export default function Signup() {
    return (
        <Container size={420} my={40}>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Sign Up
            </Title>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@email.com" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Button fullWidth mt="xl">
                    Sign up
                </Button>
            </Paper>
        </Container>
    )
}
