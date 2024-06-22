'use client';

import Container from "../components/Container";
import Image from "next/image";
import { useRouter } from "next/navigation"; {/* direct to dancers page after auditions; change register now button*/}
import { font_bold } from "../fonts";

const CompanyClient = () => {
    return (
        <Container>
            <div className="flex flex-col">
                <div className="group relative w-full md:h-[100vh] h-[50vh]">
                    <Image 
                        src='/images/company1.svg'
                        alt="company1"
                        layout="fill"
                        className="object-cover brightness-75"
                    />
                    <div className="flex flex-col ml-5">
                        <div className="absolute inset-y-0 md:left-10 left-6 md:top-96 top-52 text-neutral-100">
                            <div className="md:text-2xl text-lg">
                                Join
                            </div>
                            <div className={`md:text-8xl text-4xl ${font_bold.className}`}>
                                COMPANY
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
                            About Company
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
                            Join our performance company for the 2024-2025 school year!
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base md:mt-10 mt-5 md:mx-10 mx-6">
                            Company dancers perform at showcases including Dance Horizons and Thunderbird Dance Team,
                            as well as competitions such as Surrey Dance Festival. This year, we're planning our 
                            own show as well! More info TBA.
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
                            24-25 Auditions
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
                            Auditions for the 2024-2025 school year will take place September 16th, 2024.
                        </div>
                        <div className="text-neutral-900 md:text-lg text-base md:mt-10 mt-5 md:mx-10 mx-6">
                            The audition will include 1 hour of technique class and 1 hour of repertoire. Extra
                            time be added as needed, depending on number of dancers auditioning. Please arrive at 
                            least 10 minutes early to sign in and warm up. 
                        </div>
                        <div className="flex flex-row md:mt-10 mt-5 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Date:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                September 16th, 2024
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Time:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                6:00-8:00pm
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 mx-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Location:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                LIFE 26
                            </div>
                        </div>
                        <div className="flex flex-row md:mt-3 md:mx-10 ml-6 gap-1">
                            <div className={`text-neutral-900 md:text-lg text-base ${font_bold.className}`}>
                                Audition Fee:
                            </div>
                            <div className="text-neutral-900 md:text-lg text-base">
                                $5 all dancers
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
                                md:w-[150px]
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
                            Pre-Register Now
                            {/* link to Google form */}
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm pt-2 mb-10 md:mx-10 ml-6">
                            *Pre-Registration is not required, but will help us with planning.
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
                            md:h-[100vh]
                        "
                    >
                        <div className={`text-neutral-900 md:text-4xl md:ml-10 md:mt-10 text-2xl ml-6 mt-4 ${font_bold.className}`}>
                            Company FAQs
                        </div>
                    </div>
                    <div
                        className="
                            col-span-1
                            row-span-2
                            w-full
                        "
                    >
                        <div className={`text-neutral-900 md:mt-10 mt-5 md:text-lg text-sm md:mx-10 mx-6 ${font_bold.className}`}>
                            What is the time commitment for Company?
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm mt-5 md:mx-10 mx-6">
                            Company involves mandatory weekly rehearsals. Rehearsals this year will be on Monday's from 
                            7:30-9:30. Additional rehearsals may be added closer to show dates as needed.
                            <br />
                            Attending at least one class a week is also now required for company dancers. If none of the 
                            class times work for you, please let us know and we will work with you to come to an agreement.
                        </div>
                        <div className={`text-neutral-900 md:mt-10 mt-5 md:text-lg text-sm md:mx-10 mx-6 ${font_bold.className}`}>
                            Is there a financial cost to joining Company?
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm mt-5 md:mx-10 mx-6">
                            Company members do have to pay for weekly class, either by membership or drop-in. Other than this,
                            there is no additional cost.
                        </div>
                        <div className={`text-neutral-900 md:mt-10 mt-5 md:text-lg text-sm md:mx-10 mx-6 ${font_bold.className}`}>
                            Do I have to be a member in order to join?
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm mt-5 md:mx-10 mx-6">
                            No. However, since weekly class is mandatory for company dancers, you may want to purchase a membership.
                            You can still opt to pay by drop-in.
                        </div>
                        <div className={`text-neutral-900 md:mt-10 mt-5 md:text-lg text-sm md:mx-10 mx-6 ${font_bold.className}`}>
                            What if I can't make some rehearsals?
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm mt-5 md:mx-10 mx-6">
                            Extenuating circumstances, such as illness, etc. are excused. However, we ask that you catch up on any new
                            choreography before the next reherasal.
                            <br />
                            If you miss more than 2 rehearsals without such circumstances, choreographers reserve the right to remove
                            your place in group pieces.
                        </div>
                        <div className={`text-neutral-900 md:mt-10 mt-5 md:text-lg text-sm md:mx-10 mx-6 ${font_bold.className}`}>
                            How will I be held accountable for attending rehearsals and classes?
                        </div>
                        <div className="text-neutral-900 md:text-lg text-sm mt-5 md:mx-10 mx-6">
                            All company dancers will be required to sign a contract upon acceptance, indicating your understanding of
                            these policies.
                        </div>
                        <div className={`text-neutral-900 md:mt-10 mt-5 md:text-lg text-sm md:mx-10 mx-6 mb-10 ${font_bold.className}`}>
                            Other questions? Contact us at ubcballetclub@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default CompanyClient;