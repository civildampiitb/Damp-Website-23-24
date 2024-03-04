import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./btp.module.css";
import stylee from "../InternationExposer/internation.module.css";

import Fake from "../../assets/fake.jpg";
import PintuImage from "../../assets/pintu.jpg";

const Btpdd = () => {
  const Navigate = useNavigate();

  const handlePraptiBlog = () => {
    Navigate("/praptiblog");
  };

  const handleAlakhBlog = () => {
    Navigate("/alakhblog");
  };

  const handleIshitaBlog = () => {
    Navigate("/ishitablog");
  };

  const handlePintuBlog = () => {
    Navigate("/pintublog");
  };

  return (
    <div className={style.btpdd_main}>
      <p className={`${stylee.international_main_heading} text-center`}>
        B.Tech Project
      </p>
      <div className={stylee.international_main}>
        <div onClick={handlePraptiBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={Fake} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>Prapti Sao(Transport)</p>
        </div>
        <div onClick={handlePintuBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={PintuImage} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>Pintu Kumar Saw(Geotech)</p>
        </div>
      </div>

      <div className={style.btpdd_main_a}>
        {/* <div onClick={handleIshitaBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={Fake} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>
            Ishit Garg(Transport AI/ML)
          </p>
        </div> */}
        {/* <div onClick={handlePintuBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={PintuImage} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>Pintu Kumar Saw(Geotech)</p>
        </div> */}
      </div>
    </div>
  );
};

export default Btpdd;
