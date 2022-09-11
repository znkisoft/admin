import ServerCard from "../components/ServerCard/ServerCard"
import AppContent from "../layout/Content"

export default function ServerList() {
    return (
        <>
            <AppContent>
                <h1>ServerList</h1>
                <ServerCard
                    data={{
                        label: "dummy server ",
                        stats: "unknown",
                    }}
                />
            </AppContent>
        </>
    )
}
