import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactBanner from "../../assets/contact/contactban.jpg";
import BannerSecond from "../../components/banner/BannerSecond";
import BannerForContact from "../../assets/contact/bannerImage2.jpg";
import generalService from "../../services/Services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import ReactLoading from "react-loading";
import InputMask from "react-input-mask";
import Loading from "../../components/loading/Loading";
function Contact() {
    const [buttonLoading, setButtonLoading] = useState(false);
    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            scrolltoTop();
            setLoading(false);
        }, 800);
    }, []);
    const scrolltoTop = () => {
        window.scrollTo(0, 0);
    };
    const notify = () =>
        toast.success("Form başarıyla gönderildi.", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    const notifyError = () =>
        toast.error("Form gönderilirken hata oluştu!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    const formik = useFormik({
        initialValues: {
            fullname: "",
            phone: "",
            mail: "",
            message: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string().min(2).required("Zorunlu alan"),
            phone: Yup.string()
                .required("Telefon numarası zorunludur")
                .matches(
                    /^(0\s\d{3}\s\d{3}\s\d{2}\s\d{2})$/,
                    "Geçerli bir telefon numarası girin"
                ),

            mail: Yup.string()
                .email("Geçerli bir e-posta adresi girin")
                .required("Zorunlu alan"),
            message: Yup.string().min(2).required("Zorunlu alan"),
        }),

        onSubmit: async (values, { resetForm }) => {
            setButtonLoading(true);
            try {
                const result = await generalService.contactForm(values);
                if (result.data.message === "Success") {
                    resetForm();
                    notify();
                    setButtonLoading(false);
                } else {
                    notifyError();
                    setButtonLoading(false);
                }
            } catch (error) {
                notifyError();
                setButtonLoading(false);
            }
        },
    });

    return (
        <div className="relative ">
            <BannerSecond
                title={[t("banner_contact")]}
                image={ContactBanner}
                description={[t("banner_text")]}
                alt="Nature Camene"
            />
            <ToastContainer />
            {loading ? <Loading /> : ""}
            <div className="flex flex-col  my-20 justify-around items-start  container mx-auto gap-4 max-lg:flex-col px-5">
                <div className="flex flex-col justify-start gap-4 w-2/4 max-lg:w-3/4">
                    <p className="text-3xl font-medium">
                        {[t("content_contact")]}
                    </p>
                    <p className="font-normal">{[t("content_contact_text")]}</p>
                </div>
                <div className="flex flex-col mt-16">
                    <div className="w-full max-lg:w-full max-sm:px-5 flex justify-start max-lg:mt-4 gap-10">
                        <div className="flex justify-center items-center flex-col  gap-3 w-2/6">
                            <div className="flex flex-col justify-between items-start text-start  gap-10">
                                <div className="flex flex-col">
                                    <p className="text-xl">
                                        {[t("phone_text")]}
                                    </p>
                                    <a
                                        className="text-with-underline-black w-max"
                                        href="tel:02123339999"
                                    >
                                        0212 333 99 99
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl">Mail:</p>
                                    <a
                                        className="text-with-underline-black w-max"
                                        href="mailto:info@camene.com.tr"
                                    >
                                        info@camene.com.tr
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl">{[t("Address")]}</p>
                                    <a
                                        className="text-with-underline-black w-3/4 max-md:w-full"
                                        href="https://maps.app.goo.gl/7eTKoVfCd7nHNW3D9"
                                        target="blank"
                                    >
                                        Karaoğlanoğlu Cad Zeytinlik Kesimi
                                        Atilla Çankaya Plaza <br />
                                        Dış Kapı No:1 / 1 GİRNE BEL. / KIBRIS
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/6">
                            <img
                                className="w-full h-full object-cover"
                                src={BannerForContact}
                                alt="Camene"
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-5 mt-16">
                        <div className="w-2/4 max-lg:w-full flex flex-col gap-4">
                            <p className="w-full text-start text-3xl font-semibold ">
                                {[t("proje_text")]}
                            </p>
                            <p>{[t("intertitle")]}</p>
                        </div>
                        <form
                            className="flex flex-col justify-start mt-5 items-start w-2/4 max-lg:w-full max-md:px-4"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="flex flex-col w-full py-2">
                                <label className="text-base text-gray-600 flex justify-start items-center gap-4">
                                    <p>Ad Soyad</p>
                                    {formik.touched.fullname &&
                                        formik.errors.fullname && (
                                            <p className="text-red-500 text-sm">
                                                {formik.errors.fullname}
                                            </p>
                                        )}
                                </label>

                                <input
                                    variant="standard"
                                    placeholder={[
                                        t("name_surname_placeholder"),
                                    ]}
                                    label="Tam isim"
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.fullname}
                                    className="outline-none text-sm py-3 border-b border-gray-300 focus:border-black "
                                />
                            </div>
                            <div className="flex flex-col w-full py-2">
                                <label className="text-base text-gray-600 flex justify-start items-center gap-4">
                                    <p>Telefon</p>
                                    {formik.touched.phone &&
                                        formik.errors.phone && (
                                            <p className="text-red-500 text-sm">
                                                {formik.errors.phone}
                                            </p>
                                        )}
                                </label>

                                <InputMask
                                    id="phone"
                                    name="phone"
                                    mask="0 999 999 99 99"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    {(inputProps) => (
                                        <input
                                            {...inputProps}
                                            type="text"
                                            className="outline-none text-sm py-3 border-b border-gray-300 focus:border-black"
                                            placeholder="0 536 ___ __ __"
                                        />
                                    )}
                                </InputMask>
                            </div>
                            <div className="flex flex-col w-full py-2">
                                <label className="text-base text-gray-600 flex justify-start items-center gap-4">
                                    <p>Email</p>
                                    {formik.touched.mail &&
                                        formik.errors.mail && (
                                            <p className="text-red-500 text-sm">
                                                {formik.errors.mail}
                                            </p>
                                        )}
                                </label>
                                <input
                                    id="mail"
                                    name="mail"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.mail}
                                    className="outline-none text-sm py-3 border-b border-gray-300 focus:border-black "
                                />
                            </div>
                            <div className="flex flex-col w-full py-2">
                                <label className="text-base text-gray-600 flex justify-start items-center gap-4">
                                    <p>Mesajınız</p>
                                    {formik.touched.message &&
                                        formik.errors.message && (
                                            <p className="text-red-500 text-sm">
                                                {formik.errors.message}
                                            </p>
                                        )}
                                </label>
                                <textarea
                                    className="outline-none text-sm py-3 border-b border-gray-300 focus:border-black "
                                    id="message"
                                    name="message"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                />
                            </div>
                            <button
                                className=" bg-black w-24 h-12 text-white flex justify-center items-center hover:bg-gray-700 hover:duration-300"
                                type="submit"
                            >
                                {buttonLoading ? (
                                    <ReactLoading
                                        className="flex justify-center items-center"
                                        type="bubbles"
                                        color="white"
                                    />
                                ) : (
                                    <p className="text-white">Gönder</p>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-full h-full mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12033.135683390994!2d28.9736617!3d41.0627861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac65770be1161%3A0x84747b6f90fabe46!2sSocialthinks!5e0!3m2!1str!2str!4v1720527006269!5m2!1str!2str"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="harita"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;
