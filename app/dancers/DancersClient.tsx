'use client';

import Container from "../components/Container";
import Image from "next/image";
import { font_bold } from "../fonts";
import { useRouter } from "next/navigation"; {/* direct to audition page for now */}

const DancersClient = () => {
    const router = useRouter();

    return (
        <Container>
            <div className="flex flex-col">
                <div className="group relative w-full md:h-[100vh] h-[50vh]">
                    <Image 
                        src='/images/dancers1.svg'
                        alt="dancers1"
                        layout="fill"
                        className="object-cover brightness-50"
                    />
                    <div className="flex flex-col ml-5">
                        <div className="absolute inset-y-0 md:left-10 left-6 md:top-96 top-52 text-neutral-100">
                            <div className="md:text-2xl text-lg">
                                Discover
                            </div>
                            <div className={`md:text-8xl text-4xl ${font_bold.className}`}>
                                DANCERS
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 mt-10 mx-10"/>
                <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                    Coming Soon
                </div>
                <div className="text-neutral-900 md:text-lg text-base mt-5 md:mx-10 mx-6 mb-20">
                    Meet our 24-25 season company dancers!
                </div>
                {/*
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
                        mt-5 
                        md:mx-10 
                        mx-6
                        mb-20
                    "
                    onClick={() => router.push('/company')}
                >
                    Audition Now
                </div>
                */}
            </div>
        </Container>
    );
}

export default DancersClient;