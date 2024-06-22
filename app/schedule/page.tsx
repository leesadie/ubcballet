import ClientOnly from "../components/ClientOnly";
import ScheduleClient from "./ScheduleClient";

const SchedulePage = () => {
    return (
        <ClientOnly>
            <ScheduleClient />
        </ClientOnly>
    );
}

export default SchedulePage;