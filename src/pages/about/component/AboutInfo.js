import React from "react";
import style from "../component/../about.module.css";

const AboutInfo = () => {
  return (
    <div className={style.AboutInfo_main}>
      <div className={style.AboutInfo_heading}>
        <p>About us</p>
      </div>
      <div className={style.AboutInfo_details}>
        <p>
          The Civil DAMP team consists of over 30 mentors who serve to provide
          active academic mentorship to sophomores in the department and bridge
          the student-faculty gap which is crucial for academic reforms and long
          term stability. While the primary perspective is ensuring academic
          mentorship, in spirit we are a team that’s here to look out for you
          and all your concerns. We’ve got a bunch of people here to ensure that
          everyone in the Civil department has an opportunity to be their best,
          and more importantly, realises these opportunities! This website aims
          to provide you a one-stop platform for most things academic within the
          department - course reviews to guide you before registration, project
          and international exposures offered by the department, and also tips
          to apply and prepare for higher education. We hope you make the most
          of it!
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
