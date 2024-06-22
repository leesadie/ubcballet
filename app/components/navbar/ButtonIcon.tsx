'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const ButtonIcon = () => {
    const router = useRouter();

    return (
        <Image 
            alt="Logo"
            className="cursor-pointer pt-3 pl-2 hidden md:block"
            height="20"
            width="20"
            src="/images/arrow.svg"
            onClick={() => router.push('/')}
        />
    );
}

export default ButtonIcon;