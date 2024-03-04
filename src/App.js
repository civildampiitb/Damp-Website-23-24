import "./App.css";
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/AboutIndex";
import Faaqs from "./pages/faaqs/Faaqs";
import Explore from "./pages/explore/Explore";
import Navbar from "./pages/component/Navbar";
import HigherStudies from "./pages/HigherStudies/HigherStudies";
import Footer from "./pages/component/footer";
import InternationExposer from "./pages/InternationExposer/InternationExposer";
import Departmentreview from "./pages/course/Component/Departmentreview";
import Minorreview from "./pages/course/Component/Minorreview";
import Secondreview from "./pages/course/Component/Secondreview";
import Thirdreview from "./pages/course/Component/Thirdreview";
import Fourthreview from "./pages/course/Component/Fourthreview";
import Institutereview from "./pages/course/Component/Institutereview";
import Btpdd from "./pages/Btp&dd/Btpdd";
import RishiBlog from "./pages/InternationExposer/Component/RishiBlog";
import AdityaBlog from "./pages/InternationExposer/Component/AdityaBlog";
import ShashankBlog from "./pages/InternationExposer/Component/ShashankBlog";
import AlakhBlog from "./pages/Btp&dd/Component/AlakhBlog";
import IshitaBlog from "./pages/Btp&dd/Component/IshitaBlog";
import PintuBlog from "./pages/Btp&dd/Component/PintuBlog";
import PraptiBlog from "./pages/Btp&dd/Component/PraptiBlog";
import Mobile from "./pages/Mobile/Mobile";

function App() {
  const [isMobile, setisMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/coursereview" element={<Course />} /> */}
            <Route
              exact
              path="/departmentreview"
              element={<Departmentreview />}
            />
            <Route exact path="/minorreview" element={<Minorreview />} />
            <Route exact path="/secondreview" element={<Secondreview />} />
            <Route exact path="/thirdreview" element={<Thirdreview />} />
            <Route exact path="/fourthreview" element={<Fourthreview />} />
            <Route
              exact
              path="/institutereview"
              element={<Institutereview />}
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/faaqs" element={<Faaqs />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/higherstudies" element={<HigherStudies />} />
            <Route exact path="/btr&dd" element={<Btpdd />} />
            <Route exact path="/praptiblog" element={<PraptiBlog />} />
            <Route exact path="/alakhblog" element={<AlakhBlog />} />
            <Route exact path="/ishitablog" element={<IshitaBlog />} />
            <Route exact path="/pintublog" element={<PintuBlog />} />
            <Route exact path="/adityablog" element={<AdityaBlog />} />
            <Route exact path="/shashankblog" element={<ShashankBlog />} />
            <Route exact path="/rishiblog" element={<RishiBlog />} />
            <Route
              exact
              path="/international-exposure"
              element={<InternationExposer />}
            />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
