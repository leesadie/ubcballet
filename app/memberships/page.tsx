import ClientOnly from "../components/ClientOnly";
import MembershipsClient from "./MembershipsClient";

const MembershipsPage = () => {
    return (
        <ClientOnly>
            <MembershipsClient />
        </ClientOnly>
    );
}

export default MembershipsPage;