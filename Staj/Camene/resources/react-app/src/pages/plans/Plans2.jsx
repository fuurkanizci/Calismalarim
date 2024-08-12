import React, { useEffect, useState } from "react";
import "./plans.css";
import last from "../../assets/plans/termesos (1).jpg";
import BannerSecond from "../../components/banner/BannerSecond";
import { useInView } from "react-intersection-observer";
import { ReactTyped } from "react-typed";
import PlanBg from "../../assets/plans/real_plan.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import PlansBanners from "../../assets/plans/plansbanners.jpg";
import generalService from "../../services/Services";
import Loading from "../../components/loading/Loading";
import { useTranslation } from "react-i18next";
function Plans2() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const getData = async () => {
        setLoading(true);

        const result = await generalService.getPlans();
        if (result.status === 200) {
            setData(result.data);
            scrollToTop();
            setTimeout(() => {
                setLoading(false);
            }, 800);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="w-full">
            <BannerSecond
                image={PlansBanners}
                imageAlt={"Planlar"}
                title={[t("title_plans")]}
                description={[t("plans_alt")]}
            />
            {loading ? <Loading /> : ""}
            <div className="w-full h-full relative  mt-20">
                <div className="container mx-auto">
                    <div className="first-container">
                        <div className="flex flex-col">
                            <ReactTyped
                                showCursor={false}
                                className="text-4xl mt-2 text-gray-800"
                                strings={[t("title_plans")]}
                                typeSpeed={100}
                            />

                            <ReactTyped
                                showCursor={false}
                                className="px-1 h-36 mt-5 text-gray-800"
                                strings={[t("terra_text")]}
                                typeSpeed={10}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full  my-20">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        breakpoints={{
                            // when window width is <= 768px
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            // when window width is <= 480px
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        freeMode={true}
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        className="mySwiperr h-[500px] w-full"
                        loop={true} // Sonsuz döngü
                        autoplay={{
                            delay: 3000, // 3 saniye bekleme süresi
                            disableOnInteraction: false, // Kullanıcı etkileşiminden sonra da otomatik kaydırmaya devam et
                        }}
                        speed={2000}
                    >
                        {data?.map((item, i) => (
                            <SwiperSlide
                                key={i}
                                className="relative flex justify-center items-center"
                            >
                                <img
                                    className="w-full h-full object-cover duration-150 delay-150"
                                    alt="Resim"
                                    src={item.images}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="container mx-auto">
                    <div className="relative">
                        <div className=" w-full h-full px-6">
                            <p className=" w-full h-full text-gray-800  items-center text-center mb-28 max-lg:mt-12 ">
                                {[t("intermediate_text")]}{" "}
                            </p>
                        </div>
                        <div className="container mx-auto relative ">
                            <img
                                className="w-full h-full"
                                src={PlanBg}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-full h-[500px]">
                        <img
                            className="w-full h-full object-cover mt-14"
                            src={last}
                            alt=""
                        />
                    </div>
                    <div className="">
                        <div ref={ref} className="my-10 flex flex-col">
                            {inView && (
                                <ReactTyped
                                    showCursor={false}
                                    className="text-4xl mt-2 text-gray-800"
                                    strings={[t("tarih_text")]}
                                    typeSpeed={100}
                                />
                            )}
                            {inView && (
                                <ReactTyped
                                    showCursor={false}
                                    className="px-1 h-36 mt-5 text-gray-800"
                                    strings={[t("last_article")]}
                                    typeSpeed={10}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plans2;
