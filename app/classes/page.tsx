import ClientOnly from "../components/ClientOnly";
import ClassesClient2 from "./ClassesClient2";

const ClassesPage = () => {
    return (
        <ClientOnly>
            <ClassesClient2 />
        </ClientOnly>
    );
}

export default ClassesPage;