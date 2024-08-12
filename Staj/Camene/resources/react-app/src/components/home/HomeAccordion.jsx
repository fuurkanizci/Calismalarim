import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundDown } from "react-icons/io";
function HomeAccordion() {
    const [selected, setSelected] = useState(0);
    const aboutMenu = [
        {
            id: 1,
            title: "Danışmanlık",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel proin augue tortor.",
        },
        {
            id: 2,
            title: "İnşaat Projeleri",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel proin augue tortor.",
        },
        {
            id: 3,
            title: "Mimarlık Bürosu",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel proin augue tortor.",
        },
        {
            id: 4,
            title: "İnşaat Girişimleri",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel proin augue tortor.",
        },
        {
            id: 5,
            title: "Proje Yönetimi",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel proin augue tortor.",
        },
        {
            id: 6,
            title: "İnşaat İşleri",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel proin augue tortor.",
        },
    ];
    const selectedModal = (id) => {
        if (id === selected) setSelected(0);
        else setSelected(id);
    };
    return (
        <div className="w-full my-5  pb-7 pt-4">
            <div className="container mx-auto w-full max-sm:px-5 max-w-5xl ">
                {aboutMenu.map((item, i) => (
                    <>
                        <div
                            key={i}
                            className="border-b py-5 border-black flex  items-start pb-4 gap-4 cursor-pointer justify-between select-none"
                            onClick={() => selectedModal(item.id)}
                        >
                            <div className="flex justify-start gap-4">
                                <span className=" text-xs leading-4 text-black">
                                    0{item.id}
                                </span>
                                <p className=" text-2xl max-sm:text-2xl leading-[1.143em] select-none text-black">
                                    {item.title}
                                </p>
                            </div>

                            <IoIosArrowRoundDown
                                className={
                                    item.id === selected
                                        ? "rotate-180 text-2xl text-black duration-300  delay-400"
                                        : "rotate-0 text-2xl text-black duration-300  delay-400"
                                }
                            />
                        </div>
                        <AnimatePresence initial={false}>
                            {selected === item.id && (
                                <motion.div
                                    className="overflow-hidden"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <p className=" p-5 text-black">
                                        {item.content}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                ))}
            </div>
        </div>
    );
}

export default HomeAccordion;
