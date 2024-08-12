import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Header2 from "../components/header/Header2";

import Footer from "../components/footer/Footer";

function DetailLayout() {
    return (
        <>
            <Header2 />
            <Outlet />
            <Footer />
        </>
    );
}

export default DetailLayout;
