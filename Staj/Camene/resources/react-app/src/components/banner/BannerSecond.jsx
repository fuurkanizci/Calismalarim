import React from "react";
import { motion } from "framer-motion";
function BannerSecond({ title, image, imageAlt, description }) {
    return (
        <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
            <img
                src={image}
                className="w-full h-full object-cover scale-up-center"
                alt={imageAlt}
            />

            <motion.div
                className="absolute flex flex-col gap-4 text-white text-center z-[999]"
                initial={{ opacity: 0, y: 100 }} // Başlangıç değerleri
                animate={{ opacity: 1, y: 0 }} // Bitiş değerleri
                transition={{ duration: 2 }} // Animasyon süresi
            >
                <p className="text-base">{title}</p>
                <p className="text-3xl font-bold">{description}</p>
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full bg-black z-40 opacity-30" />
        </div>
    );
}

export default BannerSecond;
