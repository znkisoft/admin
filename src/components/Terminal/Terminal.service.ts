import { AttachAddon } from "xterm-addon-attach";
import { FitAddon } from "xterm-addon-fit";
import { Terminal } from "xterm";
import axios from "axios";
import "xterm/css/xterm.css";
import { ThemeProvider } from ".pnpm/@emotion+react@11.7.1_7cpxmzzodpxnolj5zcc5cr63ji/node_modules/@emotion/react";

const socketURL = "ws://127.0.0.1:8080/api/ws";
const ws = new WebSocket(socketURL);
const term = new Terminal({
  fontFamily: 'Menlo, Monaco, "Courier New", monospace',
  fontWeight: 300,
  fontSize: 14,
  cursorBlink: true,
});
// const attachAddon = new AttachAddon(ws);
const fitAddon = new FitAddon();

// term.loadAddon(attachAddon);
term.loadAddon(fitAddon);

export class TerminalService {
  term: Terminal;
  cmdBuffer: string;
  constructor() {
    this.term = term;
    this.cmdBuffer = "";

    //@ts-ignore
    this.term.open(document.getElementById("terminal"));
    this.term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m  ");
    fitAddon.fit();

    this.term.onKey((key) => {
      //@ts-ignore
      var printable = !key.altKey && !key.altGraphKey && !key.ctrlKey && !key.metaKey;

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
      term.write("\r\n ok");
    });
  }

  private prompt = () => {
    const shellprompt = ">sss ";
    term.write("\r\n" + shellprompt);
  };

  private dispose() {
    this.term.dispose();
  }

  public OnConnectionOpen() {}
  public OnConnectionClose() {
    this.dispose();
  }

  public Destory() {
    this.term.dispose();
  }
}
