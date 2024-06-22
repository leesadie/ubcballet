import ClientOnly from "../components/ClientOnly";
import DancersClient from "./DancersClient";

const DancersPage = () => {
    return (
        <ClientOnly>
            <DancersClient />
        </ClientOnly>
    );
}

export default DancersPage;