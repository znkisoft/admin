import ContainerList from "../components/ContainerList";
import AppContent from "../layout/Content";

export default function DockerPage() {
  return (
    <>
      <AppContent>
        <h1>Docker Management</h1>
        <ContainerList />
      </AppContent>
    </>
  );
}
