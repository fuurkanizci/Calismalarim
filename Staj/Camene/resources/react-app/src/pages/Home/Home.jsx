import React, { useEffect, useState } from "react";
import HomeSlider from "../../components/slider/HomeSlider";
import Services from "../../services/Services";
import HomeAbout from "../../components/home/HomeAbout";
import HomeDetailComp from "../../components/home/HomeDetailComp";

function Home() {
    const [sliderData, setSliderData] = useState(null);

    const getSliderData = async () => {
        const result = await Services.getHomeSliders();
        if (result.status === 200) {
            setSliderData(result.data);
        }
    };
    useEffect(() => {
        getSliderData();
    }, []);

    return (
        <div className="relative w-full">
            <div className=" z-40 w-full  relative flex justify-end items-start flex-col overflow-hidden">
                <HomeSlider sliderData={sliderData} />
                <HomeAbout />
                {/* <HomeAccordion /> */}
                {/* <HomeProduct /> */}
                <HomeDetailComp />
                <div className="w-full h-full mt-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12033.135683390994!2d28.9736617!3d41.0627861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac65770be1161%3A0x84747b6f90fabe46!2sSocialthinks!5e0!3m2!1str!2str!4v1720527006269!5m2!1str!2str"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="harita"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Home;
