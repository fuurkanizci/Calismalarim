import React, { useEffect, useState } from "react";
import "./feature.css";
import Ozellikler3 from "../../assets/features/ozellikler-pic-3.jpg";
import ProjectBanner from "../../assets/project/projectbanner.webp";
import Loading from "../../components/loading/Loading";
import { GiHomeGarage, GiPowerGenerator } from "react-icons/gi";
import { TbAirConditioning, TbHomeShield } from "react-icons/tb";
import { PiFireExtinguisherLight } from "react-icons/pi";
import { ReactTyped } from "react-typed";
import { useInView } from "react-intersection-observer";
import BannerSecond from "../../components/banner/BannerSecond";
import PlansBanner from "../../assets/plans/newPlansBanner.jpg";
import FeaturesFirst from "../../assets/features/features-1.jpg";
import FeaturesSecond from "../../assets/features/features-2.jpg";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import featureBanner from "../../assets/features/featuresBanner.jpg";
import { useTranslation } from "react-i18next";
function Feature() {
    const [loading, setLoading] = useState(true);
    const { t, i18n } = useTranslation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: imageRef, inView: inViewImage } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: secondImageRef, inView: inViewImageSecond } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: cardRef, inView: cardInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    useEffect(() => {
        setLoading(true);
        scrolltoTop();
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);
    const servicesArray = [
        {
            id: 0,
            title: t("kapali_oto"),
            description: t("kapali_oto_alt"),
            img: <GiHomeGarage className="relative text-5xl" />,
        },
        {
            id: 1,
            title: t("jenerator"),
            description: t("jenerator_alt"),
            img: <GiPowerGenerator className="relative text-5xl" />,
        },
        {
            id: 2,
            title: t("climate"),
            description: t("climate_alt"),
            img: <TbAirConditioning className="relative text-5xl" />,
        },
        {
            id: 3,
            title: t("ozel_site"),
            description: t("ozel_site_alt"),
            img: <TbHomeShield className="relative text-5xl" />,
        },
        {
            id: 4,
            title: t("yangin_sondurme"),
            description: t("yangin_sondurme_alt"),
            img: <PiFireExtinguisherLight className="relative text-5xl" />,
        },
        {
            id: 5,
            title: t("guvenlik_cam"),
            description: t("guvenlik_cam_alt"),
            img: <PiFireExtinguisherLight className="relative text-5xl" />,
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    const scrolltoTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <div className="relative">
                <BannerSecond
                    image={featureBanner}
                    imageAlt={"Projeler"}
                    title={[t("ozellikler")]}
                    description={[t("ozellikler_alt")]}
                />
                {loading ? <Loading /> : ""}
                <div className="flex flex-col my-20 justify-center items-center max-md:flex max-md:justify-center max-md:flex-col max-md:items-center ">
                    <div className="container mx-auto flex flex-col">
                        <ReactTyped
                            showCursor={false}
                            className="text-4xl mt-2 text-gray-800"
                            strings={[t("proje_ozellikleri")]}
                            typeSpeed={100}
                        />

                        <ReactTyped
                            showCursor={false}
                            className="px-1 h-36 mt-5 text-gray-800"
                            strings={[t("proje_ozellikleri_alt")]}
                            typeSpeed={10}
                        />
                    </div>
                    <div className="container mx-auto mb-10 z-10 max-md:flex-col max-xl:px-2">
                        <div className="flex justify-center items-center pt-20 gap-10 z-50 max-md:flex-col">
                            <div
                                ref={imageRef}
                                className="w-2/4 h-full flex flex-col gap-10 max-md:w-full"
                            >
                                <ReactTyped
                                    showCursor={false}
                                    className="h-full  text-2xl font-semibold mt-5 text-gray-800"
                                    strings={[t("yeni_yasam")]}
                                    typeSpeed={40}
                                />
                                <p>{[t("yeni_yasam_alt")]}</p>
                            </div>
                            <div className="w-2/4 relative  max-md:w-full">
                                {inViewImage && (
                                    <motion.img
                                        className="w-full right-0 object-cover border-2 border-white"
                                        src={FeaturesFirst}
                                        alt="Camene"
                                        initial={{ x: 300, opacity: 0 }} // Başlangıç pozisyonu ve opaklığı
                                        animate={{ x: 0, opacity: 1 }} // Bitiş pozisyonu ve opaklığı
                                        transition={{ duration: 1 }} // Animasyon süresi
                                    />
                                )}
                            </div>
                        </div>
                        <div
                            ref={secondImageRef}
                            className="flex justify-center items-center pt-20 gap-10 flex-row-reverse z-50 max-md:flex-col"
                        >
                            <div className="w-2/4 max-md:w-full h-full flex flex-col gap-10  py-10">
                                <ReactTyped
                                    showCursor={false}
                                    className="h-full  text-2xl font-semibold mt-5 text-gray-800"
                                    strings={[t("camene_doga")]}
                                    typeSpeed={40}
                                />{" "}
                                <p>{[t("camene_doga_alt_1")]}</p>
                                <p>{[t("camene_doga_alt_2")]}</p>
                            </div>
                            <div className="w-2/4 max-md:w-full relative">
                                {inViewImageSecond && (
                                    <motion.img
                                        className="w-full right-0 object-cover border-2 border-white"
                                        src={FeaturesSecond}
                                        alt="CameneImage"
                                        initial={{ x: -300, opacity: 0 }} // Başlangıç pozisyonu ve opaklığı
                                        animate={{ x: 0, opacity: 1 }} // Bitiş pozisyonu ve opaklığı
                                        transition={{ duration: 1 }} // Animasyon süresi
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full relative ">
                        <div className="relative top-0 left-0 w-full">
                            <img
                                src={PlansBanner}
                                className="absolute w-full h-[600px] object-cover"
                                alt="Planlar"
                            />
                            <div className="bg-black opacity-40 w-full h-[600px] object-cover absolute" />
                        </div>

                        <div className="container mx-auto flex justify-center items-start flex-col gap-20">
                            <div className="flex flex-col gap-10 z-10 px-5 mb-10 mt-36 text-white">
                                <p className="text-2xl">{[t("hizmetler")]}</p>
                                <p className="text-3xl font-semibold">
                                    {[t("hizmetler_alt")]}
                                </p>
                            </div>

                            <div
                                ref={cardRef}
                                className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 z-50 px-16 max-md:px-2"
                            >
                                {cardInView &&
                                    servicesArray.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="p-5"
                                            initial="hidden"
                                            animate="visible"
                                            variants={itemVariants}
                                            transition={{ delay: i * 0.4 }} // Her öğe için gecikme ayarlanıyor
                                        >
                                            <div className="shadow-custom bg-white flex justify-center items-center aspect-square p-4">
                                                <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
                                                    {item.img}
                                                    <p className="text-center font-bold text-xl h-auto">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-center text-gray-700 h-10">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-row justify-center items-center my-10">
                    <a href="https://www.google.com/">
                        <FaTwitter
                            alt="X"
                            className=" w-9 h-auto text-lime-500"
                        />
                    </a>
                    <a href="https://www.google.com/">
                        <FaFacebook
                            alt="FACE"
                            className=" w-9 h-auto mx-6 text-lime-500"
                        />
                    </a>
                    <a href="https://www.google.com/">
                        <FaInstagram
                            alt="IG"
                            className=" w-9 h-auto text-lime-500"
                        />
                    </a>
                </div> */}
                <div className="w-full h-[500px] max-md:h-[190px] max-lg:h-[390px] my-10">
                    <Parallax
                        bgImage={Ozellikler3}
                        bgImageAlt="the cat"
                        strength={120}
                        className="w-full h-full object-cover"
                    ></Parallax>
                </div>
                {/* <div className="flex justify-start items-center mb-14 flex-col">
                    <img
                        className="w-full h-[500px] object-cover max-md:h-[190px] max-lg:h-[390px] "
                        src={Ozellikler3}
                        alt="O3"
                    ></img>
                </div> */}
                <div className="container mx-auto mb-20">
                    <div ref={ref} className="flex flex-col">
                        {inView && (
                            <ReactTyped
                                showCursor={false}
                                className="text-4xl mt-2 text-gray-800"
                                strings={[t("komsunuz_doga")]}
                                typeSpeed={100}
                            />
                        )}
                        {inView && (
                            <ReactTyped
                                showCursor={false}
                                className="px-1 h-max mt-5 text-gray-800"
                                strings={[t("komsunuz_doga_alt")]}
                                typeSpeed={10}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feature;
