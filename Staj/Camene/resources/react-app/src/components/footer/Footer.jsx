import React, { useState, useEffect, useRef } from "react";
import "./footer.css"; // CSS dosyası, stiller için
import { HiMiniArrowSmallUp } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const [showButton, setShowButton] = useState(false);
    const footerRef = useRef(null);
    const { t, i18n } = useTranslation();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 } // 10% görünürlüğe ulaşıldığında tetiklenir
        );

        const footerElements = footerRef.current.querySelectorAll(".fade-in");

        footerElements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            footerElements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-gray-300" ref={footerRef}>
            <div className="footer-container">
                <div className="text-left pl-3 col-span-6">
                    <a href="as" className="link-animation text-4xl fade-in">
                        ifno@camene
                    </a>
                    <p className="pt-3">
                        <h3>{t("footer_comment")}</h3>
                    </p>
                </div>
                <div className="border-l border-gray-300 pl-3 font-settings fade-in col-span-3 div-control">
                    <div className="group-gaps">
                        <div className="text-left">
                            <a
                                href="https://maps.app.goo.gl/7eTKoVfCd7nHNW3D9"
                                target="blank"
                                className="link-animation font-settings"
                            >
                                <span>
                                    Karaoğlanoğlu Cad Zeytinlik Kesimi Atilla
                                    Çankaya Plaza
                                </span>
                                <span>
                                    Dış Kapı No:1 / 1 GİRNE BEL. / KIBRIS
                                </span>
                            </a>
                        </div>
                        <div>
                            <a
                                href="/no"
                                className="link-animation font-settings"
                            >
                                +90 567 894 3642
                            </a>
                        </div>
                        <div>
                            <a
                                href="/services"
                                className="link-animation font-settings"
                            >
                                info@camene.com.tr
                            </a>
                        </div>
                    </div>
                    <div className="mt-11">
                        <p className="text-black">
                            &copy; {new Date().getFullYear()}
                            <a
                                href="/rklm"
                                className="link-animation pt-5 font-settings"
                            >
                                Qode Interactive
                            </a>
                        </p>
                    </div>
                </div>
                <div className="border-l border-gray-300 pl-3 font-settings fade-in col-span-3 div-control">
                    <div className="group-gaps">
                        <a
                            href="IG"
                            target="blank"
                            className="link-animation font-settings w-max"
                        >
                            İnstagram
                        </a>
                        <div>
                            <a
                                href="/lnked"
                                className="link-animation font-settings"
                            >
                                Linkedln
                            </a>
                        </div>
                        <div>
                            <a
                                href="/ytb"
                                className="link-animation font-settings"
                            >
                                YouTube
                            </a>
                        </div>
                        <div>
                            <a
                                href="/bhnc"
                                className="link-animation mb-11 font-settings"
                            >
                                Behance
                            </a>
                        </div>
                    </div>
                    <div className="mt-11">
                        <a
                            href="/join"
                            className="link-animation font-settings"
                        >
                            <h3>{t("footer_newsletter")}</h3>
                        </a>
                    </div>
                </div>
                <div className="fade-in mt-11">
                    {showButton && (
                        <button className="back-to-top" onClick={scrollToTop}>
                            <HiMiniArrowSmallUp className="icon" />
                        </button>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
