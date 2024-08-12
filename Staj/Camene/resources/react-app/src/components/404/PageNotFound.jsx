import React from "react";
import pageNotFound from "../../../../../public/images/404.png";
import "./404.css";

const PageNotFound = () => {
    return (
        <>

            <div className="cont-404">
                <img src={pageNotFound} alt="404" className="cont-margin" />
              
            </div>
        </>
    );
};

export default PageNotFound;
