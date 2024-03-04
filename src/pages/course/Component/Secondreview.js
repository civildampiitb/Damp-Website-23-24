import React, { useState } from "react";
import style from "../course.module.css";
import SecondCourse from "../../../data/CourseReviewData/Second";
import CourseReview from "./CourseReview";

const Secondreview = () => {
  const uniqueCourseCodes = new Set();

  const [selectedCourse, setSelectedCourse] = useState(
    SecondCourse[0]["Course Code"]
  );

  const handleCourseCodeClick = (courseCode) => {
    setSelectedCourse(courseCode);
  };

  const getCourseData = () => {
    const allCourses = [...SecondCourse];
    return allCourses.filter(
      (review) => review["Course Code"] === selectedCourse
    );
  };

  return (
    <div className={style.course_main}>
      <div className={style.courseName}>
        <div className={style.course_data}>
          <p>Second Year course</p>
          <div className={style.course_line}></div>
          <ul>
            {SecondCourse.map((review, index) => {
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
        <CourseReview selectedCourse={getCourseData()} />
      </div>
    </div>
  );
};

export default Secondreview;
