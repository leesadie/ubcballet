import ClientOnly from "../components/ClientOnly";
import ExecsClient from "./ExecsClient";

const ExecsPage = () => {
    return (
        <ClientOnly>
            <ExecsClient />
        </ClientOnly>
    );
}

export default ExecsPage;