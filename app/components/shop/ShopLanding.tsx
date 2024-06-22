'use client';

import Container from "../Container";
import { font_bold } from "@/app/fonts";
import Image from "next/image";

const ShopLanding = () => {
    return (
        <Container>
            <div className="flex flex-col">
            <div className="group relative w-full md:h-[100vh] h-[50vh]">
                    <Image 
                        src='/images/aboutus1.svg'
                        alt="workshops1"
                        layout="fill"
                        className="object-cover brightness-50"
                    />
                    <div className="flex flex-col ml-5">
                        <div className="absolute inset-y-0 md:left-10 left-6 md:top-96 top-52 text-neutral-100">
                            <div className="md:text-2xl text-lg">
                                Support
                            </div>
                            <div className={`md:text-8xl text-4xl ${font_bold.className}`}>
                                SHOP
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 mt-10 mx-10"/>
                <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                    Coming Soon
                </div>
                <div className="text-neutral-900 md:text-lg text-base mt-5 md:mx-10 mx-6 md:mb-10 mb-40">
                    Stay tuned for merch drops and more!
                </div>
            </div>
        </Container>
    );
}

export default ShopLanding;