import React, { useState } from "react";
import style from "../course.module.css";
import SecondCourse from "../../../data/CourseReviewData/Second";
import ThirdCourse from "../../../data/CourseReviewData/Third";
import FourthCourse from "../../../data/CourseReviewData/Fourth";
import InstituteElective from "../../../data/CourseReviewData/I";
import DepartmentElective from "../../../data/CourseReviewData/D";
import MinorCourse from "../../../data/CourseReviewData/M"
import CourseReview from "./CourseReview";
import OneCourseDefaultData from "../../../data/CourseReviewData/Default";

const Coursename = () => {
  const uniqueCourseCodes = new Set();

  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCourseCodeClick = (courseCode) => {
    setSelectedCourse(courseCode);
  };

  const getCourseData = () => {
    const allCourses = [
      ...SecondCourse,
      ...ThirdCourse,
      ...FourthCourse,
      ...InstituteElective,
      ...DepartmentElective,
      ...MinorCourse
    ];
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
        <div className={style.course_data}>
          <p>Fourth course</p>
          <div className={style.course_line}></div>
          <ul>
            {FourthCourse.map((review, index) => {
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
        <div className={style.course_data}>
          <p>Department Elective</p>
          <div className={style.course_line}></div>
          <ul>
            {DepartmentElective.map((review, index) => {
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
        <div className={style.course_data}>
          <p>Institute Elective</p>
          <div className={style.course_line}></div>
          <ul>
            {InstituteElective.map((review, index) => {
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
        <div className={style.course_data}>
          <p>Minor Courses</p>
          <div className={style.course_line}></div>
          <ul>
            {MinorCourse.map((review, index) => {
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

export default Coursename;
