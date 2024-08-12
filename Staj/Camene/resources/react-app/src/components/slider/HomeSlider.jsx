import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Pagination, Autoplay } from "swiper/modules";

function HomeSlider({ sliderData }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);
    };

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            className="mySwiper h-screen w-full"
            loop={true} // Sonsuz döngü
            onSlideChange={handleSlideChange}
            autoplay={{
                delay: 3000, // 3 saniye bekleme süresi
                disableOnInteraction: false, // Kullanıcı etkileşiminden sonra da otomatik kaydırmaya devam et
            }}
            speed={2000}
        >
            {sliderData?.map((item, i) => (
                <SwiperSlide
                    className="relative flex justify-center items-center"
                    key={i}
                >
                    <img
                        className="w-full h-full object-cover duration-150 delay-150"
                        alt="Resim"
                        src={item.image}
                    />
                    <motion.div
                        className="absolute flex flex-col gap-4 text-white text-center z-[999]"
                        initial={{
                            opacity: currentSlide === i ? 0 : 1,
                            y: currentSlide === i ? 100 : 0,
                        }} // Başlangıç değerleri
                        animate={{
                            opacity: currentSlide === i ? 1 : 0,
                            y: currentSlide === i ? 0 : 100,
                        }} // Bitiş değerleri
                        transition={{ duration: 1 }} // Animasyon süresi
                    >
                        <p className="text-base">{item.title}</p>
                        <p className="text-3xl font-bold">{item.description}</p>
                    </motion.div>

                    <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default HomeSlider;
