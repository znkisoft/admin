import { Button, createStyles, Group, SimpleGrid, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { Userver } from "../../service/api/schema/models"
import { Post } from "../../service/api/fetch"

const useStyles = createStyles((theme) => ({
    root: {
        position: "relative",
    },
    fields: {
        "& > *": {
            marginBottom: 16,
        },
    },
    input: {
        height: "auto",
    },
    label: {
        pointerEvents: "none",
        // paddingLeft: theme.spacing.sm,
        zIndex: 1,
    },
}))

// TODO dynamic form inputs
interface createUserverInput {
    label: keyof Userver
    type: "text" | "number" | "select" | "date"
}

// const inputs: createUserverInput[] = [
//     { name: "hostname", type: "text" },
//     { name: "alias", type: "text" },
//     { name: "ip", type: "text" },
//     { name: "port", type: "number" },
//     { name: "protocol", type: "text" },
//     { name: "checkInterval", type: "number" },
//     { name: "timeout", type: "number" },
// ]

export default function CreateUserver() {
    const { classes } = useStyles()

    const form = useForm<Partial<Userver>>({
        initialValues: {
            hostname: "hostname",
            alias: "alias",
            ip: "192.168.1.1",
            port: 80,
            protocol: "protocol",
            checkInterval: 5,
            timeout: 30,
        },

        validate: {
            // TODO validate form inputs
            // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
        },
    })

    const submitHandler = (e) => {
        Post("api/userver", e).then(console.log)
    }

    // data-autofocus
    return (
        <div className={classes.fields}>
            <form onSubmit={form.onSubmit(submitHandler)}>
                <TextInput
                    withAsterisk
                    classNames={classes}
                    label="hostname"
                    description="hostname for your server, check with `uname -a` command"
                    {...form.getInputProps("hostname")}
                />
                <TextInput
                    classNames={classes}
                    label="alias"
                    description="alias for hostname, not required"
                    {...form.getInputProps("alias")}
                />
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                    <TextInput
                        withAsterisk
                        classNames={classes}
                        label="ip"
                        description="ip address"
                        {...form.getInputProps("ip")}
                    />
                    <TextInput
                        withAsterisk
                        classNames={classes}
                        label="port"
                        type="number"
                        description="port for checking status"
                        {...form.getInputProps("port")}
                    />
                </SimpleGrid>
                <TextInput
                    withAsterisk
                    classNames={classes}
                    label="protocol"
                    description="network protocol for checking status"
                    {...form.getInputProps("protocol")}
                />
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                    <TextInput
                        withAsterisk
                        classNames={classes}
                        label="checkInterval"
                        type="number"
                        {...form.getInputProps("checkInterval")}
                    />
                    <TextInput
                        withAsterisk
                        classNames={classes}
                        label="timeout"
                        type="number"
                        {...form.getInputProps("timeout")}
                    />
                </SimpleGrid>
                <Group position="center" mt="lg">
                    <Button type="submit" variant="outline">
                        Add
                    </Button>
                </Group>
            </form>
        </div>
    )
}
