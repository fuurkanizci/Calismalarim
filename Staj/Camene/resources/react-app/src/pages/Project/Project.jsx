import { useState, useEffect } from "react";
import ProjectBanner from "../../assets/project/projectbanner.webp";
import { useNavigate } from "react-router-dom";
import services from "../../services/Services";
import BannerSecond from "../../components/banner/BannerSecond";
import ProjeFoto1 from "../../assets/project/projefoto.jpg";
import ProjeFoto2 from "../../assets/project/projefoto2.jpg";
import ProjeFoto3 from "../../assets/project/projefoto3.jpg";
import { useTranslation } from "react-i18next";
import Loading from "../../components/loading/Loading";
function Project() {
    const [loading, setLoading] = useState(true);
    const { t, i18n } = useTranslation();
    const [projectsPage, setProject] = useState(null);

    const getProject = async () => {
        const result = await services.getProject();
        console.log("veri", result.data);

        if (result.status === 200) {
            setProject(result.data);
        }
    };


    const navigate = useNavigate();
    const scrolltoTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        getProject();
        window.scrollTo(0, 0);
        setLoading(true);
        scrolltoTop();
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    return (
        <div className="w-full flex flex-col max-xl:h-full">
            {loading ? <Loading /> : ""}
            <BannerSecond
                image={ProjectBanner}
                imageAlt={"Projeler"}
                title={[t("projects")]}
                description={[t("projects_alt")]}
            />
            <div className="container mx-auto my-20 px-20 max-md:px-2 ">
                {/* <div className="overflow-hidden w-full h-[500px]">
                    <img
                        onClick={() => navigate("test")}
                        className={`w-full h-full object-cover cursor-pointer transform transition-transform duration-500 hover:scale-105`}
                        src={projectsPage?.image}
                        alt="ss"
                    />
                </div> */}

                {/* <div className="flex justify-end items-center">
                    <ul className="flex justify-around items-center gap-2">
                        <li className="text-with-underline-black font-semibold">
                        {[t("projects_li_1")]}
                        </li>
                        <li>/</li>
                        <li className="text-with-underline-black">{[t("projects_li_2")]}</li>
                        <li>/</li>
                        <li className="text-with-underline-black">{[t("projects_li_3")]}</li>
                        <li>/</li>
                        <li className="text-with-underline-black">{[t("projects_li_4")]}</li>

                           </ul>
                </div> */}
                <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4 my-20 overflow-hidden">
                    {projectsPage?.map((item, i) => (
                        <div
                            key={i}
                            className={
                                (i + 4) % 4 === 0 || (i + 4) % 4 === 1 // Kalan 0 veya 1 olduğunda `col-span-2` uygula
                                    ? `relative h-full pb-10 overflow-hidden ${
                                          i === 0
                                              ? "col-span-3"
                                              : projectsPage.length === i + 1
                                              ? "col-span-3"
                                              : "col-span-2"
                                      }`
                                    : "relative h-full pb-10 overflow-hidden col-span-1"
                            }
                        >
                            {" "}
                            <div className="overflow-hidden w-full h-[500px]">
                                <img
                                    onClick={() =>
                                        navigate(`/projects/${item.slug}`)
                                    }
                                    className={`w-full h-full object-cover cursor-pointer transform transition-transform duration-500 hover:scale-105`}
                                    src={item.image}
                                    alt="ss"
                                />
                            </div>
                            <div className="mt-2">
                                <p className="text-base opacity-60">
                                    {[t("projects_alt_title")]}
                                </p>
                                <p className="">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
