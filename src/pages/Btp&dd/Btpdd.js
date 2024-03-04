import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./btp.module.css";
import Fake from "../../assets/fake.jpg";
import PintuImage from "../../assets/pintu.jpg"


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
      <p className={style.btpdd_main_heading}>B.Tech Project</p>
      <div className={style.btpdd_main_a}>
        <div onClick={handlePraptiBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={Fake} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>Prapti Sao(Transport)</p>
        </div>
        <div onClick={handleAlakhBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={Fake} alt="photoof" />
          </div>
          <p
            className={style.btpdd_details_text}
            style={{ fontSize: "0.8rem" }}
          >
            Alakh Agarwal(AI/ML)<p>Swasti Pahuja(AI/ML)</p>
          </p>
        </div>
      </div>

      <div className={style.btpdd_main_a}>
        <div onClick={handleIshitaBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={Fake} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>
            Ishit Garg(Transport AI/ML)
          </p>
        </div>
        <div onClick={handlePintuBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={PintuImage} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>Pintu Kumar Saw(Geotech)</p>
        </div>
      </div>
    </div>
  );
};

export default Btpdd;
