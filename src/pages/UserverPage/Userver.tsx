import AppContent from "../../layout/Content"
import { Button, createStyles, Divider, Drawer, Group } from "@mantine/core"
import ServerCard from "../../components/ServerCard/ServerCard"
import { IconGripVertical, IconServerCog, IconSettings } from "@tabler/icons"
import { useListState } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { Get } from "../../service/api/fetch"
import { Userver as UserverModel } from "../../service/api/schema/models"
import { UserverResponse } from "../../service/api/schema/responses"
// @ts-ignore
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import CreateUserver from "./CreateUserver"
import { Refresh } from "tabler-icons-react"

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

    iconButton: {
        padding: 8,
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
    const [opened, setOpened] = useState(false)
    const { classes, cx } = useStyles()

    return (
        <>
            <AppContent title="ServerList">
                <Group position="left">
                    <Button variant="outline" className={classes.iconButton}>
                        <Refresh size={16} />
                    </Button>
                    <Button variant="outline" className={classes.iconButton}>
                        <IconSettings size={16} />
                    </Button>
                    <Button leftIcon={<IconServerCog />} variant="outline" onClick={() => setOpened(true)}>
                        Add New Server
                    </Button>
                </Group>
                <Divider mb={16} mt={8} />
                <CardList />
            </AppContent>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                position="right"
                title="add new server"
                padding="xl"
                size="xl"
            >
                <CreateUserver />
            </Drawer>
        </>
    )
}

const CardList = () => {
    const { classes, cx } = useStyles()
    const [state, handlers] = useListState<UserverModel>([])

    useEffect(() => {
        Get("api/userver", {
            skip: 0,
            limit: 10,
        }).then((res: any) => {
            handlers.setState((res as UserverResponse).uservers)
        })
    }, [])

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
                    <ServerCard key={index} label={item.name} stats={"unknown"} />
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
