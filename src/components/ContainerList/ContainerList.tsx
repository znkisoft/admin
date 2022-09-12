import React, { FC } from "react"
import { Table } from "@mantine/core"
import ActionButtons from "components/ActionButtons"
import { IActionButtonConfig } from "components/ActionButtons/ActionButtons"
import { PlayerPlay, PlayerStop, Repeat, SquareX, Trash } from "tabler-icons-react"

const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
]

const Rows = ["Name", "Status", "Image", "Create Time", "Published Ports", "Quick Actions"]

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

// TODO replace with https://github.com/Kuechlin/mantine-data-grid
const ContainerList: FC = () => {
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
            <td>{element.mass}</td>
            <td>
                <ActionButtons data={quickActions} />
            </td>
        </tr>
    ))

    const head = Rows.map((row) => <th key={row}>{row}</th>)

    return (
        <Table striped highlightOnHover>
            <thead>
                <tr>{head}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    )
}

export default ContainerList
