'use client';

import Container from "../components/Container";
import Image from "next/image";
import { font_bold, font_med } from "../fonts";

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
                <div>
                    <div className={`text-neutral-900 md:text-2xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                        Join our 2025/2026 exec team!
                    </div>
                    <div className="flex flex-row">
                        <div className="text-neutral-900 md:text-lg text-base mt-2 md:ml-10 ml-6">
                            Check out our hiring package for more info
                        </div>
                        <div className="text-neutral-900 text-lg mt-2 ml-1">
                            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1sn4dX_oosufE5Yo5REqNau7Lk6BmRBQB/view?usp=drive_link" className="underline underline-offset-4 hover:opacity-50 transition">
                                here
                            </a>
                        </div>
                    </div>
                    <div className={`text-neutral-900 md:text-lg text-base mt-4 md:ml-10 ml-6 ${font_med.className}`}>
                        Important deadlines:
                    </div>
                    <div className="flex flex-row">
                        <div className="text-neutral-900 md:text-lg text-base mt-1 md:ml-10 ml-6">
                            President/VP Finance
                        </div>
                        <div className="text-neutral-900 text-lg mt-1 ml-1">
                            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSey1srU8Aa7xN4mNlH2vnkjUsu4k-juwm2HxyjWZcIaG3WNzQ/viewform?usp=dialog" className="underline underline-offset-4 hover:opacity-50 transition">
                                election form
                            </a>
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base mt-1 ml-1">
                            - Monday, February 24th 11:59PM
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="text-neutral-900 md:text-lg text-base mt-1 md:ml-10 ml-6">
                            All other roles
                        </div>
                        <div className="text-neutral-900 text-lg mt-1 ml-1">
                            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSftauvT6rWk1q6tY6zB0dgUaGeIYxNDFgAIQeQv3AoCXEqseA/viewform?usp=dialog" className="underline underline-offset-4 hover:opacity-50 transition">
                                application form
                            </a>
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base mt-1 ml-1">
                            - Friday, March 4th 11:59PM
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
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Year:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                3
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Major:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Microbiology & Immunology
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Favorite Ballet:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Don Quixote
                            </div>
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
                                src='/images/sienna.svg'
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
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Year:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                3
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Major:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Kinesiology
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Favorite Ballet:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Don Quixote
                            </div>
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
                                src='/images/maria.svg'
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
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Year:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                3
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Major:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Cognitive Systems & Data Science
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Favorite Ballet:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Manon
                            </div>
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
                            Katherine Yang — Treasurer
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Year:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                3
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Major:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Marketing & Business Analytics
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Favorite Ballet:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Giselle
                            </div>
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
                                src='/images/tingyu.svg'
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
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Year:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                3
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Major:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                International Economics
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Favorite Ballet:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Swan Lake
                            </div>
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
                                src='/images/nour.svg'
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
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Year:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                2
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Major:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                English Lit & Lang
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Favorite Ballet:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                The Nutrcracker
                            </div>
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
                                src='/images/laurenne.svg'
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
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Year:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                4
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Major:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Kinesiology
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Favorite Ballet:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Le Corsaire
                            </div>
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
                                src='/images/yurina.svg'
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
                            Annabel Lu - VP Marketing
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Year:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                2
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Major:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Microbiology & Immunology + MM
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Favorite Ballet:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Giselle
                            </div>
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
                                src='/images/annabel.svg'
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
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Year:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                2
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Major:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                Neuroscience
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-2xl text-base ${font_bold.className}`}>
                                Favorite Ballet:
                            </div>
                            <div className="text-neutral-900 md:text-2xl text-base">
                                La Bayadere
                            </div>
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
                                src='/images/ruby.svg'
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