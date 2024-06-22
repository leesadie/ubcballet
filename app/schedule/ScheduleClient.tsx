'use client';

import Container from "../components/Container";
import Image from "next/image";
import { font_bold } from "../fonts";
import Calendar from "../components/Calendar";

const ScheduleClient = () => {
    return (
        <Container>
            <div className="flex flex-col">
                <div className="group relative w-full md:h-[100vh] h-[50vh]">
                    <Image 
                        src='/images/schedule3.svg'
                        alt="workshops1"
                        layout="fill"
                        className="object-cover brightness-75"
                    />
                    <div className="flex flex-col ml-5">
                        <div className="absolute inset-y-0 md:left-10 left-6 md:top-96 top-52 text-neutral-100">
                            <div className={`md:text-8xl text-4xl ${font_bold.className}`}>
                                SCHEDULE
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-300 mt-10 mx-10"/>
                <div className="flex flex-col items-center justify-center pt-10 pb-10">
                    <Calendar />
                </div>
            </div>
        </Container>
    );
}

export default ScheduleClient;