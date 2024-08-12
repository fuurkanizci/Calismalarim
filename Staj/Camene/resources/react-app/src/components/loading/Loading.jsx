import React from "react";
import { BeatLoader } from "react-spinners";
import "./loading.css";
const Loading = () => {
    return (
        <>
            <div className="text-white loader-container body-no-scroll z-[9999999999999999]">
                <BeatLoader color="#29503d" size={40} margin="auto" />
            </div>
        </>
    );
};

export default Loading;
