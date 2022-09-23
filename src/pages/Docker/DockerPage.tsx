import { Badge, Button, Drawer } from "@mantine/core"
import { useState } from "react"
import { Plus } from "tabler-icons-react"

import AppContent from "../../layout/Content"
import DockerTable from "./DockerTable"

export default function DockerPage() {
    const [opened, setOpened] = useState(false)

    return (
        <>
            <AppContent>
                <Badge fullWidth size="xl" radius="lg">
                    Containers
                </Badge>
                <Button m="md" variant="outline" compact onClick={() => setOpened(true)} leftIcon={<Plus size={16} />}>
                    Create Container
                </Button>
                <DockerTable />
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Create Container"
                    padding="xl"
                    size="xl"
                    position="right"
                ></Drawer>
            </AppContent>
        </>
    )
}

const CreateContainerWindow = () => {}
