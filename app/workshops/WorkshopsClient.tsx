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
                            Join us for a pointe workshop on October 10th, 2024!
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base md:mt-10 mt-5 md:mx-10 mx-6">
                            Learn the fundamentals of pointe work, strengthening exercises, and watch a demonstration from company dancers. 
                            No experience or pointe shoes necessary!
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Date:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                October 10th, 2024
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Time:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                5:00-6:00pm
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
                            <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/Pkb5qk2Z1BHerLrK6">
                                Book Now
                            </a>
                        </div>
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
                            Repertoire Workshop
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
                            Join us for a repertoire workshop on November 14th, 2024!
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base md:mt-10 mt-5 md:mx-10 mx-6">
                            Learn excerpts from Serenade by Balanchine. The workshop will begin with a short technique warm-up,
                            followed by the repertoire, and dancing in small groups.
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Date:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                November 14th, 2024
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Time:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                5:00-6:00pm
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
                                $5 per class / free for members
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Non-UBC Drop-In:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $10 per class / free for members
                            </div>
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm pt-2 mb-10 md:mx-10 ml-6">
                            *Bookings will be available at a later date. Check our social media for updates!
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
                            Valentines Partnering
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
                            Join us for a Valentines Day partnering workshop in February 2025!
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base md:mt-10 mt-5 md:mx-10 mx-6">
                            Learn the basics of pas de deux (dance of two) with a friend or partner! The workshop will begin 
                            with a short warm-up, followed by partnering and a demonstration by company dancers.
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Date:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                TBA
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