'use client';

import Container from "../Container";
import Button from "./Button";

const Footer = () => {
    return (
        <div className="w-full z-10">
            <div className="pb-10 pt-5 bg-neutral-900 border-t-[1px] border-neutral-100">
                <Container>
                    <div 
                        className="
                            flex
                            flex-row
                            items-center
                            justify-center
                            gap-16
                            lg:text-base
                            text-sm
                            pt-5
                        "
                    >
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ubcballet/">
                            <Button 
                                label="Instagram"
                                onClick={() => {}}
                            />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC31GRZxZGhT894b4ADx5_oA">
                            <Button 
                                label="YouTube"
                                onClick={() => {}}
                            />
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Footer;