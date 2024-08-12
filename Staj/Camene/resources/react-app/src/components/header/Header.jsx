import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import Menu from "./Menu";

function Header() {
    const [isOpen, setOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set scroll direction
            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }

            // Check if at top
            if (currentScrollY < 150) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "auto";
    //     }
    // }, [isOpen]);

    return (
        <>
            <motion.header
                className={`fixed w-full left-0 right-0 top-0 z-[999999999] duration-300 justify-center items-center flex ${
                    isAtTop
                        ? "bg-transparent"
                        : isOpen
                        ? "bg-black py-1"
                        : "bg-white py-1 border-none"
                }`}
                initial={{ y: 0 }}
                animate={{ y: scrollDirection === "down" ? -100 : 0 }}
                transition={{ duration: 0.1 }}
            >
                <div
                    className={`relative px-14 w-full flex items-center justify-between duration-150 h-[5.5rem] delay-0 bg-opacity-0 isAtTop ${
                        isAtTop
                            ? isOpen
                                ? "  "
                                : "bor  "
                            : isOpen
                            ? "bord  "
                            : "border-none"
                    }`}
                >
                    <Hamburger
                        size={45}
                        toggled={isOpen}
                        toggle={setOpen}
                        duration={0.5}
                        color={
                            isOpen ? "#ffffff" : isAtTop ? "#ffffff" : "#000000"
                        }
                    />
                    <h1
                        className={`baskervville-sc-regular text-6xl font-bold  ${
                            isOpen
                                ? "text-white"
                                : isAtTop
                                ? "text-white"
                                : "text-black"
                        }`}
                    >
                        <a href="/">Camene</a>
                    </h1>
                    {/* <p>İLETİŞİME GEÇİN</p> */}
                </div>
            </motion.header>
            <Menu isOpen={isOpen} isAtTop={isAtTop} setOpen={setOpen} />
        </>
    );
}

export default Header;
