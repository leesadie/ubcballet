import ClientOnly from "../components/ClientOnly";
import WorkshopsClient from "./WorkshopsClient";

const WorkshopClient = () => {
    return (
        <ClientOnly>
            <WorkshopsClient />
        </ClientOnly>
    );
}

export default WorkshopClient;