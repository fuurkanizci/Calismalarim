import React from "react";
import "./plans.css";
import background from "../../assets/plans/terradoga-dismekan19-crop-u3532.jpg";
import last from "../../assets/plans/termesos (1).jpg";
import image from "../../assets/plans/vaziyet-plani.jpg";
import image2 from "../../assets/plans/tip1-plan.png";
import tip1 from "../../assets/plans/tip1-plan.png";
import ProjectBanner from "../../assets/location/KIBRIS-GIRNE.jpg";
import BannerSecond from "../../components/banner/BannerSecond";
function Plans() {
    return (
        <div className="w-full h-full ">
            <BannerSecond
                image={ProjectBanner}
                imageAlt={"Planlar"}
                title={"Planlar"}
                description={"Lorem ipsum dolar sit amet."}
            />
            <div>
                <div className="plans">
                    <h3>Planlar</h3>
                </div>
                <hr></hr>
                <br></br>
                <div className="container mx-auto relative">
                    <div className="firsttext">
                        <p>
                            Terra Doğa hayallerini kurduğunuz doğa ile baş başa
                            bir yaşamı, 42 adet 6+1 ultra lüks villa tarzında
                            tasarlanmış ve konforun ön planda olduğu bağımsız
                            yaşam alanlarından oluşmaktadır. Terra Doğa, doğal
                            yaşama olan özlemimizi; doğaya daha uyumlu bir yaşam
                            merkezi haline dönüşmesi için tasarlandı.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto relative">
                <div className="container mx-auto relative ">
                    {" "}
                    <img
                        className="absolute w-full h-auto top-0 left-0"
                        src={background}
                    />
                </div>
                <div className="text_villa_tipleri">
                    <p>Villa Tipleri</p>
                </div>
                <div className="inclusivediv">
                    <div className="inclusivetip1">
                        <h1>TİP</h1>
                        <h2>1</h2>

                        <div className="inclusivetip1longtext">
                            <p>
                                Terra Terra villaları 2 tip olarak üst kat
                                planları aynı fakat alt kat planlarında açık
                                mutfak ve kapalı mutfak olarak ayrılmaktadır.
                                Tip 1 açık mutfak planlıdır.
                            </p>
                        </div>
                        {/* <div className="inclusivetip1img"></div> */}
                        <div className="container mx-auto relative">
                            {" "}
                            <img className="inclusivetip1img" src={tip1} />
                        </div>
                    </div>
                    <div className="inclusivetip2">
                        <h1>TİP</h1>
                        <h2>2</h2>
                        <div className="container mx-auto relative inclusivetip2longtext">
                            <p>
                                Terra Doğa villaları 2 tip olarak üst kat
                                planları aynı fakat alt kat planlarında açık
                                mutfak ve kapalı mutfak olarak ayrılmaktadır.
                                Tip 1 açık mutfak planlıdır.
                            </p>
                        </div>
                        <div className="container mx-auto relative">
                            <div className="inclusivetip2img">
                                <img src={image2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intermediatetext">
                    <p>
                        İç mekanlarda tüm gereksinimleriniz göz önünde
                        bulundurularak tasarlanmış bir çok konfor artırıcı
                        <br></br> özellik bulunmaktadır. Yaşamınıza huzur
                        getirecek tüm ayrıntılar size ve ailenize yeni bir
                        yaşamın<br></br> en doğal halini sunmaktadır.
                    </p>
                </div>
                <div className="container mx-auto relative ">
                    <img className="contentimg" src={image}></img>
                </div>
            </div>

            <div className="last_inclusive">
                <div className="tarihbaslik">
                    <p>Tarih Yanı Başınızda</p>
                </div>
                <br></br>
                <div className="container mx-auto relative ">
                    <div className="tarihbasliktext">
                        <p>
                            Terra Doğa villalarının çevresinde bir çok doğal ve
                            tarihi güzellik bulunmaktadır. Güver uçurumu ve
                            şelalesi, Düzler Çamı ve Termesos Milli Parkı gibi
                            doğal alanları keşfetmek, en iyi aktiviteleriniz
                            arasında yer alacak..
                        </p>
                    </div>
                </div>
                <div>
                    <img className="w-full relative  " alt="last" src={last} />
                </div>{" "}
            </div>
            {/*last_inclusive div */}
        </div>
    );
}

export default Plans;
