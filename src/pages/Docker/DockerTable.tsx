import React from "react"
import { IActionButtonConfig } from "components/ActionButtons/ActionButtons"
import { PlayerPlay, PlayerStop, Repeat, SquareX, Trash } from "tabler-icons-react"
import { DataTable } from "mantine-datatable"

const Columns = [
    { accessor: "Name" },
    { accessor: "Status" },
    { accessor: "Image" },
    { accessor: "Create Time" },
    { accessor: "Published Ports" },
    { accessor: "Quick Actions" },
]

const quickActions: Array<IActionButtonConfig> = [
    {
        icon: PlayerPlay,
        label: "start",
        onClick: undefined,
    },
    {
        icon: PlayerStop,
        label: "stop",
        onClick: undefined,
    },
    {
        icon: Repeat,
        label: "restart",
        onClick: undefined,
    },
    {
        icon: SquareX,
        label: "kill",
        onClick: undefined,
    },
    {
        icon: Trash,
        label: "remove",
        onClick: undefined,
    },
]

const DockerTable = () => {
    return <DataTable highlightOnHover fontSize="sm" columns={Columns} records={[]} />
}

export default DockerTable
