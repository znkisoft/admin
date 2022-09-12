import React from "react"
import useStyles from "./ServerCard.styles"
import { ActionIcon, Card, Divider, Group, Menu, Stack, Text } from "@mantine/core"
import { IconDots, IconTrash } from "@tabler/icons"
import PingBadge from "./ServerCardPingBadge"
import StatsRing from "./ServerCardRing"

interface ServerCardProps {
    label: string
    stats: "online" | "offline" | "unknown"
}

const statsRing = [
    {
        label: "CPU",
    },
    {
        label: "MEM",
    },
]

export const ServerCard = ({ label, stats }: ServerCardProps) => {
    const { classes } = useStyles()

    return (
        <Card withBorder shadow="sm" radius="md" className={classes.root}>
            <Group className={classes.group}>
                <Card.Section className={classes.content}>
                    <Stack ml="md" align="flex-start">
                        <Group position="apart">
                            <Text weight={500}>{label}</Text>
                            <PingBadge status={stats} />
                        </Group>
                    </Stack>

                    <Menu withinPortal position="bottom-end" shadow="sm">
                        <Menu.Target>
                            <ActionIcon className={classes.menu}>
                                <IconDots size={16} />
                            </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item icon={<IconTrash size={14} />} color="red"></Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Card.Section>
                <Divider orientation="vertical" />
                <Card.Section className={classes.rings} inheritPadding>
                    <Group spacing={"xs"}>
                        {statsRing.map((item, index) => (
                            <StatsRing key={index} label={item.label} progress={20} />
                        ))}
                    </Group>
                </Card.Section>
            </Group>
        </Card>
    )
}

export default ServerCard
