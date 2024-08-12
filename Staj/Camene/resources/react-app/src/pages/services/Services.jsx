import React, { useEffect, useState } from "react";
import "./services.css";
import Loading from "../../components/loading/Loading";
import ProjectBanner from "../../assets/project/projectbanner.webp";
import { motion } from "framer-motion";

import Services1 from "../../../src/assets/service/services-1.png";
import Services2 from "../../../src/assets/service/services-2.png";
import Services3 from "../../../src/assets/service/services-3.png";
import Services4 from "../../../src/assets/service/services-4.png";
import Services5 from "../../../src/assets/service/services-5.png";
import Services6 from "../../../src/assets/service/services-6.png";
import Services7 from "../../../src/assets/service/services-7.png";
import Services8 from "../../../src/assets/service/services-8.png";
import Services9 from "../../../src/assets/service/services-9.png";
import Services10 from "../../../src/assets/service/services-long.jpg";
import Services11 from "../../../src/assets/service/services-long-2.jpg";
import Banner from "../../components/banner/Banner";

const Services = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, []);

    return (
        <>
            {!loading ? <Loading /> : ""}
            <div className=" -mt-20">
                <Banner title={"Hizmetlerimiz"} bannerImage={ProjectBanner} />
                <div>
                    <p className="text-black pr-9 pl-16 pb-24  pt-20 text-position font-normal max-md:pr-7   ">
                        What sets us apart from the rest is our visionary goal &
                        truly unique designs curated to perfection.
                    </p>
                </div>
                <div className="auto-rows-auto container  gap-10 pb-32 pl-16 pr-24  yazi-tip flex justify-between items-start max-md:flex-col max-md:px-9 max-md:gap-10">
                    <div className="">
                        <img
                            className="pic-sizes"
                            src={Services1}
                            alt="S1"
                        ></img>
                        <h1 className="text-2xl font-bold mt-2"> Commercial</h1>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates libero quod, veritatis sint
                            consequuntur obcaecati numquam fugit, ea autem
                            explicabo natus culpa rem enim, iusto quo
                            accusantium alias sunt maiores.
                        </p>
                    </div>
                    <div className="">
                        <img
                            className="pic-sizes"
                            src={Services2}
                            alt="S2"
                        ></img>
                        <h1 className="text-2xl font-bold">Residential</h1>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates libero quod, veritatis sint
                            consequuntur obcaecati numquam fugit, ea autem
                            explicabo natus culpa rem enim, iusto quo
                            accusantium alias sunt maiores.
                        </p>
                    </div>
                    <div className="">
                        <img
                            className="pic-sizes"
                            src={Services3}
                            alt="S3"
                        ></img>
                        <h1 className="text-2xl font-bold mt-2">Hospitality</h1>
                        <p className=" mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates libero quod, veritatis sint
                            consequuntur obcaecati numquam fugit, ea autem
                            explicabo natus culpa rem enim, iusto quo
                            accusantium alias sunt maiores.
                        </p>
                    </div>
                    <div className="">
                        <img
                            className="pic-sizes"
                            src={Services4}
                            alt="S4"
                        ></img>
                        <h1 className="text-2xl font-bold mt-2">
                            Multipurpose{" "}
                        </h1>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates libero quod, veritatis sint
                            consequuntur obcaecati numquam fugit, ea autem
                            explicabo natus culpa rem enim, iusto quo
                            accusantium alias sunt maiores.
                        </p>
                    </div>
                </div>
                <div className="flex justify-start items-center ">
                    <img
                        className="full-width-image "
                        src={Services10}
                        alt="S5"
                    ></img>
                    <p className="absolute text-4xl text-white yazi-tip pl-12">
                        BUILDING SPACES FROM THE INSIDE ARCHITECTURE
                    </p>
                </div>

                <div className="services-container div-position pt-36  pl-16 pr-16 pb-36 ">
                    <div className="col-span-6">
                        <p className=" text-left text-4xl text-black pr-12 pb-14">
                            Making sure you have all the services you might need
                            at your fingertips
                        </p>
                    </div>
                    <div className="col-span-3 auto-rows-auto ">
                        <div>
                            <h3>
                                <div className="justify-start flex items-center">
                                    <img
                                        className="pic-sizes-sec"
                                        src={Services6}
                                        alt="S6"
                                    />
                                    <div>
                                        <p className="text-3xl font-normal pl-2">
                                            Planning
                                        </p>
                                    </div>
                                </div>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet sed, adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua ut enim ad.
                            </p>
                        </div>
                        <div className="pt-16">
                            <h3>
                                <div className="justify-start flex items-center">
                                    <img
                                        className="pic-sizes-sec"
                                        src={Services7}
                                        alt="S7"
                                    />
                                    <div>
                                        <p className="text-3xl font-normal pl-2">
                                            Artisans
                                        </p>
                                    </div>
                                </div>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet sed, adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua ut enim ad.
                            </p>
                        </div>
                        <div className="pt-16">
                            <h3>
                                <div className="justify-start flex items-center">
                                    <img
                                        className="pic-sizes-sec"
                                        src={Services8}
                                        alt="S8"
                                    />
                                    <div>
                                        <p className="text-3xl font-normal pl-2">
                                            Residences
                                        </p>
                                    </div>
                                </div>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet sed, adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua ut enim ad.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-3 auto-rows-auto ">
                        <div>
                            <h3>
                                <div className="justify-start flex items-center">
                                    <img
                                        className="pic-sizes-sec"
                                        src={Services9}
                                        alt="S9"
                                    />
                                    <div>
                                        <p className="text-3xl font-normal pl-2">
                                            3D Modelling
                                        </p>
                                    </div>
                                </div>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet sed, adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua ut enim ad.
                            </p>
                        </div>
                        <div className="pt-16">
                            <h3>
                                <div className="justify-start flex items-center">
                                    <img
                                        className="pic-sizes-sec"
                                        src={Services5}
                                        alt="S10"
                                    />
                                    <div>
                                        <p className="text-3xl font-normal pl-2">
                                            Floor plans
                                        </p>
                                    </div>
                                </div>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet sed, adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua ut enim ad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center ">
                    <img
                        className=" full-width-image"
                        src={Services11}
                        alt="S11"
                    ></img>
                    <p className="absolute text-4xl text-white yazi-tip pl-12">
                        BUILDING SPACES
                        <br />
                        FROM THE INSIDE
                    </p>
                </div>
                <div className="services-container div-position pt-32 px-16 pb-32 ">
                    <div className="col-span-6">
                        <p className=" text-left text-4xl text-black pr-12 text-position font-normal max-md:pr-7">
                            Offering an array of services in the fields of
                            architecture and interior design.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
