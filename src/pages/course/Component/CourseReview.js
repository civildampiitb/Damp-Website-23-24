import React from "react";
import style from "../course.module.css";

const CourseReview = ({ selectedCourse }) => {
  return (
    <div className={style.courseReview_main}>
      <p className={style.coursereview_main_heading}>Course Review</p>
      {selectedCourse &&
        selectedCourse.map((entry, index) => (
          <>
          <div key={index} className={style.review_a}>
          <p className={style.review_course_code}>{entry["Course Code and Name: (for eg. CE324-Engineering Law)"]}</p>
            <p><strong>Name:</strong><span>{entry["Name:"]}</span></p>
            <p><strong>Expected Year of Graduation:</strong> <span>{entry["Expected Year of Graduation:"]}</span></p>
            <p><strong>Professor who took the course:</strong> <span>{entry["Professor who took the course:"]}</span></p>
            <p><strong>What motivated you to take this course?</strong> <span>{entry["What motivated you to take this the course? (for compulsory courses, write N/A)"]}</span></p>
            <p><strong>Are there any pre-requisites for this course?</strong> <span>{entry["Are there any pre-requisites for this course? (if none, please write N/A)"]}</span></p>
            <p ><strong>Course Content Overview:</strong> <span>{entry["Kindly give a brief overview of the course content based on the topics that were covered"]}</span></p>
            <p ><strong>Detailed Review:</strong> <span>{entry["Please give a detailed review of the course (adding general advice, your overall expereince and some tips would help greatly)"]}</span></p>
            <p><strong>Attendance Policy:</strong> <span>{entry["What was the attendance policy when you took the course?"]}</span></p>
            <p><strong>Were the slides provided by the instructor?: </strong> <span>{entry["Were the slides provided by the instructor?"]}</span></p>
            <p><strong>Semester:</strong> <span>{entry['Which semester did you take this course in? (for eg. "In my 6th semester")']}</span></p>
            <p><strong>Difficulty Rating:</strong> <span>{entry["What would you rate the course in terms of its difficulty? (on a scale of 10)"]}</span></p>
            <p><strong>References:</strong> <span>{entry["What references did you use for this course?"]}</span></p>
            <p><strong>Grading Statistics:</strong> <span>{entry["What was the grading statistics when you took the course?"]}</span></p>
          </div>
          <div style={{marginTop: "5%"}}></div>
          </>
        ))}
    </div>
  );
};

export default CourseReview;
