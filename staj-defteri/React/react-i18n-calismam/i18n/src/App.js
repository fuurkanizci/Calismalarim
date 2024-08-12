
import "./App.css";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import AboutUs from "./pages/aboutus/AboutUs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
 
  return (
    <>
     
      
        <Header />
        <div style={{ minHeight: "calc(100vh - 120px)" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      
    </>
  );
}

export default App;
