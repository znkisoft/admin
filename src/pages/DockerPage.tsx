import { Badge, Button, Divider, Drawer, Space } from "@mantine/core"
import { useState } from "react"
import { Plus } from "tabler-icons-react"
import ContainerList from "../components/ContainerList"
import AppContent from "../layout/Content"

export default function DockerPage() {
    const [opened, setOpened] = useState(false)

    return (
        <>
            <AppContent>
                <Badge fullWidth size="xl" radius="lg">
                    Containers
                </Badge>
                <Button mt={16} variant="outline" compact onClick={() => setOpened(true)} leftIcon={<Plus size={16} />}>
                    Create Container
                </Button>
                <Space h="xs" />
                <Divider />
                <ContainerList />
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Register"
                    padding="xl"
                    size="xl"
                    position="right"
                    transition="rotate-left"
                    transitionDuration={250}
                    transitionTimingFunction="ease"
                ></Drawer>
            </AppContent>
        </>
    )
}

const CreateContainerWindow = () => {}
