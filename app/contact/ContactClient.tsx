'use client';

import Container from "../components/Container";
import Image from "next/image";
import { font_bold } from "../fonts";
import { useRouter } from "next/navigation";

const ContactClient = () => {
    return (
        <Container>
            <div className="flex flex-col">
                <div className="group relative w-full md:h-[100vh] h-[50vh]">
                    <Image 
                        src='/images/contact1.svg'
                        alt="workshops1"
                        layout="fill"
                        className="object-cover object-top brightness-50"
                    />
                    <div className="flex flex-col ml-5">
                        <div className="absolute inset-y-0 md:left-10 left-6 md:top-96 top-52 text-neutral-100">
                            <div className={`md:text-8xl text-4xl ${font_bold.className}`}>
                                CONTACT
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
                            Get in touch
                        </div>
                        <div className="text-neutral-900 md:text-xl text-base md:ml-10 ml-6 mt-2">
                            Have questions or want to connect? Send us a message via email or Instagram and we will get back to you as soon as possible!
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div className={`text-neutral-900 text-lg ml-20 mt-10 ${font_bold.className}`}>
                            Email:
                        </div>
                        <div className="text-neutral-900 text-lg ml-20">
                            <a target="_blank" rel="noopener noreferrer" href="mailto:ubballetclub@gmail.com" className="underline underline-offset-2 hover:opacity-50 transition">
                                ubcballetclub@gmail.com
                            </a>
                        </div>
                        <div className={`text-neutral-900 text-lg ml-20 mt-10 ${font_bold.className}`}>
                            Instagram:
                        </div>
                        <div className="text-neutral-900 text-lg ml-20">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ubcballet/" className="underline underline-offset-2 hover:opacity-50 transition">
                                @ubcballet
                            </a>
                        </div>
                        <div className={`text-neutral-900 text-lg ml-20 mt-10 ${font_bold.className}`}>
                            YouTube:
                        </div>
                        <div className="text-neutral-900 text-lg ml-20 mb-10">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC31GRZxZGhT894b4ADx5_oA" className="underline underline-offset-2 hover:opacity-50 transition">
                                @ubcballet
                            </a>
                        </div>
                        <div className={`text-neutral-900 text-lg ml-20 mt-10 ${font_bold.className}`}>
                            Join our mailing list:
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
                                md:w-[110px]
                                w-[110px]
                                cursor-pointer
                                bg-neutral-100
                                text-neutral-900
                                transition
                                mt-3
                                ml-20
                                mb-10
                            "
                        >
                            <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/4B2w8HN4vFXX5c2f7">
                                Sign up here
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ContactClient;