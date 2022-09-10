import React, { useEffect } from "react"
import { Button, createStyles, Group } from "@mantine/core"
import { PlayerPlay, VideoPlus } from "tabler-icons-react"

const MediaConstraints = {
    audio: false,
    video: {
        width: {
            min: 600,
            ideal: 1200,
            max: 1800,
        },
        height: {
            min: 300,
            ideal: 600,
            max: 900,
        },
    },
    frameRate: 30,
}

const useStyles = createStyles((theme) => ({
    root: {
        position: "relative",
    },
    buttongroup: {
        position: "absolute",
        top: "11rem",
        zIndex: 99,
    },
}))

const Television: React.FC = (props): React.ReactElement => {
    const { classes } = useStyles()

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia(MediaConstraints)
            .then((mediaStream) => {
                const video = document.querySelector("video")
                if (!video) {
                    return
                }
                video.srcObject = mediaStream
                video.onloadedmetadata = () => {
                    video.play()
                }

                video.onabort = () => {
                    console.log("video aborted")
                }

                video.onclose = () => {
                    console.log("video closed")
                }
            })
            .catch((err) => {
                // always check for errors at the end.
                console.error(`${err.name}: ${err.message}`)
            })
    })
    return (
        <>
            <Group className={classes.buttongroup} position="center" spacing="xl">
                <Button leftIcon={<VideoPlus />}>Record</Button>
                <Button leftIcon={<PlayerPlay />}>Play</Button>
            </Group>
            <video src=""></video>
        </>
    )
}

export default Television
