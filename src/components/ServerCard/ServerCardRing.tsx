import React from "react"
import { Center, RingProgress, Text } from "@mantine/core"

interface StatsRingProps {
    label: string
    progress: number
}

export default function StatsRing({ label, progress }: StatsRingProps) {
    return (
        <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: progress, color: "green" }]}
            label={
                <Center>
                    <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                        {label}
                    </Text>
                </Center>
            }
        />
    )
}
