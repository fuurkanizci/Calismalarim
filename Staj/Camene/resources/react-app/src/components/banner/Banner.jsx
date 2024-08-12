import React from "react";
import { motion } from "framer-motion";

function Banner({ bannerImage, title }) {
    return (
        <div className="flex w-full  h-[400px] max-sm:flex max-sm:flex-col max-sm:h-auto ">
            <div className="w-2/4 justify-end max-sm:h-[500px] max-sm:w-full bg-[#6f803b] z-40 flex flex-col items-start">
                <div className=" flex flex-col bottom-2 max-w-max relative text-white text-7xl max-lg:text-4xl">
                    <p className="px-10 py-3">{title}</p>
                    <span className="h-2 w-full bg-white" />
                    <span className="h-2 w-[105%] bg-[#6e645c]" />
                    <span className="h-2 w-[110%] bg-[#ecdbc6]" />
                </div>
            </div>
            <div className="w-2/4 max-sm:w-full relative z-30 overflow-hidden">
                <img
                    className="w-full h-full max-sm:h-[250px] object-cover"
                    src={bannerImage}
                    alt="Camene"
                />

                <div className="bg-black opacity-20 z-20 w-full h-full absolute top-0 right-0" />
            </div>
        </div>
    );
}

export default Banner;
