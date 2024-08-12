import { Routes, Route } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Contact from "../pages/contact/Contact";
import AboutUs from "../pages/aboutUs/AboutUs";
import DetailLayout from "../layouts/DetailLayout";
import Project from "../pages/project/Project";
import Service from "../pages/services/Services";
import Location from "../pages/location/Location";
import Gallery from "../pages/gallery/Gallery";
import Plans from "../pages/plans/Plans2";
import Feature from "../pages/feature/Feature";
import Home from "../pages/Home/Home";
import ProjectDetail from "../pages/project/ProjectDetail";
function AppRoute() {
    return (
        <Routes>
            {/* <Route path="/" element={<RootLayout />}>
             
            </Route> */}
            <Route path="/" element={<DetailLayout />}>
                <Route path="aboutus" element={<AboutUs />} />
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="projects" element={<Project />} />
                <Route path="projects/:slug" element={<ProjectDetail />} />
                <Route path="location" element={<Location />} />
                <Route path="services" element={<Service />} />
                <Route path="plans" element={<Plans />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="features" element={<Feature />} />
            </Route>
        </Routes>
    );
}

export default AppRoute;
