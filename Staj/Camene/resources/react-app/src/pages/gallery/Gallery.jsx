import React, { useEffect, useState } from "react";
import "lightbox.js-react/dist/index.css";
import services from "../../services/Services";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageShow from "../../components/ımageShow/ImageShow";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/loading/Loading";
import BannerSecond from "../../components/banner/BannerSecond";
import GalleryBanner from "../../assets/gallery/galleryBanner.jpg";
import { useTranslation } from "react-i18next";
function Gallery() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState();
    const [images, setImages] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [newArray, setNewArray] = useState(null);
    const selectedProjectType = useSelector((state) => state.projectType.value);
    const scrolltoTop = () => {
        window.scrollTo(0, 0);
    };
    const getImages = async () => {
        const result = await services.getGalleries();
        const newArr = [];
        if (result.status === 200) {
            result.data.forEach((element) => {
                newArr.push(...element.images);
            });
            setNewArray(newArr);
            setImages(result.data);
            setTimeout(() => {
                scrolltoTop();
                setLoading(false);
            }, 1000);
        }
    };

    useEffect(() => {
        getImages();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (selectedProjectType !== 1) {
            setLoading(true);
            const filterImage = images.filter(
                (x) => parseInt(x.catergory) === selectedProjectType
            );
            setNewArray(filterImage[0].images);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        window.scrollTo(0, 0);
    }, [selectedProjectType]);

    const handlerImage = (image) => {
        setModal(!modal);
        setSelectedImage(image);
    };

    return (
        <div
            className={`w-full relative flex flex-col   max-xl:h-full  ${
                modal ? "overflow-hidden" : ""
            }`}
        >
            {loading ? <Loading /> : ""}
            {modal && (
                <ImageShow
                    allImage={newArray}
                    modal={modal}
                    setModal={setModal}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
            )}
            <BannerSecond
                image={GalleryBanner}
                title="Lorem ipsum"
                imageAlt={"Banner"}
                description={[t("galeri_title")]}
            />
            <div className="container mx-auto  relative my-20 max-md:px-2 z-50">
                <div className="flex ">
                    <div className="container mx-auto">
                        {newArray !== null && (
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{
                                    350: 2,
                                    768: 3,
                                }}
                            >
                                <Masonry gutter="10px">
                                    {newArray?.map((image, i) => (
                                        <img
                                            onClick={() => handlerImage(image)}
                                            alt="test"
                                            key={i}
                                            src={image}
                                            style={{
                                                width: "100%",
                                                display: "block",
                                            }}
                                        />
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Gallery;
