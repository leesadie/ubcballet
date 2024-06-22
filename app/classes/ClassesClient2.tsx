'use client';

import Container from "../components/Container";
import Image from "next/image";
import { font_bold } from "../fonts";

const ClassesClient2 = () => {
    return (
        <Container>
            <div className="flex flex-col">
                <div className="group relative w-full md:h-[100vh] h-[50vh]">
                    <Image 
                        src='/images/classes1.svg'
                        alt="workshops1"
                        layout="fill"
                        className="object-cover md:brightness-50 brightness-75"
                    />
                    <div className="flex flex-col ml-5">
                        <div className="absolute inset-y-0 md:left-10 left-6 md:top-96 top-52 text-neutral-100">
                            <div className="md:text-2xl text-lg">
                                Join
                            </div>
                            <div className={`md:text-8xl text-4xl ${font_bold.className}`}>
                                CLASSES
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mt-10 mt-5 md:mx-10 mx-6"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Beginner Classes
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
                            For those with little to no dance background, you will learn the basic foundations of classical ballet at this level.
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Days:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                Every Tuesday
                            </div>
                        </div>
                        <div className="flex flex-row mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Times:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                5:00-6:00pm
                            </div>
                        </div>
                        <div className="flex flex-row mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Location:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                NEST 2301
                            </div>
                        </div>
                        <div className="flex flex-row mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Teacher:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                Nour Eid
                            </div>
                        </div>
                        <div className="flex flex-row mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $5 per class / free for members
                            </div>
                        </div>
                        <div className="flex flex-row mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Non-UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $10 per class / free for members
                            </div>
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm pt-2 mb-10 md:mx-10 ml-6">
                            *Register and pay for drop-ins before class at location listed above.
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mt-10 mt-5 md:mx-10 mx-6"/>
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-0 flex flex-col">
                    <div
                        className="
                            md:col-span-1
                            md:row-span-2
                            md:w-full
                            md:h-[50vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Advanced Classes
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
                            Build a strong foundation and develop your artistry. For those with more dance and/or ballet experience.
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Days:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                Every Monday
                            </div>
                        </div>
                        <div className="flex flex-row mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Times:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                6:00-7:30pm
                            </div>
                        </div>
                        <div className="flex flex-row mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Location:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                LIFE 26
                            </div>
                        </div>
                        <div className="flex flex-row mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Teacher:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                Sadie Lee
                            </div>
                        </div>
                        <div className="flex flex-row mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $5 per class / free for members
                            </div>
                        </div>
                        <div className="flex flex-row mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Non-UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $10 per class / free for members
                            </div>
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm pt-2 mb-10 md:mx-10 ml-6">
                            *Register and pay for drop-ins before class at location listed above.
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ClassesClient2