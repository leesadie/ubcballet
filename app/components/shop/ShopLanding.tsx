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
                        Term 1 Merch
                    </div>
                    <div className="text-neutral-900 md:text-lg text-base mt-5 md:mx-10 mx-6 mb-20">
                        Thank you for purchasing hoodies, long sleeves, and calendars this term to support us! Stay tuned for tote bags next term!
                    </div>
                {/*
                <div
                    className="
                        text-neutral-100
                        md:text-base
                        text-sm
                        bg-neutral-900
                        outline
                        outline-neutral-900
                        outline-[1px]
                        rounded-full 
                        md:py-2
                        py-1
                        px-3 
                        md:w-[110px]
                        w-[90px]
                        cursor-pointer
                        hover:bg-neutral-100
                        hover:text-neutral-900
                        transition
                        md:mt-10
                        md:ml-10
                        ml-6
                        mt-10
                        mb-20
                    "
                    onClick={() => {}}
                >
                    <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/pWEuX4snJxCFaDbP8">
                        Order Now
                    </a>
                </div>
                */}
            </div>
        </Container>
    );
}

export default ShopLanding;