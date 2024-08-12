import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../../features/projectType/projectTypeSlice";

function Menu({ isOpen, isAtTop, setOpen }) {
    const selectedProjectType = useSelector((state) => state.projectType.value);
    const dispatch = useDispatch();
    useEffect(() => {
        setOpen(false);
    }, [selectedProjectType]);
    return (
        isOpen && (
            <motion.div
                initial={{ opacity: "0%", x: "-100%" }}
                animate={{
                    opacity: isOpen ? "100%" : "0%",
                    x: isOpen ? 0 : "-100%",
                }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
                className="fixed top-0 left-0 h-full pt-3 bg-[#fff6ed] w-[30%]  px-4 z-[999999999] flex flex-col justify-start items-center"
            >
                <div
                    className={`relative w-full px-2 pb-4  flex items-center justify-between duration-150 h-[5.5rem] delay-0 bg-opacity-0 isAtTop ${
                        isAtTop
                            ? isOpen
                                ? " "
                                : " "
                            : isOpen
                            ? " "
                            : "border-none"
                    }`}
                >
                    <Hamburger
                        size={45}
                        toggled={isOpen}
                        toggle={setOpen}
                        duration={0.5}
                        color={"#000000"}
                    />

                    {/* <p>İLETİŞİME GEÇİN</p> */}
                </div>
                <div className="container mt-[4%] text-2xl overflow-y-auto scroll-bar-item pb-5 overflow-x-hidden">
                    <motion.div
                        initial={{ x: "100%" }} // Başlangıçta sağda, yüzde cinsinden belirtiliyor
                        animate={{ x: isOpen ? 0 : "100%" }} // Açıkken sola doğru (0'a) veya kapalıyken sağa doğru (100%'e) hareket
                        transition={{ duration: 0.2 }}
                    >
                        <a
                            href="/"
                            className="text-black py-2 text-with-underline-black"
                        >
                            Ana Sayfa
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ x: "100%" }} // Başlangıçta sağda, yüzde cinsinden belirtiliyor
                        animate={{ x: isOpen ? 0 : "100%" }} // Açıkken sola doğru (0'a) veya kapalıyken sağa doğru (100%'e) hareket
                        transition={{ duration: 0.3 }}
                    >
                        <a
                            href="/aboutus"
                            className="text-black py-2 text-with-underline-black"
                        >
                            Hakkımızda
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ x: "100%" }} // Başlangıçta sağda, yüzde cinsinden belirtiliyor
                        animate={{ x: isOpen ? 0 : "100%" }} // Açıkken sola doğru (0'a) veya kapalıyken sağa doğru (100%'e) hareket
                        transition={{ duration: 0.4 }}
                    >
                        <a
                            href="/projects"
                            className="text-black py-2 text-with-underline-black"
                        >
                            Projeler
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ x: "100%" }} // Başlangıçta sağda, yüzde cinsinden belirtiliyor
                        animate={{ x: isOpen ? 0 : "100%" }} // Açıkken sola doğru (0'a) veya kapalıyken sağa doğru (100%'e) hareket
                        transition={{ duration: 0.5 }}
                    >
                        <a
                            href="/plans"
                            className="text-black py-2 text-with-underline-black"
                        >
                            Planlar
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ x: "100%" }} // Başlangıçta sağda, yüzde cinsinden belirtiliyor
                        animate={{ x: isOpen ? 0 : "100%" }} // Açıkken sola doğru (0'a) veya kapalıyken sağa doğru (100%'e) hareket
                        transition={{ duration: 0.6 }}
                    >
                        <a
                            href="/projects"
                            className="text-black py-2 text-with-underline-black"
                        >
                            Özellikler
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ x: "100%" }} // Başlangıçta sağda, yüzde cinsinden belirtiliyor
                        animate={{ x: isOpen ? 0 : "100%" }} // Açıkken sola doğru (0'a) veya kapalıyken sağa doğru (100%'e) hareket
                        transition={{ duration: 0.7 }}
                    >
                        <a
                            href="/projects"
                            className="text-black py-2 text-with-underline-black"
                        >
                            Konum
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ x: "100%" }} // Başlangıçta sağda, yüzde cinsinden belirtiliyor
                        animate={{ x: isOpen ? 0 : "100%" }} // Açıkken sola doğru (0'a) veya kapalıyken sağa doğru (100%'e) hareket
                        transition={{ duration: 0.8 }}
                    >
                        <a
                            href="/projects"
                            className="text-black py-2 text-with-underline-black"
                        >
                            Galeriler
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ x: "100%" }} // Başlangıçta sağda, yüzde cinsinden belirtiliyor
                        animate={{ x: isOpen ? 0 : "100%" }} // Açıkken sola doğru (0'a) veya kapalıyken sağa doğru (100%'e) hareket
                        transition={{ duration: 0.9 }}
                    >
                        <a
                            href="/projects"
                            className="text-black py-2 text-with-underline-black"
                        >
                            İletişim
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ x: "100%" }} // Başlangıçta sağda, yüzde cinsinden belirtiliyor
                        animate={{ x: isOpen ? 0 : "100%" }} // Açıkken sola doğru (0'a) veya kapalıyken sağa doğru (100%'e) hareket
                        transition={{ duration: 0.9 }}
                    >
                        <p
                            href="/projects"
                            className="text-black py-2 text-with-underline-black"
                        >
                            TR
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ x: "100%" }} // Başlangıçta sağda, yüzde cinsinden belirtiliyor
                        animate={{ x: isOpen ? 0 : "100%" }} // Açıkken sola doğru (0'a) veya kapalıyken sağa doğru (100%'e) hareket
                        transition={{ duration: 0.9 }}
                    >
                        <p
                            href="/projects"
                            className="text-black py-2 text-with-underline-black"
                        >
                            ENG
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        )
    );
}

export default Menu;
