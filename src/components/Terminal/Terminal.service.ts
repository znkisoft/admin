import { FitAddon } from "xterm-addon-fit"
import { Terminal } from "xterm"

const socketURL = "ws://127.0.0.1:8080/api/ws"
const ws = new WebSocket(socketURL)

// const attachAddon = new AttachAddon(ws);0
const fitAddon = new FitAddon()

// term.loadAddon(attachAddon);

export class TerminalService {
    term: Terminal
    cmdBuffer: string

    constructor() {
        this.term = new Terminal({
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            fontWeight: 300,
            fontSize: 14,
            cursorBlink: true,
        })
        this.term.loadAddon(fitAddon)
        this.cmdBuffer = ""

        //@ts-ignore
        this.term.open(document.getElementById("terminal"))
        this.term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m  ")
        fitAddon.fit()

        this.term.onKey((key) => {
            //@ts-ignore
            var printable = !key.altKey && !key.altGraphKey && !key.ctrlKey && !key.metaKey

            // //@ts-ignore
            // if (key.keyCode == 13) {
            //   if (this.cmdBuffer === "clear") {
            //     term.clear();
            //   }
            //   this.cmdBuffer = "";
            //   //@ts-ignore
            //   this.prompt();
            //   //@ts-ignore
            // } else if (key.keyCode == 8) {
            //   //@ts-ignore
            //   if (term.x > 2) {
            //     term.write("\b \b");
            //   }
            // } else if (printable) {
            //   //@ts-ignore
            //   this.cmdBuffer += key;
            //   //@ts-ignore
            //   term.write(this.cmdBuffer);
            // }
            this.term.write("\r\n ok")
        })
    }

    OnConnectionOpen() {}

    OnConnectionClose() {
        this.dispose()
    }

    Destory() {
        this.term.dispose()
    }

    private dispose() {
        this.term.dispose()
    }
}
