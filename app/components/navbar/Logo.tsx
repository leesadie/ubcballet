'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image 
            alt="Logo"
            className="cursor-pointer md:h-[80px] md:w-[80px]"
            height="35"
            width="35"
            src="/images/logo1.svg"
            onClick={() => router.push('/')}
        />
    );
}

export default Logo;