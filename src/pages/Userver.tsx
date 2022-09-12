import AppContent from "../layout/Content"
import { Button, createStyles, Divider, Group } from "@mantine/core"
import ServerCard from "../components/ServerCard/ServerCard"
import { IconGripVertical, IconServerCog } from "@tabler/icons"
import { useListState } from "@mantine/hooks"
// @ts-ignore
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const useStyles = createStyles((theme) => ({
    item: {
        display: "flex",
        alignItems: "center",
        borderRadius: theme.radius.md,
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
        padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
        paddingLeft: theme.spacing.xl - theme.spacing.md, // to offset drag handle
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
        marginBottom: theme.spacing.sm,
    },

    itemDragging: {
        boxShadow: theme.shadows.sm,
    },

    dragHandle: {
        ...theme.fn.focusStyles(),
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },
}))

interface ServerListProps {
    data: {
        alias: string
        name: string
        ip: string
        id: string
    }[]
}

export default function Userver() {
    return (
        <>
            <AppContent title="ServerList">
                <Group>
                    <Button leftIcon={<IconServerCog />} variant="outline">
                        Add New Server
                    </Button>
                </Group>
                <Divider mb={16} mt={8} />
                <CardList
                    data={[
                        {
                            alias: "homelab 1",
                            name: "ubuntu",
                            ip: "192.168.3.98",
                            id: "b8b9c9d0-5d6d-11eb-ae93-0242ac130002",
                        },
                        {
                            alias: "homelab 2",
                            name: "ubuntu",
                            ip: "192.168.3.98",
                            id: "b8b9c9d0-5d6d-11eb-ae93-0242ac130003",
                        },
                        {
                            alias: "homelab 3",
                            name: "ubuntu",
                            ip: "192.168.3.98",
                            id: "b8b9c9d0-5d6d-11eb-ae93-0242ac130004",
                        },
                    ]}
                />
            </AppContent>
        </>
    )
}

const CardList = ({ data }: ServerListProps) => {
    const { classes, cx } = useStyles()
    const [state, handlers] = useListState(data)

    const items = state.map((item, index) => (
        <Draggable key={item.id} index={index} draggableId={item.id}>
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div {...provided.dragHandleProps} className={classes.dragHandle}>
                        <IconGripVertical size={18} stroke={1.5} />
                    </div>
                    <ServerCard key={index} label={item.alias} stats={"unknown"} />
                </div>
            )}
        </Draggable>
    ))

    return (
        <DragDropContext
            onDragEnd={({ destination, source }) =>
                handlers.reorder({ from: source.index, to: destination?.index || 0 })
            }
        >
            <Droppable droppableId="dnd-list" direction="vertical">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {items}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}
