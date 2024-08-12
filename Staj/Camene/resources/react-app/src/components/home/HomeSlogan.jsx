import React from "react";
import SloganBanner from "../../assets/slogan/sloganbanner.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function HomeSlogan() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    return (
        <div className="w-full h-[500px] relative flex justify-center items-center my-10">
            <img
                className="w-full h-full object-cover"
                src={SloganBanner}
                alt="Camene"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40" />
            <div className="absolute flex flex-col justify-center items-center text-white gap-4">
                <p className="text-2xl text-center px-2">
                {[t("home_banner_2")]}
                </p>
                <div
                    onClick={() => navigate("/contact")}
                    className="w-auto  text-2xl h-auto text-white border border-white rounded-xl cursor-pointer hover:bg-white hover:text-black delay-150 transition-colors duration-300 ease-in-out"
                >
                    <p className="px-5 py-3">
                    {[t("home_banner_2_btn")]}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomeSlogan;
