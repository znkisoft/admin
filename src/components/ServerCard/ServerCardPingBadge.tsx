import { Badge } from "@mantine/core"

export type pingStatus = "online" | "offline" | "unknown"

export interface IPingBadgeProps {
    status: pingStatus
}

const pingConfig = {
    online: { color: "teal", label: "online" },
    offline: { color: "red", label: "offline" },
    unknown: { color: "gray", label: "unknown" },
}

const PingBadge = (props: IPingBadgeProps) => {
    return (
        <>
            <Badge color={pingConfig[props.status].color}>{pingConfig[props.status].label}</Badge>
        </>
    )
}

export default PingBadge
