'use client';

import Image from "next/image";
import { font_bold } from "@/app/fonts";
import { useRouter } from "next/navigation";

const HeroSmall = () => {
    const router = useRouter()

    return (
        <div className="flex flex-col">
            <div className="group relative w-full h-[50vh]">
                <Image 
                    src='/images/hero4.svg'
                    alt="companyhero"
                    layout="fill"
                    className="object-cover object-top"
                />
                <div className="flex flex-col ml-5">
                    <div className="absolute inset-y-0 left-6 top-52 text-neutral-100">
                        <div className="text-lg">
                            Performances
                        </div>
                        <div className={`text-4xl ${font_bold.className}`}>
                            COMPANY
                        </div>
                    </div>
                    <div 
                        className="
                            absolute 
                            bottom-10 
                            left-6
                            text-sm
                            text-neutral-900
                            bg-neutral-100
                            outline
                            outline-[1px]
                            outline-neutral-100
                            rounded-full 
                            py-1
                            px-2
                            w-[80px]
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
            <hr className="border-neutral-300"/>
            <div className="group relative w-full h-[50vh]">
                <Image 
                    src='/images/hero5.svg'
                    alt="companyhero"
                    layout="fill"
                    className="object-cover object-top brightness-90"
                />
                <div className="flex flex-col ml-5">
                    <div className="absolute inset-y-0 left-6 top-52 text-neutral-100">
                        <div className="text-lg">
                            Learning
                        </div>
                        <div className={`text-4xl ${font_bold.className}`}>
                            CLASSES
                        </div>
                    </div>
                    <div 
                        className="
                            absolute 
                            bottom-10 
                            left-6
                            text-sm
                            text-neutral-900
                            bg-neutral-100
                            outline
                            outline-[1px]
                            outline-neutral-100
                            rounded-full 
                            py-1
                            px-2
                            w-[80px]
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
            <hr className="border-neutral-300"/>
            <div className="group relative w-full h-[50vh]">
                <Image 
                    src='/images/hero6.svg'
                    alt="companyhero"
                    layout="fill"
                    className="object-cover brightness-75"
                />
                <div className="flex flex-col ml-5">
                    <div className="absolute inset-y-0 left-6 top-52 text-neutral-100">
                        <div className="text-lg">
                            Learning
                        </div>
                        <div className={`text-4xl ${font_bold.className}`}>
                            WORKSHOPS
                        </div>
                    </div>
                    <div 
                        className="
                            absolute 
                            bottom-10 
                            left-6
                            text-sm
                            text-neutral-900
                            bg-neutral-100
                            outline
                            outline-[1px]
                            outline-neutral-100
                            rounded-full 
                            py-1
                            px-2
                            w-[110px]
                            cursor-pointer
                            hover:bg-neutral-900/0
                            hover:text-neutral-100
                            transition"
                        onClick={() => router.push('/schedule')}
                        >
                        View Schedule
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSmall;