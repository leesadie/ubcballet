'use client';

import Container from "../components/Container";
import Image from "next/image";
import { font_bold } from "../fonts";
import { useRouter } from "next/navigation"; {/* direct to google forms for registration */}

const WorkshopsClient = () => {
    return (
        <Container>
            <div className="flex flex-col">
                <div className="group relative w-full md:h-[100vh] h-[50vh]">
                    <Image 
                        src='/images/workshops1.svg'
                        alt="workshops1"
                        layout="fill"
                        className="object-cover object-bottom brightness-75"
                    />
                    <div className="flex flex-col ml-5">
                        <div className="absolute inset-y-0 md:left-10 left-6 md:top-96 top-52 text-neutral-100">
                            <div className="md:text-2xl text-lg">
                                Join
                            </div>
                            <div className={`md:text-8xl text-4xl ${font_bold.className}`}>
                                WORKSHOPS
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 mt-10 mx-10"/>
                <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                    Upcoming Workshops
                </div>
                <hr className="border-neutral-300 mt-10 mx-10"/>
                {/*
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
                            Pointe Workshop
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
                            Join us for a pointe workshop on Tuesday, October 22nd!
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base md:mt-10 mt-5 md:mx-10 mx-6">
                            Learn the fundamentals of pointe work! 
                            No experience or pointe shoes necessary!
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Date:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                Tuesday, October 22nd
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Time:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                5:30-6:30pm
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Location:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                LIFE 5
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $7 per class / free for members
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Non-UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $12 per class / free for members
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 md:mt-10 mt-5 md:mx-10 mx-6"/>
                */}
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
                            Stretch/Strength Workshop
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
                            Join us for a stretch/strength workshop on Tuesday, January 28th!
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base md:mt-10 mt-5 md:mx-10 mx-6">
                            Learn stretch and strengthening exercises specifically for ballet.
                            Please bring a mat if you have one!
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Date:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                Tuesday, January 28th
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Time:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                5:30-6:30pm
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Location:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                NEST 2301
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $7 per class / free for members
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Non-UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $12 per class / free for members
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Teacher:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                Ruby Li
                            </div>
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
                                md:w-[100px]
                                w-[90px]
                                cursor-pointer
                                hover:bg-neutral-100
                                hover:text-neutral-900
                                transition
                                md:ml-10
                                ml-6
                                mt-5
                            "
                            onClick={() => {}}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSc3JjPfwb7jZZnLpr1NjNSMAzMKGotbZ2ZmE9jgUe3OUYOwJA/viewform?usp=dialog">
                                Book Now
                            </a>
                        </div>
                        */}
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
                            Valentine's Partnering Workshop
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
                            Join us for a Valentine's Partnering workshop on Tuesday, February 11th!
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base md:mt-10 mt-5 md:mx-10 mx-6">
                            Bring a partner or a friend and learn basic partnering for Valentine's Day!
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Date:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                Tuesday, February 11th
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Time:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                5:15-6:30pm
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Location:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                NEST 2301
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $7 per person / free for members
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Non-UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $12 per person / free for members
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Teacher:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                Maria Djordevic
                            </div>
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
                                md:w-[100px]
                                w-[90px]
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
                            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdx2tdNU7Lw8xE7yZmLMAridFSMZNJT3GOULJIkVIwWa3UOMQ/viewform?usp=dialog">
                                Book Now
                            </a>
                        </div>
                        */}
                    </div>
                </div>
                <hr className="border-neutral-300 md:mt-10 mt-5 md:mx-10 mx-6"/>
                {/*
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
                            Neoclassical Workshop
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
                            Join us for a neoclassical ballet workshop on March 6th, 2024!
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base md:mt-10 mt-5 md:mx-10 mx-6">
                            Learn a solo from Chroma by Wayne McGregor. The workshop will consist of a short warm-up, learning 
                            the solo, and dancing in small groups.
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Date:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                March 6th, 2025
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Time:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                TBA
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Location:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                TBA
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $7 per class / free for members
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Non-UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $12 per class / free for members
                            </div>
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm pt-2 mb-10 md:mx-10 ml-6">
                            *Bookings will be available in Term 2.
                        </div>
                    </div>
                </div>
                */}
            </div>
        </Container>
    );
}

export default WorkshopsClient;