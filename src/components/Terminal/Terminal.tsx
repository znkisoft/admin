import React, { useEffect } from "react"
import { TerminalService } from "./Terminal.service"

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
