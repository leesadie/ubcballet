import ClientOnly from "../components/ClientOnly";
import CompanyClient from "./CompanyClient";

const CompanyPage = () => {
    return (
        <ClientOnly>
            <CompanyClient />
        </ClientOnly>
    );
}

export default CompanyPage;