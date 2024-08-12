import axiosInstance from "../utils/axiosClient";

const getHomeSliders = async () => {
    const result = await axiosInstance.get("home-sliders", {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": "tr",
        },
    });
    return result;
};
const getGalleries = async () => {
    const result = await axiosInstance.get("get-galleries", {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": "tr",
        },
    });
    return result;
};
const getProject = async () => {
    const result = await axiosInstance.get("all-project", {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": "tr",
        },
    });
    return result;
};
const getProjectDetail = async () => {
    const result = await axiosInstance.get("all-project", {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": "tr",
        },
    });
    return result;
};
const contactForm = async (values) => {
    const result = await axiosInstance.post("/contact", values);
    return result;
};
const getPlans = async () => {
    const result = await axiosInstance.get("/all-plans");
    return result;
};

const exportFunction = { getHomeSliders, getGalleries, contactForm, getPlans, getProject, getProjectDetail };
export default exportFunction;
