'use client';

import Container from "../components/Container";
import Image from "next/image";
import { font_bold } from "../fonts";
import { useRouter } from "next/navigation";

const MembershipsClient = () => {
    const router = useRouter();

    return (
        <Container>
            <div className="flex flex-col">
                <div className="group relative w-full md:h-[100vh] h-[50vh]">
                    <Image 
                        src='/images/memberships1.svg'
                        alt="company1"
                        layout="fill"
                        className="object-cover object-top brightness-75"
                    />
                    <div className="flex flex-col ml-5">
                        <div className="absolute inset-y-0 md:left-10 left-6 md:top-96 top-52 text-neutral-100">
                            <div className="md:text-2xl text-lg">
                                Join
                            </div>
                            <div className={`md:text-8xl text-4xl ${font_bold.className}`}>
                                MEMBERSHIPS
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
                            md:h-[20vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            UBC Students/Staff
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                1 term:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $25 CAD
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                2 terms:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $45 CAD
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
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
                                    md:w-[160px]
                                    w-[140px]
                                    cursor-pointer
                                    hover:bg-neutral-100
                                    hover:text-neutral-900
                                    transition
                                    md:mt-10
                                    md:ml-10
                                    ml-6
                                    mt-10
                                "
                                onClick={() => {}}
                            >
                                <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/4y6uhW94DkewYmKQA">
                                    Become a Member
                                </a>
                            </div>
                            */}
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
                                    md:w-[120px]
                                    w-[110px]
                                    cursor-pointer
                                    bg-neutral-100
                                    text-neutral-900
                                    transition
                                    md:mt-10
                                    md:ml-10
                                    ml-6
                                    mt-10
                                "
                                onClick={() => router.push('/classes')}
                            >
                                View Classes
                            </div>
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm pt-2 mb-10 md:mx-10 ml-6">
                            *Memberships can be bought at any events or classes by cash or card.
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
                            md:h-[25vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Non-UBC Students
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                1 term:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $35 CAD
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                2 terms:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $55 CAD
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
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
                                    md:w-[160px]
                                    w-[140px]
                                    cursor-pointer
                                    hover:bg-neutral-100
                                    hover:text-neutral-900
                                    transition
                                    md:mt-10
                                    md:ml-10
                                    ml-6
                                    mt-10
                                "
                                onClick={() => {}}
                            >
                                <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/4y6uhW94DkewYmKQA">
                                    Become a Member
                                </a>
                            </div>
                            */}
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
                                    md:w-[120px]
                                    w-[110px]
                                    cursor-pointer
                                    bg-neutral-100
                                    text-neutral-900
                                    transition
                                    md:mt-10
                                    md:ml-10
                                    ml-6
                                    mt-10
                                "
                                onClick={() => router.push('/classes')}
                            >
                                View Classes
                            </div>
                        </div>                  
                        <div className="text-neutral-900 md:text-lg text-sm pt-2 mb-10 md:mx-10 ml-6">
                            *Memberships can be bought at any events or classes by cash or card.
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default MembershipsClient;