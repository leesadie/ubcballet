import ClientOnly from "../components/ClientOnly";
import ShopClient from "./ShopClient";

const ShopPage = () => {
    return (
        <ClientOnly>
            <ShopClient />
        </ClientOnly>
    );
}

export default ShopPage;