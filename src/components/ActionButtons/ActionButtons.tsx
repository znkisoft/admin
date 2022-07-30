import { ActionIcon, Group, Tooltip } from "@mantine/core"
import { FC } from "react"
import { Icon } from "tabler-icons-react"
import useStyles from "./ActionButtons.styles"

interface IActionButtonsProps {
  size?: number
  color?: string
  data: Array<IActionButtonConfig>
}

export interface IActionButtonConfig {
  icon: Icon
  label: string
  onClick?: () => void
}

const ActionButtons: FC<IActionButtonsProps> = ({ data }: IActionButtonsProps) => {
  const { classes } = useStyles()
  return (
    <Group className={classes.root} spacing={4}>
      {data.map((item) => (
        <Tooltip label={item.label} withArrow>
          <ActionIcon variant="default">
            <item.icon size={16} />
          </ActionIcon>
        </Tooltip>
      ))}
    </Group>
  )
}

export default ActionButtons
