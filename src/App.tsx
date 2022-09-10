import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"
import { useState } from "react"
import Routes from "./routes"

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark") // default to dark mode

    const toggleColorScheme = () => {
        setColorScheme(colorScheme === "light" ? "dark" : "light")
    }

    return (
        <>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                    <NotificationsProvider>
                        <Routes />
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    )
}

export default App
