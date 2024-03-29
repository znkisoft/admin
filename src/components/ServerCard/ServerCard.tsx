import React from "react"
import useStyles from "./ServerCard.styles"
import { ActionIcon, Button, Card, Divider, Group, Menu, Stack, Text } from "@mantine/core"
import { IconDots, IconTrash } from "@tabler/icons"
import PingBadge from "./ServerCardPingBadge"
import StatsRing from "./ServerCardRing"
import { Userver } from "../../service/api/schema/models"
import { Delete } from "../../service/api/fetch"
import { BrandDocker } from "tabler-icons-react"

interface ServerCardProps extends Partial<Userver> {
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
    {
        label: "STORAGE",
    },
]

export const ServerCard = ({ label, stats, id }: ServerCardProps) => {
    const { classes } = useStyles()

    const deleteServer = () => {
        Delete(`api/userver/${id}`)
    }

    return (
        <Card withBorder shadow="sm" radius="md" className={classes.root}>
            <Group className={classes.group}>
                <Card.Section className={classes.content}>
                    <Stack ml="md" align="flex-start" justify="flex-start" spacing="xs">
                        <Group position="apart">
                            <Text weight={500}>{label}</Text>
                            <PingBadge status={stats} />
                        </Group>
                        <Group position="left">
                            <Button variant="subtle">
                                <BrandDocker />
                            </Button>
                        </Group>
                    </Stack>
                    <Menu withinPortal position="right-start" shadow="sm">
                        <Menu.Target>
                            <ActionIcon className={classes.menu}>
                                <IconDots size={16} />
                            </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item icon={<IconTrash size={14} />} color="red" onClick={deleteServer}>
                                delelte server
                            </Menu.Item>
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
