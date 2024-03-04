import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";

const Explore = () => {
  const navigate = useNavigate();

  const handlebtrhistory = () => {
    navigate("/btr&dd");
  };

  const handleinternationsection = () => {
    navigate("/international-exposure");
  };

  const handleHigherStudies = () => {
    navigate("/higherstudies");
  };

  return (
    <div className={style.explore_main}>
      <div className={style.browse_course_text}>
        <p>Explore...</p>
      </div>
      <div className={style.explore_course_container}>
        <div
          onClick={handlebtrhistory}
          className={style.explore_course_container_detail}
        >
          <div className={style.explore_course_detail_background}>
            <p>BD</p>
          </div>
          <p className={style.explore_course_text_a}>BTP & DD</p>
        </div>
        <div
          onClick={handleinternationsection}
          className={style.explore_course_container_detail}
        >
          <div className={style.explore_course_detail_background}>
            <p>IE</p>
          </div>
          <p className={style.explore_course_text_a}>International Exposure</p>
        </div>
        <div
          onClick={handleHigherStudies}
          className={style.explore_course_container_detail}
        >
          <div className={style.explore_course_detail_background}>
            <p>HS</p>
          </div>
          <p className={style.explore_course_text_a}>Higher Studies</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
