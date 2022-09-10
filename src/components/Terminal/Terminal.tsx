import React, { useEffect } from "react"
import { TerminalService } from "./Terminal.service"
import "xterm/css/xterm.css"

export default function WebTerminal() {
    useEffect(() => {
        const termService = new TerminalService()
        return () => {
            termService.Destory()
        }
    }, [])

    return (
        <>
            <div id="terminal"></div>
        </>
    )
}
