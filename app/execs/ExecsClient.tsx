'use client';

import Container from "../components/Container";
import Image from "next/image";
import { font_bold } from "../fonts";

const ExecsClient = () => {
    return (
        <Container>
            <div className="flex flex-col">
                <div className="group relative w-full md:h-[100vh] h-[50vh]">
                    <Image 
                        src='/images/execs1.svg'
                        alt="workshops1"
                        layout="fill"
                        className="object-cover object-top brightness-50"
                    />
                    <div className="flex flex-col ml-5">
                        <div className="absolute inset-y-0 md:left-10 left-6 md:top-96 top-52 text-neutral-100">
                            <div className="md:text-2xl text-lg">
                                Discover
                            </div>
                            <div className={`md:text-8xl text-4xl ${font_bold.className}`}>
                                EXECS 24-25
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 mt-10 mx-10"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-96 gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Sienna Muller — President
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div className="">
                            <Image 
                                src='/images/sienna2.svg'
                                alt="sienna"
                                height={300}
                                width={300}
                                className="object-contain md:mt-10 mt-4 h-[200px] md:h-[300px] mb-5"
                            />
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mx-10 mx-6"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-96 gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Maria Djordjevic — VP Internal
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div>
                            <Image 
                                src='/images/maria2.svg'
                                alt="maria"
                                height={300}
                                width={300}
                                className="object-contain md:mt-10 mt-4 h-[200px] md:h-[300px] mb-5"
                            />
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mx-10 mx-6"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-96 gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 mr-2 md:mr-0 ${font_bold.className}`}>
                            Sadie Lee — VP External, Teacher
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div>
                            <Image 
                                src='/images/sadie2.svg'
                                alt="sadie"
                                height={300}
                                width={300}
                                className="object-contain md:mt-10 mt-4 h-[200px] md:h-[300px] mb-5"
                            />
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mx-10 mx-6"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-96 gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Katherine Y. — Treasurer
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div>
                            <Image 
                                src='/images/katherine2.svg'
                                alt="katherine"
                                height={300}
                                width={300}
                                className="object-contain md:mt-10 mt-4 h-[200px] md:h-[300px] mb-5"
                            />
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mx-10 mx-6"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-96 gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Nour Eid - Teacher
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div>
                            <Image 
                                src='/images/placeholder2.svg'
                                alt="nour"
                                height={300}
                                width={300}
                                className="object-contain md:mt-10 mt-4 h-[200px] md:h-[300px] mb-5"
                            />
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mx-10 mx-6"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-96 gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Laurenne DuManoir - Choreographer
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div>
                            <Image 
                                src='/images/placeholder2.svg'
                                alt="laurenne"
                                height={300}
                                width={300}
                                className="object-contain md:mt-10 mt-4 h-[200px] md:h-[300px] mb-5"
                            />
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mx-10 mx-6"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-96 gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 mr-2 md:mr-0 ${font_bold.className}`}>
                            Yurina Kanehara - Choreographer
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div>
                            <Image 
                                src='/images/placeholder2.svg'
                                alt="yurina"
                                height={300}
                                width={300}
                                className="object-contain md:mt-10 mt-4 h-[200px] md:h-[300px] mb-5"
                            />
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mx-10 mx-6"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-96 gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Annabel Yu - VP Marketing
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div>
                            <Image 
                                src='/images/placeholder2.svg'
                                alt="annabel"
                                height={300}
                                width={300}
                                className="object-contain md:mt-10 mt-4 h-[200px] md:h-[300px] mb-5"
                            />
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mx-10 mx-6"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-96 gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Ruby Li - Marketing Coordinator
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div>
                            <Image 
                                src='/images/ruby2.svg'
                                alt="ruby"
                                height={300}
                                width={300}
                                className="object-contain md:mt-10 mt-4 h-[200px] md:h-[300px] mb-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ExecsClient;