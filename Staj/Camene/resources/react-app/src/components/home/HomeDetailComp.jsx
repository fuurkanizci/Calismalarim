import React, { useState } from "react";
import Image1 from "../../assets/home/homeDetail/proje1.jpg";
import Image2 from "../../assets/home/homeDetail/proje2.jpg";
import Image3 from "../../assets/home/homeDetail/proje3.jpg";
import { useInView } from "react-intersection-observer";
import TestImage from "../../assets/project/projectbanner.webp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import HomeSlogan from "./HomeSlogan";
import { useTranslation } from "react-i18next";

function HomeDetailComp() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });
    const { t, i18n } = useTranslation();
    const { ref: refContent, inView: inViewContent } = useInView({
        triggerOnce: true,
        threshold: 1,
    });
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    return (
        <div className="w-full h-full flex flex-col">
            <div ref={ref} className="flex flex-col justify-start items-end ">
                <div className="container mx-auto flex justify-end z-50">
                    <div className=" w-3/4 h-auto flex flex-col  items-end gap-5">
                        <div className="flex justify-end items-end gap-4 w-full">
                            <div className="relative w-3/4 h-[600px]">
                                <img
                                    onMouseEnter={() => handleMouseEnter(0)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full object-cover cursor-pointer"
                                    src={Image1}
                                    alt="Home"
                                />
                                <motion.div
                                    className="bg-white absolute border bottom-0 px-2  left-0 w-[80%] h-20 flex justify-start items-center"
                                    initial={{ opacity: 0, y: 50 }} // Başlangıç değerleri
                                    animate={{
                                        opacity: hoveredIndex === 0 ? 1 : 0,
                                        y: hoveredIndex === 0 ? 0 : 20,
                                    }} // Bitiş değerleri
                                    transition={{ duration: 0.7 }} // Animasyon süresi
                                >
                                    <p>{[t("kent_prj")]}</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#f5f0eb] px-4 h-auto flex justify-start items-start -mt-56 z-10">
                    <div className="flex flex-col justify-start items-start pl-3 py-10 w-[20%] mt-10 gap-5">
                        {inView && (
                            <ReactTyped
                                showCursor={false}
                                className="text-xl font-medium"
                                strings={[t("home_projects")]}
                                typeSpeed={130}
                            />
                        )}

                        <p>{[t("home_projects_aciklama")]}</p>
                    </div>
                </div>
            </div>
            <HomeSlogan />
            <div
                ref={refContent}
                className="flex flex-col justify-start items-end my-10"
            >
                <div className="container mx-auto flex justify-end z-50 flex-row-reverse">
                    <div className=" w-3/4 h-auto flex flex-col  items-end gap-5">
                        <div className="w-full grid grid-cols-4 grid-rows-2 gap-4">
                            <div className="relative w-full h-40">
                                <img
                                    onMouseEnter={() => handleMouseEnter(4)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full object-cover cursor-pointer"
                                    src={Image1}
                                    alt="Home"
                                />
                                <motion.div
                                    className="bg-white absolute border bottom-0 left-0 w-[80%] h-10 flex justify-start items-center"
                                    initial={{ opacity: 0, y: 50 }} // Başlangıç değerleri
                                    animate={{
                                        opacity: hoveredIndex === 4 ? 1 : 0,
                                        y: hoveredIndex === 4 ? 0 : 20,
                                    }} // Bitiş değerleri
                                    transition={{ duration: 0.5 }} // Animasyon süresi
                                >
                                    <p>{[t("kent_prj")]}</p>
                                </motion.div>
                            </div>
                            <div className="relative w-full h-40">
                                <img
                                    onMouseEnter={() => handleMouseEnter(5)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full object-cover cursor-pointer"
                                    src={Image1}
                                    alt="Home"
                                />
                                <motion.div
                                    className="bg-white absolute border bottom-0 left-0 w-[80%] h-10 flex justify-start items-center"
                                    initial={{ opacity: 0, y: 50 }} // Başlangıç değerleri
                                    animate={{
                                        opacity: hoveredIndex === 5 ? 1 : 0,
                                        y: hoveredIndex === 5 ? 0 : 20,
                                    }} // Bitiş değerleri
                                    transition={{ duration: 0.5 }} // Animasyon süresi
                                >
                                    <p>{[t("kent_prj")]}</p>
                                </motion.div>
                            </div>
                            <div className="relative w-full h-40">
                                <img
                                    onMouseEnter={() => handleMouseEnter(6)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full object-cover cursor-pointer"
                                    src={Image1}
                                    alt="Home"
                                />
                                <motion.div
                                    className="bg-white absolute border bottom-0 left-0 w-[80%] h-10 flex justify-start items-center"
                                    initial={{ opacity: 0, y: 50 }} // Başlangıç değerleri
                                    animate={{
                                        opacity: hoveredIndex === 6 ? 1 : 0,
                                        y: hoveredIndex === 6 ? 0 : 20,
                                    }} // Bitiş değerleri
                                    transition={{ duration: 0.5 }} // Animasyon süresi
                                >
                                    <p>{[t("kent_prj")]}</p>
                                </motion.div>
                            </div>
                            <div className="relative w-full h-40">
                                <img
                                    onMouseEnter={() => handleMouseEnter(7)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full object-cover cursor-pointer"
                                    src={Image1}
                                    alt="Home"
                                />
                                <motion.div
                                    className="bg-white absolute border bottom-0 left-0 w-[80%] h-10 flex justify-start items-center"
                                    initial={{ opacity: 0, y: 50 }} // Başlangıç değerleri
                                    animate={{
                                        opacity: hoveredIndex === 7 ? 1 : 0,
                                        y: hoveredIndex === 7 ? 0 : 20,
                                    }} // Bitiş değerleri
                                    transition={{ duration: 0.5 }} // Animasyon süresi
                                >
                                    <p>{[t("kent_prj")]}</p>
                                </motion.div>
                            </div>
                            <div className="relative w-full h-40">
                                <img
                                    onMouseEnter={() => handleMouseEnter(8)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full object-cover cursor-pointer"
                                    src={Image1}
                                    alt="Home"
                                />
                                <motion.div
                                    className="bg-white absolute border bottom-0 left-0 w-[80%] h-10 flex justify-start items-center"
                                    initial={{ opacity: 0, y: 50 }} // Başlangıç değerleri
                                    animate={{
                                        opacity: hoveredIndex === 8 ? 1 : 0,
                                        y: hoveredIndex === 8 ? 0 : 20,
                                    }} // Bitiş değerleri
                                    transition={{ duration: 0.5 }} // Animasyon süresi
                                >
                                    <p>{[t("kent_prj")]}</p>
                                </motion.div>
                            </div>
                            <div className="relative w-full h-40">
                                <img
                                    onMouseEnter={() => handleMouseEnter(9)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full object-cover cursor-pointer"
                                    src={Image1}
                                    alt="Home"
                                />
                                <motion.div
                                    className="bg-white absolute border bottom-0 left-0 w-[80%] h-10 flex justify-start items-center"
                                    initial={{ opacity: 0, y: 50 }} // Başlangıç değerleri
                                    animate={{
                                        opacity: hoveredIndex === 9 ? 1 : 0,
                                        y: hoveredIndex === 9 ? 0 : 20,
                                    }} // Bitiş değerleri
                                    transition={{ duration: 0.5 }} // Animasyon süresi
                                >
                                    <p>{[t("kent_prj")]}</p>
                                </motion.div>
                            </div>
                            <div className="relative w-full h-40">
                                <img
                                    onMouseEnter={() => handleMouseEnter(10)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full object-cover cursor-pointer"
                                    src={Image2}
                                    alt="Camene"
                                />
                                <motion.div
                                    className="bg-white absolute border bottom-0 left-0 w-[80%] h-10 flex justify-start items-center"
                                    initial={{ opacity: 0, y: 50 }} // Başlangıç değerleri
                                    animate={{
                                        opacity: hoveredIndex === 10 ? 1 : 0,
                                        y: hoveredIndex === 10 ? 0 : 20,
                                    }} // Bitiş değerleri
                                    transition={{ duration: 0.5 }} // Animasyon süresi
                                >
                                    <p>Camene</p>
                                </motion.div>
                            </div>
                            <div className="relative w-full h-40">
                                <img
                                    onMouseEnter={() => handleMouseEnter(11)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full object-cover cursor-pointer"
                                    src={Image3}
                                    alt="Home Inside"
                                />
                                <motion.div
                                    className="bg-white absolute border bottom-0 left-0 w-[80%] h-10 flex justify-start items-center"
                                    initial={{ opacity: 0, y: 50 }} // Başlangıç değerleri
                                    animate={{
                                        opacity: hoveredIndex === 11 ? 1 : 0,
                                        y: hoveredIndex === 11 ? 0 : 20,
                                    }} // Bitiş değerleri
                                    transition={{ duration: 0.5 }} // Animasyon süresi
                                >
                                    <p>{[t("home_inside")]}</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#f5f0eb] px-4 h-60 flex justify-end items-start -mt-20 z-10">
                    <div className="flex flex-col justify-start items-end text-end pl-3 py-10 w-[20%] mt-10 gap-5">
                        {inViewContent && (
                            <ReactTyped
                                showCursor={false}
                                className="text-xl h-10 font-medium"
                                strings={[t("gallery")]}
                                typeSpeed={130}
                            />
                        )}
                        <p>{[t("gallery_alt")]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeDetailComp;
