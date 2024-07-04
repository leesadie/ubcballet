'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";

import { font_bold } from "@/app/fonts";

const Hero = () => {

    const router = useRouter();
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-0">
            <div
                className="
                    col-span-1
                    row-span-2
                    group
                    relative
                    w-full
                    h-[75vh]
                "
            >
                <Image 
                    src='/images/hero4.svg'
                    alt="companyhero"
                    layout="fill"
                    className="object-cover object-top brightness-75"
                />
                <div className="flex flex-col ml-5">
                    <div className="absolute inset-y-0 left-10 top-96 text-neutral-100">
                        <div className="text-xl">
                            Performances
                        </div>
                        <div className={`text-7xl ${font_bold.className}`}>
                            COMPANY
                        </div>
                    </div>
                    <div 
                        className="
                            absolute 
                            bottom-10 
                            left-10 
                            text-base
                            text-neutral-900
                            bg-neutral-100
                            outline
                            outline-neutral-100
                            rounded-full 
                            py-1
                            px-3 
                            w-[95px]
                            cursor-pointer
                            hover:bg-neutral-900/0
                            hover:text-neutral-100
                            transition"
                        onClick={() => router.push('/company')}
                        >
                        Join Now
                    </div>
                </div>
            </div>
            <div
                className="
                    col-span-1
                    row-span-2
                    group
                    relative
                    w-full
                "
            >
                <Image 
                    src='/images/hero5.svg'
                    alt="companyhero"
                    layout="fill"
                    className="object-cover object-top brightness-75"
                />
                 <div className="flex flex-col ml-5">
                    <div className="absolute inset-y-0 left-10 top-96 text-neutral-100">
                        <div className="text-xl">
                            Learning
                        </div>
                        <div className={`text-7xl ${font_bold.className}`}>
                            CLASSES
                        </div>
                    </div>
                    <div 
                        className="
                            absolute 
                            bottom-10 
                            left-10 
                            text-base
                            text-neutral-900
                            bg-neutral-100
                            outline
                            outline-neutral-100
                            rounded-full 
                            py-1
                            px-3 
                            w-[95px]
                            cursor-pointer
                            hover:bg-neutral-900/0
                            hover:text-neutral-100
                            transition"
                        onClick={() => router.push('/classes')}
                        >
                        Join Now
                    </div>
                </div>
            </div>
            <div
                className="
                    col-span-2
                    row-span-1
                    group
                    relative
                    w-full
                    h-[100vh]
                "
            >
                <Image 
                    src='/images/hero6.svg'
                    alt="companyhero"
                    layout="fill"
                    className="object-cover object-top brightness-50"
                />
                 <div className="flex flex-col ml-5">
                    <div className="absolute inset-y-0 left-10 top-96 text-neutral-100">
                        <div className="text-2xl">
                            Learning
                        </div>
                        <div className={`text-8xl ${font_bold.className}`}>
                            WORKSHOPS
                        </div>
                    </div>
                    <div 
                        className="
                            absolute 
                            bottom-10 
                            left-10 
                            text-base
                            text-neutral-900
                            bg-neutral-100
                            outline
                            outline-neutral-100
                            rounded-full 
                            py-1
                            px-3 
                            w-[145px]
                            cursor-pointer
                            hover:bg-neutral-900/0
                            hover:text-neutral-100
                            transition"
                        onClick={() => router.push('/workshops')}
                        >
                        View Workshops
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;