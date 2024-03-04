import React from "react";
import style from "./about.module.css";
import FrontCard from "./component/FrontCard";

import Contact from "./component/Contact";
import AboutInfo from "./component/AboutInfo";
import { PastDAMPCsComponent } from "./component/PastDAMPCs";

const AboutIndex = () => {
  return (
    <div className={style.About_main}>
      <div>
        <AboutInfo />
      </div>
      <div>
        <FrontCard />
      </div>
      <PastDAMPCsComponent />
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default AboutIndex;
