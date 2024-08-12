import React from "react";
import { ReactTyped } from "react-typed";
import { useInView } from "react-intersection-observer";
import AboutImage from "../../assets/home/homeabout.png";
import HomeBackImage from "../../assets/sketch/sketch-2.png";
import SecurityHome from "../../assets/home/security.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
function HomeAbout() {
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
    return (
        <div
            className="container mx-auto px-4 mt-32 mb-20 flex flex-col justify-start "
            ref={ref}
        >
            {inView && (
                <ReactTyped
                    showCursor={false}
                    className="text-4xl mt-2 text-gray-800"
                    strings={[t("camene_olarak")]}
                    typeSpeed={70}
                />
            )}

            {inView && (
                <ReactTyped
                    showCursor={false}
                    className="px-1 h-20 mt-5 text-gray-800"
                    strings={[t("home_description")]}
                    typeSpeed={40}
                />
            )}
            <div className="w-full relative flex justify-center flex-col items-center pt-20 gap-10 ">
                <img
                    className="absolute -left-[55rem] opacity-10 w-full h-full top-10 z-20"
                    src={HomeBackImage}
                    alt="BG"
                />
                <div className="flex justify-center items-center pt-20 gap-10 z-50">
                    <div
                        ref={imageRef}
                        className="w-2/4 h-full flex flex-col gap-10"
                    >
                        <ReactTyped
                            showCursor={false}
                            className="h-full  text-2xl font-semibold mt-5 text-gray-800"
                            strings={[t("mukkemmel_iklim")]}
                            typeSpeed={40}
                        />{" "}
                        <p>{t("mukemmel_iklim_1")}</p>
                        <p>{t("mukemmel_iklim_2")}</p>
                        <p> {[t("mukemmel_iklim_3")]}</p>
                    </div>
                    <div className="w-2/4 relative">
                        {inViewImage && (
                            <motion.img
                                className="w-full right-0 object-cover border-2 border-white"
                                src={AboutImage}
                                alt="CameneImage"
                                initial={{ x: 300, opacity: 0 }} // Başlangıç pozisyonu ve opaklığı
                                animate={{ x: 0, opacity: 1 }} // Bitiş pozisyonu ve opaklığı
                                transition={{ duration: 1 }} // Animasyon süresi
                            />
                        )}
                    </div>
                </div>
                <div
                    ref={secondImageRef}
                    className="flex justify-center items-center pt-20 gap-10 flex-row-reverse z-50"
                >
                    <div className="w-2/4 h-full flex flex-col gap-10  py-10">
                        <ReactTyped
                            showCursor={false}
                            className="h-full  text-2xl font-semibold mt-5 text-gray-800"
                            strings={[t("guvenlik_dusuk")]}
                            typeSpeed={40}
                        />{" "}
                        <p>{[t("guvenlik_dusuk_1")]}</p>
                        <p>{[t("guvenlik_dusuk_2")]}</p>
                    </div>

                    <div className="w-2/4 relative">
                        {inViewImageSecond && (
                            <motion.img
                                className="w-full right-0 object-cover border-2 border-white"
                                src={SecurityHome}
                                alt="CameneImage"
                                initial={{ x: -300, opacity: 0 }} // Başlangıç pozisyonu ve opaklığı
                                animate={{ x: 0, opacity: 1 }} // Bitiş pozisyonu ve opaklığı
                                transition={{ duration: 1 }} // Animasyon süresi
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;
