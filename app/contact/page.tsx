import ClientOnly from "../components/ClientOnly";
import ContactClient from "./ContactClient";

const ContactPage = () => {
    return (
        <ClientOnly>
            <ContactClient />
        </ClientOnly>
    );
}

export default ContactPage;