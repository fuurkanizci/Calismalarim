import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function Header2() {
    const [isAtTop, setIsAtTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);
    const { t, i18n } = useTranslation();
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
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };
    return (
        <div className="absolute w-full top-0 z-[99999999999]">
            <motion.header
                className={`fixed h-20 max-lg:hidden w-full left-0 right-0 top-0 z-[25] duration-300 justify-center items-center flex ${
                    isAtTop
                        ? "bg-transparent"
                        : isOpen
                        ? "bg-black "
                        : "bg-white   border-b border-black"
                }`}
                initial={{ y: 0 }}
                animate={{ y: scrollDirection === "down" ? -100 : 0 }}
                transition={{ duration: 0.1 }}
            >
                <div
                    className={`relative w-full px-10 flex items-center justify-between duration-150   delay-0 bg-opacity-0`}
                >
                    {/* <Hamburger
                        size={35}
                        toggled={isOpen}
                        toggle={setOpen}
                        duration={0.5}
                        color={
                            isOpen ? "#ffffff" : isAtTop ? "#ffffff" : "#000000"
                        }
                    /> */}
                    <h1
                        className={`baskervville-sc-regular text-3xl font-bold   ${
                            isOpen
                                ? "text-white"
                                : isAtTop
                                ? "text-white"
                                : "text-black"
                        }`}
                    >
                        <a href="/">Camene</a>
                    </h1>
                    <div
                        className={`flex justify-between items-center   text-sm gap-7 ${
                            isAtTop ? "text-white" : "text-black"
                        }`}
                    >
                        <a
                            className={` text-with-underline text-sm ${
                                !isAtTop
                                    ? "text-with-underline-black"
                                    : "text-with-underline"
                            }`}
                            href="/aboutus"
                        >
                            {[t('About_Us_menu')]} 
                        </a>
                        <a
                            className={` text-with-underline text-sm ${
                                !isAtTop
                                    ? "text-with-underline-black"
                                    : "text-with-underline"
                            }`}
                            href="/projects"
                        >
                            {[t('Projects_menu')]}
                        </a>
                        <a
                            className={` text-with-underline text-sm ${
                                !isAtTop
                                    ? "text-with-underline-black"
                                    : "text-with-underline"
                            }`}
                            href="/features"
                        >
                            {[t('Features_menu')]} 
                        </a>
                        <a
                            className={` text-with-underline text-sm ${
                                !isAtTop
                                    ? "text-with-underline-black"
                                    : "text-with-underline"
                            }`}
                            href="/plans"
                        >
                            {[t('plan_menu')]}
                        </a>

                        <a
                            className={` text-with-underline text-sm ${
                                !isAtTop
                                    ? "text-with-underline-black"
                                    : "text-with-underline"
                            }`}
                            href="/location"
                        >
                            {[t('location_menu')]}
                        </a>
                        <a
                            className={` text-with-underline text-sm ${
                                !isAtTop
                                    ? "text-with-underline-black"
                                    : "text-with-underline"
                            }`}
                            href="/gallery"
                        >
                            {[t('gallery_menu')]}
                        </a>

                        <a
                            className={` text-with-underline text-sm ${
                                !isAtTop
                                    ? "text-with-underline-black"
                                    : "text-with-underline"
                            }`}
                            href="/contact"
                        >
                            {[t('Contact_menu')]}
                        </a>
                        <div className="flex gap-2 w-16">
                            <p
                                className={` text-with-underline text-sm ${
                                    !isAtTop
                                        ? "text-with-underline-black"
                                        : "text-with-underline"
                                }`}
                                onClick={() => changeLanguage("tr")}
                            >
                                TR
                            </p>
                            <p>/</p>
                            <p
                                className={` text-with-underline text-sm ${
                                    !isAtTop
                                        ? "text-with-underline-black"
                                        : "text-with-underline"
                                }`}
                                onClick={() => changeLanguage("en")}
                            >
                                ENG
                            </p>
                        </div>
                    </div>
                </div>
            </motion.header>
            <div className={`hidden max-lg:flex justify-between pt-4 px-3 `}>
                <Hamburger
                    size={40}
                    toggled={isOpen}
                    toggle={setOpen}
                    duration={0.5}
                    color={"#FFFFFF"}
                />
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "20%" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 1.5 }}
                        className="bg-black w-4/5 h-full fixed top-0 right-0 flex flex-col items-start justify-between p-10 space-y-4"
                    >
                        <div className="flex flex-col gap-5">
                            <a
                                className=" text-sm px-2 text-white"
                                href="/aboutus"
                            >
                                Hakkımızda
                            </a>
                            <a
                                className=" text-sm px-2 text-white"
                                href="/projects"
                            >
                                Projeler
                            </a>
                            <a
                                className=" text-sm px-2 text-white"
                                href="/features"
                            >
                                Özellikler
                            </a>
                            <a
                                className=" text-sm px-2 text-white"
                                href="/plans"
                            >
                                Planlar
                            </a>
                            <a
                                className=" text-sm px-2 text-white"
                                href="/location"
                            >
                                Konum
                            </a>
                            <a
                                className=" text-sm px-2 text-white"
                                href="/gallery"
                            >
                                Galeriler
                            </a>
                            <a
                                className=" text-sm px-2 text-white"
                                href="/contact"
                            >
                                İletişim
                            </a>
                            <div className="flex gap-2 ">
                                <p
                                    className="text-sm px-2 text-white hover:font-bold duration-150 delay-150 transition-transform "
                                    onClick={() => changeLanguage("tr")}
                                >
                                    TR
                                </p>
                                <p className="text-sm px-2 text-white hover:font-bold duration-150 delay-150 transition-transform">
                                    /
                                </p>
                                <p
                                    className="text-sm px-2 text-white hover:font-bold duration-150 delay-150 transition-transform"
                                    onClick={() => changeLanguage("en")}
                                >
                                    ENG
                                </p>
                            </div>
                        </div>
                        <div className="text-white text-3xl flex gap-3 justify-between items-center">
                            <FaSquareFacebook />
                            <FiInstagram />
                        </div>
                    </motion.div>
                )}
                <div className="baskervville-sc-regular text-5xl  text-white font-bold">
                    <a href="/">Camene</a>
                </div>
            </div>
        </div>
    );
}

export default Header2;
