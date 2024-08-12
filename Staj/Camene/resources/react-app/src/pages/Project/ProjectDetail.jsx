import React, { useState, useEffect } from "react";
import ProjectBanner from "../../assets/project/projectbanner.webp";
import BannerSecond from "../../components/banner/BannerSecond";
import LongImage from "../../assets/project/projectbanner.webp";
import SmallImage1 from "../../assets/project/projefoto.jpg";
import SmallImage2 from "../../assets/project/projefoto2.jpg";
import ImageShow from "../../components/ımageShow/ImageShow";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import services from "../../services/Services";
function ProjectDetail() {
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    console.log(slug);
    const [modal, setModal] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const { t, i18n } = useTranslation();
    const scrolltoTop = () => {
        window.scrollTo(0, 0);
    };

    const [projectsDetailPage, setProjectDetail] = useState(null);

    const getProjectDetail = async () => {
        const result = await services.getProjectDetail();
        console.log("veri", result.data);

        if (result.status === 200) {
            setProjectDetail(result.data);
        }
    };

    useEffect(() => {
        getProjectDetail();
        window.scrollTo(0, 0);
        setLoading(true);
        scrolltoTop();
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    // const image = [
    //     LongImage,
    //     LongImage,
    //     SmallImage1,
    //     SmallImage1,
    //     SmallImage2,
    //     SmallImage2,
    // ];
    const handlerImage = (projectsDetailPage) => {
        setModal(!modal);
        setSelectedImage(projectsDetailPage);
    };
    return (
        <div className="w-full flex flex-col max-xl:h-full">
            {loading ? <Loading /> : ""}
            <BannerSecond
                image={ProjectBanner}
                imageAlt={"Projeler"}
                title={[t("projects_details_title")]}
                description={[t("projects_details_alt_main")]}
            />
            {modal && (
                <ImageShow
                    allImage={projectsDetailPage}
                    modal={modal}
                    setModal={setModal}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
            )}
            {/* <div className="overflow-hidden w-full h-[500px]">
                <img
                    className={`w-full h-full object-cover cursor-pointer transform transition-transform duration-500 hover:scale-105`}
                    src={projectsDetailPage?.image}
                    alt="ss"
                />
            </div> */}
            <div className="container mx-auto my-20 px-20">
                <div className="mb-10">
                    {projectsDetailPage?.map((item, i) => (
                        <div
                            key={i}
                            className="flex justify-start items-center"
                        >
                            <ul className="flex justify-around items-center gap-2 text-gray-400">
                                <li className="">
                                    {[t("projects_details_li_1")]}
                                </li>
                                <li>/</li>
                                <li className="">
                                    {[t("projects_details_li_2")]}
                                </li>
                                <li>/</li>
                                <li className="">
                                    {[t("projects_details_li_3")]}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="my-5 ">
                    {projectsDetailPage.images?.map((item, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-3 grid-rows-2 gap-4"
                        >
                            <div className="col-span-1 h-[250px]">
                                <img
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => handlerImage(item?.image)}
                                    src={item?.image}
                                    alt="Merhaba"
                                />
                            </div>
                            <div className="col-span-2 h-[250px]">
                                <img
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => handlerImage(item?.image)}
                                    src={item?.image}
                                    alt="Merhaba"
                                />
                            </div>
                            <div className="col-span-2 h-[250px]">
                                <img
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => handlerImage(item?.image)}
                                    src={item?.image}
                                    alt="Merhaba"
                                />
                            </div>
                            <div className="col-span-1 h-[250px]">
                                <img
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => handlerImage(item?.image)}
                                    src={item?.image}
                                    alt="Merhaba"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {projectsDetailPage?.map((item, i) => (
                <div key={i} className="my-10 flex flex-col gap-10">
                    <h1 className="text-4xl">{item.title}</h1>
                    <div className="flex justify-between items-start gap-40 max-xl:gap-32 max-lg:gap-20 max-md:gap-5">
                        <div className="flex flex-col text-start w-3/4 gap-7 text-gray-700">
                            {item.content} <br />
                            {item.content}
                        </div>
                        <div className="flex flex-col justify-start items-start gap-5 text-sm">
                            <div className="flex flex-col">
                                <p className="text-gray-600">{t("year")}</p>
                                <p className="text-base">{item.year}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-600">{t("architects")}</p>
                                <p className="text-base">
                                    {item.architects || t("architects_alt")}
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-600">{t("client")}</p>
                                <p className="text-base">
                                    {item.client || t("client_alt")}
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-600">{t("location_")}</p>
                                <p className="text-base">
                                    {item.location || t("location_alt")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectDetail;
