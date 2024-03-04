import React, { useState } from "react";
import style from "../course.module.css";
import ThirdCourse from "../../../data/CourseReviewData/Third";
import CourseReview from "./CourseReview";
import OneCourseDefaultData from "../../../data/CourseReviewData/Default";

const Thirdreview = () => {
  const uniqueCourseCodes = new Set();

  const [selectedCourse, setSelectedCourse] = useState(ThirdCourse[0]["Course Code"]);

  const handleCourseCodeClick = (courseCode) => {
    setSelectedCourse(courseCode);
  };

  const getCourseData = () => {
    const allCourses = [
      ...ThirdCourse
    ];
    return allCourses.filter(
      (review) => review["Course Code"] === selectedCourse
    );
  };

  return (
    <div className={style.course_main}>
      <div className={style.courseName}>
        <div className={style.course_data}>
          <p>Third Year course</p>
          <div className={style.course_line}></div>
          <ul>
            {ThirdCourse.map((review, index) => {
              const courseCode = review["Course Code"];
              if (!uniqueCourseCodes.has(courseCode)) {
                uniqueCourseCodes.add(courseCode);
                return (
                  <li
                    key={index}
                    onClick={() => handleCourseCodeClick(courseCode)}
                  >
                    {courseCode}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
      
      <div className={style.review_container}>
        <CourseReview selectedCourse={getCourseData(OneCourseDefaultData)} />
      </div>
    </div>
  );
};

export default Thirdreview;
