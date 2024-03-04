import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./internation.module.css";
import RishiImage from "../../assets/rishi.png";
import ShaskImage from "../../assets/shas.jpg";

const InternationExposer = () => {
  const Navigate = useNavigate();

  const handleRishiBlog = () => {
    Navigate("/rishiblog");
  };

  const handleShashankBlog = () => {
    Navigate("/shashankblog");
  };

  return (
    <>
      <p className={`${style.international_main_heading} text-center`}>
        International Exposure
      </p>
      <div className={style.international_main}>
        <div onClick={handleRishiBlog} className={style.international_details}>
          <div className={style.international_details_img}>
            <img src={RishiImage} alt="rishiphoto" />
          </div>
          <p className={style.international_details_text}>Rishi Kumar </p>
          <p>Research Intern</p>
        </div>
        <div
          onClick={handleShashankBlog}
          className={style.international_details}
        >
          <div className={style.international_details_img}>
            <img src={ShaskImage} alt="rishiphoto" />
          </div>
          <p className={style.international_details_text}> Shashank Nyol</p>
          <p>EERI</p>
        </div>
      </div>
    </>
  );
};

export default InternationExposer;
