'use client';

import Container from "../components/Container";
import Image from "next/image";
import { font_bold } from "../fonts";
import { useRouter } from "next/navigation";

const AboutClient = () => {
    const router = useRouter()

    return (
        <Container>
            <div className="flex flex-col">
                <div className="group relative w-full md:h-[100vh] h-[50vh]">
                    <Image 
                        src='/images/aboutus2.svg'
                        alt="company1"
                        layout="fill"
                        className="object-cover object-bottom brightness-50"
                    />
                    <div className="flex flex-col ml-5">
                        <div className="absolute inset-y-0 md:left-10 left-6 md:top-96 top-52 text-neutral-100">
                            <div className="md:text-2xl text-lg">
                                Discover
                            </div>
                            <div className={`md:text-8xl text-4xl ${font_bold.className}`}>
                                ABOUT US
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 mt-10 mx-10"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[25vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            About UBC Ballet Club
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div className="text-neutral-900 md:text-lg text-base md:mt-10 mt-5 md:mx-10 mx-6">
                            Add info here.
                        </div>
                        <div className="flex flex-row gap-2 md:mb-10 mb-32">
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
                                    md:w-[120px]
                                    w-[110px]
                                    cursor-pointer
                                    hover:bg-neutral-100
                                    hover:text-neutral-900
                                    transition
                                    md:mt-10
                                    md:ml-10
                                    ml-6
                                    mt-10
                                "
                                onClick={() => router.push('/execs')}
                            >
                                Exces 24-25
                            </div>
                            <div
                                className="
                                    hover:text-neutral-100
                                    md:text-base
                                    text-sm
                                    hover:bg-neutral-900
                                    outline
                                    outline-neutral-900
                                    outline-[1px]
                                    rounded-full 
                                    md:py-2
                                    py-1
                                    px-3 
                                    md:w-[130px]
                                    w-[120px]
                                    cursor-pointer
                                    bg-neutral-100
                                    text-neutral-900
                                    transition
                                    md:mt-10
                                    mt-10
                                "
                                onClick={() => router.push('/dancers')}
                            >
                                Dancers 24-25
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AboutClient;