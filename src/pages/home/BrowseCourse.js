import React from "react";
import { useNavigate} from "react-router-dom";
import style from "./home.module.css";

const BrowseCourse = () => {
  const navigate = useNavigate();

  const handleCoreCourse = () => {
    navigate("/secondreview");
  };

  const handleDepartment = () => {
    navigate("/departmentreview");
  };

  const handleInstitutecourse = () => {
    navigate("/institutereview");
  };

  const handleMinorCourse = () => {
    navigate("/minorreview");
  };
  return (
    <div className={style.browse_course}>
      <div className={style.browse_course_text}>
        <p>Browse Courses...</p>
      </div>
      <div className={style.browse_course_container}>
        <div onClick={handleCoreCourse} className={style.browse_course_detail}>
          <div className={style.browse_course_detail_background}>
            <p>CC</p>
          </div>
          <p className={style.browse_course_text_a}>Core Course</p>
        </div>
        <div onClick={handleDepartment} className={style.browse_course_detail}>
          <div className={style.browse_course_detail_background}>
            <p>DE</p>
          </div>
          <p
            className={style.browse_course_text_a}
            style={{ fontSize: "1.3rem" }}
          >
            Department Elective
          </p>
        </div>
        <div
          onClick={handleInstitutecourse}
          className={style.browse_course_detail}
        >
          <div className={style.browse_course_detail_background}>
            <p>IE</p>
          </div>
          <p className={style.browse_course_text_a}>Institute Elective</p>
        </div>
        <div onClick={handleMinorCourse} className={style.browse_course_detail}>
          <div className={style.browse_course_detail_background}>
            <p>M</p>
          </div>
          <p className={style.browse_course_text_a}>Minor</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseCourse;
