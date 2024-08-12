import { set } from "lodash";
import React, { useEffect, useRef,useState } from "react";
import { GrClose } from "react-icons/gr";
import services from "../../services/Services";
function ImageShow({
    modal,
    setModal,
    selectedImage,
    allImage,
    setSelectedImage,
}) {
    const imageRef = useRef();
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
        const handleKeyDown = (event) => {
            const currentIndex = allImage.indexOf(selectedImage);
            if (event.keyCode === 27) {
                setModal(false);
            }
            if (event.key === "ArrowRight") {
                const nextIndex = (currentIndex + 1) % allImage.length;
                setSelectedImage(allImage[nextIndex]);
            } else if (event.key === "ArrowLeft") {
                const prevIndex =
                    (currentIndex - 1 + allImage.length) % allImage.length;
                setSelectedImage(allImage[prevIndex]);
            }
        };
        //Scroll kapa
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            //Kapandıkdan sonra çalışır
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "visible";
        };
    }, [selectedImage, allImage, setSelectedImage]);

    useEffect(() => {
        const closeDropdown = (e) => {
            if (
                e.target.className ===
                "bg-black opacity-70 w-full h-full absolute z-40"
            ) {
                setModal(false);
            }
        };
        document.body.addEventListener("click", closeDropdown);
        return () => document.body.removeEventListener("click", closeDropdown);
    }, []);

    return (
        <div
            className="w-full h-full fixed top-0 left-0 z-[9999999999] flex justify-center items-center flex-col"
            ref={imageRef}
        >
            <button
                className="bg-white absolute top-10 right-4 z-50 p-2 rounded-4xl max-md:hidden"
                onClick={() => setModal(!modal)}
            >
                <GrClose className="text-2xl text-black" />
            </button>
            <img
                className="w-[80%] max-md:w-full max-md:h-[400px] max-md:p-3 h-[80%] object-cover z-50"
                src={selectedImage}
                alt="test"
            />
            <div className="container mx-auto h-[15%] flex justify-center items-center z-50 overflow-x-auto gap-3 scroll-bar-item">
                {projectsDetailPage?.map((item, i) => (
                    <img
                        onClick={() => setSelectedImage(item)}
                        className={`h-[50%] w-auto object-contain ${
                            selectedImage === item
                                ? "border-2 border-white"
                                : ""
                        }`}
                        key={i}
                        src={item}
                        alt="menuimage"
                    />
                ))}
            </div>
            <div className="bg-black opacity-70 w-full h-full absolute z-40" />
        </div>
    );
}

export default ImageShow;
