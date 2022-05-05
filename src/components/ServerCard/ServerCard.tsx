import React from "react";
import { Group, Paper, SimpleGrid, Text, RingProgress, Center } from "@mantine/core";
import { UserPlus, Discount2, Receipt2, Coin, ArrowUpRight, ArrowDownRight } from "tabler-icons-react";
import useStyles from "./ServerCard.styles";

const icons = {
  user: UserPlus,
  discount: Discount2,
  receipt: Receipt2,
  coin: Coin,
  up: ArrowUpRight,
  down: ArrowDownRight,
};

interface HWInfoProps {
  label: string;
  stats: string;
  progress: number;
  color: string;
  icon: "memory" | "cpu" | "disk" | "network";
}

export default function ServerCard() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <SimpleGrid cols={4}>
        {Array.from({ length: 4 }, (_, i) => {
          if (i == 0) {
            return (
              <Paper withBorder p="md" radius="md">
                <Group position="apart">
                  <Text size="xs" color="dimmed" className={classes.title}>
                    test
                  </Text>
                  {/* <Icon className={classes.icon} size={22} /> */}
                </Group>
                <Group align="flex-end" spacing="xs" mt={25}></Group>
                <Text size="xs" color="dimmed" mt={7}>
                  Compared to previous month
                </Text>
              </Paper>
            );
          }
          return (
            <Paper withBorder radius="md" p="xs">
              <Group>
                <RingProgress
                  size={80}
                  roundCaps
                  thickness={8}
                  sections={[{ value: 12, color: "red" }]}
                  label={<Center>{/* <Icon size={22} /> */}</Center>}
                />

                <div>
                  <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                    test
                  </Text>
                  <Text weight={700} size="xl">
                    good
                  </Text>
                </div>
              </Group>
            </Paper>
          );
        })}
      </SimpleGrid>
    </div>
  );
}
