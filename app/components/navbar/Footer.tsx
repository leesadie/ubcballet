'use client';

import Image from "next/image";
import Container from "../Container";
import Button from "./Button";

const Footer = () => {
    return (
        <div className="w-full z-10">
            <div className="pb-10 pt-5 bg-neutral-900 border-t-[1px] border-neutral-100">
                <Container>
                    <div 
                        className="
                            flex
                            flex-row
                            items-center
                            justify-center
                            gap-5
                            lg:text-base
                            text-sm
                            pt-5
                        "
                    >
                        <div>
                            <Image 
                                src='/images/iconwhite2.svg'
                                alt="icon"
                                height={50}
                                width={50}
                                className="object-contain h-10 w-10"
                            />
                        </div>
                        <div className="flex flex-row gap-1">
                            <Image 
                                src='/images/copyright.svg'
                                alt="copyright"
                                height={10}
                                width={10}
                                className="object-contain"
                            />
                            <div className="text-white text-xs">
                                Copyright UBC Ballet Club 2024.
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Footer;