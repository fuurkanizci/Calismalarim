import React, { useState } from "react";
import AboutBanner from "../../assets/aboutus/aboutbanner.jpg";
import { IoIosArrowRoundDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import seconAbout from "../../assets/aboutus/secondAbout.jpg";
import CountUp from "react-countup";
import BannerSecond from "../../components/banner/BannerSecond";
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";

function AboutUs() {
    const [selected, setSelected] = useState(0);
    const { t, i18n } = useTranslation();
    const aboutMenu = [
        {
            id: 1,
            title: t("danismanlik"),
            content: t("danismanlik_alt"),
        },
        {
            id: 2,
            title: t("insaat_prj"),
            content: t("insaat_prj_alt"),
        },
        {
            id: 3,
            title: t("mimarlik_buro"),
            content: t("mimarlik_buro_alt"),
        },
        {
            id: 4,
            title: t("insaat_girisim"),
            content: t("insaat_girisim_alt"),
        },
        {
            id: 5,
            title: t("proje_yonetimi"),
            content: t("proje_yonetimi_alt"),
        },
        {
            id: 6,
            title: t("insaat_isleri"),
            content: t("insaat_isleri_alt"),
        },
    ];
    const selectedModal = (id) => {
        if (id === selected) setSelected(0);
        else setSelected(id);
    };
    const { ref, inView } = useInView({
        triggerOnce: true, // sadece bir kere tetiklenmesini sağlamak için
        threshold: 0.5, // bileşenin %50'si görünür olduğunda tetiklenir
    });
    const { containerRef, containerRefInView } = useInView({
        triggerOnce: true, // sadece bir kere tetiklenmesini sağlamak için
        threshold: 0.5, // bileşenin %50'si görünür olduğunda tetiklenir
    });
    return (
        <div className="w-full flex flex-col">
            <BannerSecond
                title={[t("hakkimizda_trnslt")]}
                description={[t("hakkimizda")]}
                image={AboutBanner}
                imageAlt={"Test"}
            />
            <div className="flex justify-around items-start my-20 container mx-auto gap-4 max-lg:flex-col">
                <div className="w-2/4 max-lg:w-full mt-12">
                    <p className=" text-2xl text-black max-sm:text-xl max-sm:text-center">
                        {[t("hakkimizda_2")]}
                    </p>
                </div>
                <div className="w-2/4 max-lg:w-full max-sm:px-5">
                    {aboutMenu.map((item, i) => (
                        <>
                            <div
                                key={i}
                                className="border-b py-10 border-gray-300 flex  items-start pb-4 gap-4 cursor-pointer justify-between select-none"
                                onClick={() => selectedModal(item.id)}
                            >
                                <div className="flex justify-start gap-4">
                                    <span className=" text-xs leading-4">
                                        0{item.id}
                                    </span>
                                    <p className=" text-2xl max-sm:text-xl leading-[1.143em] select-none">
                                        {item.title}
                                    </p>
                                </div>

                                <IoIosArrowRoundDown
                                    className={
                                        item.id === selected
                                            ? "rotate-180 text-2xl text-black duration-300  delay-400"
                                            : "rotate-0 text-2xl text-black duration-300  delay-400"
                                    }
                                />
                            </div>
                            <AnimatePresence initial={false}>
                                {selected === item.id && (
                                    <motion.div
                                        className="overflow-hidden"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <p className=" p-5">{item.content}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </>
                    ))}
                </div>
            </div>

            <div className="w-full h-[400px] max-md:h-[190px] max-lg:h-[390px] my-10">
                <Parallax
                    bgImage={seconAbout}
                    bgImageAlt="Camene"
                    strength={120}
                    className="w-full h-full object-cover"
                ></Parallax>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
            >
                <div className="flex justify-around items-start mt-20 container mx-auto  max-sm:flex-col-reverse">
                    <div className="w-4/6  max-lg:w-2/4 max-sm:w-full">
                        <div className="w-full flex flex-wrap gap-5 max-lg:gap-10">
                            <div className="w-[45%] max-lg:w-full p-2 m-2 ">
                                <p className="border-b border-gray-500  ">
                                    <div ref={ref}>
                                        {inView ? <CountUp end={312} /> : null}
                                    </div>
                                </p>
                                <p className="py-2 ">{[t("gercek_prjs")]}</p>
                            </div>
                            <div className="w-[45%] max-lg:w-full p-2 m-2 ">
                                <p className="border-b border-gray-500  ">
                                    <div ref={ref}>
                                        {inView ? <CountUp end={312} /> : null}
                                    </div>
                                </p>
                                <p className="py-2 ">{[t("gercek_prjs")]}</p>
                            </div>
                            <div className="w-[45%] max-lg:w-full p-2 m-2 ">
                                <p className="border-b border-gray-500">
                                    <div ref={ref}>
                                        {inView ? (
                                            <CountUp end={50000} />
                                        ) : null}
                                    </div>
                                </p>
                                <p className="py-2 ">{[t("gercek_prjs")]}</p>
                            </div>
                            <div className="w-[45%] max-lg:w-full p-2 m-2 ">
                                <p className="border-b border-gray-500">
                                    <div ref={ref}>
                                        {inView ? <CountUp end={2003} /> : null}
                                    </div>
                                </p>
                                <p className="py-2 ">{[t("gercek_prjs")]}</p>
                            </div>
                            <div className="w-[45%] max-lg:w-full p-2 m-2 ">
                                <p className="border-b border-gray-500  ">
                                    <div ref={ref}>
                                        {inView ? (
                                            <CountUp end={123123} />
                                        ) : null}
                                    </div>
                                </p>
                                <p className="py-2 ">{[t("gercek_prjs")]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/6 max-lg:w-2/4 max-sm:w-full">
                        <p className=" text-2xl text-black max-sm:text-center max-sm:text-xl">
                            {[t("gercek_prjs_side")]}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutUs;
