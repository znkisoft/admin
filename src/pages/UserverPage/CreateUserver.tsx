import { Button, createStyles, Group, SimpleGrid, TextInput } from "@mantine/core"

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

// interface createUserverInput {
//     name: "hostname" | "ip" | "alias" | "port" | "protocol" | "checkInterval" | "timeout"
//     type: "text" | "number" | "select" | "date"
// }
//
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

    // data-autofocus
    return (
        <div className={classes.fields}>
            <TextInput
                withAsterisk
                classNames={classes}
                label="hostname"
                description="hostname for your server, check with `uname -a` command"
            />
            <TextInput classNames={classes} label="alias" description="alias for hostname, not required" />
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput withAsterisk classNames={classes} label="ip" description="ip address" />
                <TextInput
                    withAsterisk
                    classNames={classes}
                    label="port"
                    type="number"
                    description="port for checking status"
                />
            </SimpleGrid>
            <TextInput
                withAsterisk
                classNames={classes}
                label="protocol"
                description="network protocol for checking status"
            />
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput withAsterisk classNames={classes} label="checkInterval" type="number" />
                <TextInput withAsterisk classNames={classes} label="timeout" type="number" />
            </SimpleGrid>
            <Group position="center" mt="lg">
                <Button type="submit" variant="outline">
                    Add
                </Button>
            </Group>
        </div>
    )
}
