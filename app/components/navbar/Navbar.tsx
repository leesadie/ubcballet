'use client';

import Container from "../Container";
import Button from "./Button";
import ButtonIcon from "./ButtonIcon";
import Logo from "./Logo";

import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="w-full z-10">
            <div className="pb-3 md:pb-8 pt-5 bg-neutral-900 border-b-[1px] border-neutral-100">
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            justify-between
                            gap-5
                            md:gap-16
                            font-normal
                            lg:text-base
                            text-xs
                            lg:pt-5
                            lg:px-24
                            lg:pb-0
                            pb-2
                            px-4
                        "
                    >
                        <Logo />

                        <Button 
                            label="Schedule"
                            onClick={() => router.push('/schedule')}
                        />
                        <div className="relative group">
                            <Button 
                                label="Join"
                                onClick={() => {}}
                                icon={<ButtonIcon />}
                            />
                                <div className="absolute hidden group-hover:block left-0 mt-2 w-40 bg-neutral-100 shadow-lg z-20">
                                    <a href="/classes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Classes
                                    </a>
                                    <hr />
                                    <a href="/memberships" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Memberships
                                    </a>
                                    <hr />
                                    <a href="/workshops" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Workshops
                                    </a>
                                    <hr />
                                    <a href="/company" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Company
                                    </a>
                                </div>
                            
                        </div>

                        <Button 
                            label="Shop"
                            onClick={() => router.push('/shop')}
                        />

                        <div className="relative group">
                            <Button 
                                label="Discover"
                                onClick={() => {}}
                                icon={<ButtonIcon />}
                            />
                            
                                <div className="absolute hidden group-hover:block left-0 mt-2 w-40 bg-neutral-100 shadow-lg z-20">
                                    <a href="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        About Us
                                    </a>
                                    <hr />
                                    <a href="/execs" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Execs 24-25
                                    </a>
                                    <hr />
                                    <a href="/dancers" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Our Dancers
                                    </a>
                                </div>
                        </div>
                        <Button 
                            label="Contact"
                            onClick={() => router.push('/contact')}
                        />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;