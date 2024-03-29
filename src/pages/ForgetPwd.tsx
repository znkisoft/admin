import { Button, Container, Paper, TextInput, Title } from "@mantine/core"

export default function ForgetPwd() {
    return (
        <Container size={420} my={40}>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Forget Password?
            </Title>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@email.com" required />
                <Button fullWidth mt="xl">
                    Reset Password
                </Button>
            </Paper>
        </Container>
    )
}
