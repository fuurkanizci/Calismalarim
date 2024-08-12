import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import TwitterIcon from "../../assets/icons/twitteicon.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import BannerSecond from "../../components/banner/BannerSecond";
import LocationBanner from "../../assets/location/locationBanner.jpg";
import Loading from "../../components/loading/Loading";
import KonumBanner from "../../assets/location/konumBanner.jpg";
import { useTranslation } from "react-i18next";
function Location() {
    const [loading, setLoading] = useState(false);
    const { t, i18n } = useTranslation();
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            scrolltoTop();
            setLoading(false);
        }, 800);
    }, []);
    const scrolltoTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="w-full h-full">
            <BannerSecond
                image={LocationBanner}
                title={[t("location")]}
                description={[t("text_location")]}
                imageAlt="Camene"
            />
            {loading ? <Loading /> : ""}
            <div className="relative w-full my-20 z-50">
                <div className="container mx-auto my-20 relative z-50">
                    <div className="flex flex-col">
                        <ReactTyped
                            showCursor={false}
                            className="text-4xl mt-2 text-gray-800"
                            strings={[t("our_location")]}
                            typeSpeed={60}
                        />

                        <ReactTyped
                            showCursor={false}
                            className="px-1 h-36 mt-5 text-gray-800"
                            strings={[t("our_location_text")]}
                            typeSpeed={40}
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto  flex justify-center items-center my-20 ">
                <div className="w-full flex justify-between items-center max-w-2xl">
                    <div className="w-[7rem] cursor-pointer  h-[7rem] bg-green-800 flex justify-center items-center hover:scale-105 duration-300 transition-transform ease-in-out">
                        <FaFacebookSquare className="text-white text-5xl" />
                    </div>
                    <div className="w-[7rem] cursor-pointer  h-[7rem] bg-green-800 flex justify-center items-center hover:scale-105 duration-300 transition-transform ease-in-out">
                        <FaInstagram className="text-white text-5xl" />
                    </div>
                    <div className="w-[7rem] cursor-pointer  h-[7rem] bg-green-800 flex justify-center items-center hover:scale-105 duration-300 transition-transform ease-in-out">
                        <img
                            src={TwitterIcon}
                            className="text-white p-[2.2rem]"
                            alt="X"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-auto mt-32 mb-20 relative z-[999]">
                <img
                    src={KonumBanner}
                    className="w-full object-cover h-96"
                    alt="Kıbrıs Girne"
                />
                <div className="w-full flex flex-col justify-center items-center relative -top-10">
                    <div className="bg-white border border-gray-100 rounded-lg flex flex-col gap-3  p-10">
                        <div className="flex justify-between gap-10">
                            <p>{[t("Airport")]} </p>
                            <p>31.7km/ {[t("airport_time")]}</p>
                        </div>
                        <div className="flex justify-between gap-10">
                            <p>{[t("konya_text")]}</p>
                            <p>22.2km/ {[t("konya_time")]}</p>
                        </div>
                        <div className="flex justify-between gap-10">
                            <p>{[t("hospital")]}</p>
                            <p>10.2km/ {[t("hospital_time")]}</p>
                        </div>

                        <div className="flex justify-between gap-10">
                            <p>{[t("castle_interior")]}</p>
                            <p>26.1km/ {[t("castle_interior_time")]}</p>
                        </div>
                        <div className="flex justify-between gap-10">
                            <p>{[t("Antalya_Science_Univ")]}</p>
                            <p>18.4km/ {[t("Antalya_Science_Univ_time")]}</p>
                        </div>
                        <div className="flex justify-between gap-10">
                            <p>{[t("Özdilek_Shopping_Mall")]}</p>
                            <p>17.2km/ {[t("Özdilek_Shopping_Mall_time")]}</p>
                        </div>
                    </div>
                    <MdKeyboardDoubleArrowDown className="text-7xl text-gray-700" />
                    <div className="container mx-auto w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12033.135683390994!2d28.9736617!3d41.0627861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac65770be1161%3A0x84747b6f90fabe46!2sSocialthinks!5e0!3m2!1str!2str!4v1721312998687!5m2!1str!2str"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Harita"
                        ></iframe>
                    </div>
                    <div className="container mx-auto flex justify-center items-center mt-20">
                        <ReactTyped
                            showCursor={false}
                            className="px-1 h-36 mt-5 text-center text-gray-800"
                            strings={[t("last_text")]}
                            typeSpeed={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;
