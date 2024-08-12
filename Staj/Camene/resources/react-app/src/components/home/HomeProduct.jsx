import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import Brown from "../../assets/home/brown1.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} flex justify-center items-center w-20 h-12 bg-white custom-arrow custom-right-arrow hover:bg-slate-200 duration-150 delay-150`}
            style={{ ...style, right: "10px" }}
            onClick={onClick}
        >
            <FaArrowRight className="text-black" size={30} />
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} flex justify-center items-center w-20 h-12 bg-white custom-arrow custom-left-arrow hover:bg-slate-200 duration-150 delay-150`}
            style={{ ...style, left: "10px", zIndex: 1 }}
            onClick={onClick}
        >
            <FaArrowLeft className="text-black" size={30} />
        </div>
    );
};
function HomeProduct() {
    const [currentSlide, setCurrentSlide] = useState(0);

    var settings = {
        dots: false,
        infinite: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
        nextArrow: <NextArrow />,
        prevArrow: (
            <PrevArrow className="flex justify-center items-center w-20 h-12 bg-white" />
        ),
    };

    const images = [
        "https://picsum.photos/id/237/300/200",
        "https://picsum.photos/id/235/300/200",
        "https://picsum.photos/id/231/300/200",
        "https://picsum.photos/id/232/300/200",
        "https://picsum.photos/id/221/300/200",
        "https://picsum.photos/id/222/300/200",
    ];

    const slideVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    return (
        <div className="w-full relative my-20">
            <motion.img
                className="w-72 h-auto absolute -top-20 object-cover right-0"
                src={Brown}
                alt="Camene"
                animate={{ y: [0, -20, 0], x: [0, 20, 0] }} // Yüksekliği ve genişliği değiştirir
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            />
            <div className="container mx-auto">
                <p className="text-6xl mt-2 text-gray-800">Projeler</p>
            </div>
            {/* <img
                className="w-full h-full absolute top-20 left-0 object-fill"
                src={HomeProductBanner}
                alt="Camene"
            /> */}

            <div className="container mx-auto my-10">
                <Slider {...settings}>
                    {images.map((item, i) => (
                        <div className=" py-5" key={i}>
                            <AnimatePresence initial={false}>
                                {currentSlide === i && (
                                    <motion.div
                                        className="flex justify-between  flex-row-reverse items-start h-[400px]"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={slideVariants}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="w-2/4 h-full">
                                            <img
                                                className="w-full h-full object-cover pl-10"
                                                src={item}
                                                alt="test"
                                            />
                                        </div>
                                        <div className="w-2/4 relative flex flex-col justify-center items-start h-full p-5 gap-3">
                                            <p className="text-2xl">
                                                Doğanın Güzelliği
                                            </p>
                                            <p className="text-base">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500.
                                            </p>
                                            <a
                                                className="text-with-underline-black"
                                                href="asdas#"
                                            >
                                                Detaylı Bilgi İçin Tıklayınız
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default HomeProduct;
