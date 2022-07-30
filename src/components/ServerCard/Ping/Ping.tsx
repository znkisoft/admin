import { Badge } from "@mantine/core"

export type pingStatus = "online" | "offline" | "unknown"

const pingConfig = {
  online: { color: "teal", label: "online" },
  offline: { color: "red", label: "offline" },
  unknown: { color: "gray", label: "unknown" },
}

export default function PingBadge(status: pingStatus) {
  const badge = () => {
    switch (status) {
      case "offline":
        return (
          <Badge color={pingConfig.offline.color} size="md">
            {pingConfig.online.label}
          </Badge>
        )
      case "online":
        return (
          <Badge color={pingConfig.online.color} size="md">
            {pingConfig.online.label}
          </Badge>
        )
      default:
        return (
          <Badge color={pingConfig.unknown.color} size="md">
            {pingConfig.unknown.label}
          </Badge>
        )
    }
  }

  return <>{badge()}</>
}
