import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [exploreDropdownVisible, setExploreDropdownVisible] = useState(false);
  const [importantDropdownVisible, setImportantDropdownVisible] =
    useState(false);
  const [courseReviewDropdownVisible, setCourseReviewDropdownVisible] =
    useState(false);

  const exploreDropdownTimerRef = useRef(null);
  const importantDropdownTimerRef = useRef(null);
  const courseReviewDropdownTimerRef = useRef(null);

  const showExploreDropdown = () => {
    clearTimeout(exploreDropdownTimerRef.current);
    setExploreDropdownVisible(true);
  };

  const hideExploreDropdown = () => {
    exploreDropdownTimerRef.current = setTimeout(() => {
      setExploreDropdownVisible(false);
    }, 150);
  };

  const showImportantDropdown = () => {
    clearTimeout(importantDropdownTimerRef.current);
    setImportantDropdownVisible(true);
  };

  const hideImportantDropdown = () => {
    importantDropdownTimerRef.current = setTimeout(() => {
      setImportantDropdownVisible(false);
    }, 150);
  };

  const showCourseReviewDropdown = () => {
    clearTimeout(courseReviewDropdownTimerRef.current);
    setCourseReviewDropdownVisible(true);
  };

  const hideCourseReviewDropdown = () => {
    courseReviewDropdownTimerRef.current = setTimeout(() => {
      setCourseReviewDropdownVisible(false);
    }, 150);
  };

  const handleCircularNavigation = () => {
    window.open("https://www.iitb.ac.in/newacadhome/circular.jsp", "_blank");
  };

  const handleHolidayNavigation = () => {
    window.open(
      "https://www.iitb.ac.in/en/about-iit-bombay/iit-bombay-holidays-list",
      "_blank"
    );
  };

  const handleTimeTableNavigation = () => {
    window.open("https://www.iitb.ac.in/newacadhome/timetable.jsp", "_blank");
  };

  const handleAcademicCalendarNavigation = () => {
    window.open(
      "https://www.iitb.ac.in/newacadhome/toacadcalender.jsp",
      "_blank"
    );
  };

  const handleDepartmentWebsiteNavigation = () => {
    window.open("https://www.civil.iitb.ac.in/", "_blank");
  };

  const handleUgCurriculumNavigation = () => {
    window.open("https://www.civil.iitb.ac.in/GENERAL/ugdd.pdf", "_blank");
  };

  const handleCourseBookletNavigation = () => {
    window.open(
      "https://drive.google.com/file/d/1IoJ3qLBpsWafaLuci5hGq8d1vbmYfvwP/view",
      "_blank"
    );
  };

  const handleUgBookletNavigation = () => {
    window.open(
      "https://gymkhana.iitb.ac.in/~ugacademics/UGInfo.pdf",
      "_blank"
    );
  };

  const handleIntershipBlogNavigatoin = () => {
    window.open(
      "https://drive.google.com/file/d/12LDC5v3Uw6CI_KmcCErC1kt3yHRm7iGJ/view",
      "_blank"
    );
  };

  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <div
        className="nav-dropdown"
        onMouseEnter={showCourseReviewDropdown}
        onMouseLeave={hideCourseReviewDropdown}
      >
        <p>
          Course Review
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </p>
        <div
          className={`dropdown-content ${
            courseReviewDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <a href="https://civildampiitb.github.io/#/secondreview">
            Second Year Courses
          </a>
          <a href="https://civildampiitb.github.io/#/thirdreview">
            Third Year Courses
          </a>
          <a href="https://civildampiitb.github.io/#/fourthreview">
            Fourth Year Courses
          </a>
          <a href="https://civildampiitb.github.io/#/departmentreview">
            Department Review
          </a>
          <a href="https://civildampiitb.github.io/#/institutereview">
            Institute Review
          </a>
          <a href="https://civildampiitb.github.io/#/minorreview">
            Minor Review
          </a>
        </div>
      </div>

      <div
        className="nav-dropdown"
        onMouseEnter={showExploreDropdown}
        onMouseLeave={hideExploreDropdown}
      >
        <p>
          Explore
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </p>
        <div
          className={`dropdown-content ${
            exploreDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <a href="https://civildampiitb.github.io/#/btr&dd">BTP & DD</a>
          <a href="https://civildampiitb.github.io/#/international-exposure">
            International Exposure
          </a>
          <a href="https://civildampiitb.github.io/#/higherstudies">
            Higher Studies
          </a>
        </div>
      </div>

      <NavLink to="/faaqs">FAQs</NavLink>
      <div
        className="nav-dropdown"
        onMouseEnter={showImportantDropdown}
        onMouseLeave={hideImportantDropdown}
      >
        <p>
          Important Links
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </p>
        <div
          className={`dropdown-content important ${
            importantDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <p onClick={handleCircularNavigation}>Circulars</p>
          <p onClick={handleHolidayNavigation}>List of Holidays</p>
          <p onClick={handleTimeTableNavigation}>Time Tables</p>
          <p onClick={handleAcademicCalendarNavigation}>Academic Calendar</p>
          <p onClick={handleDepartmentWebsiteNavigation}>Department Website</p>
          <p onClick={handleUgCurriculumNavigation}>UG Curriculum</p>
          <p onClick={handleCourseBookletNavigation}>Course Info Booklet</p>
          <p onClick={handleUgBookletNavigation}>UG Info Booklet</p>
          <p onClick={handleIntershipBlogNavigatoin}>
            Internship Preparation Blog
          </p>
        </div>
      </div>
      <NavLink to="/about">About us</NavLink>
    </nav>
  );
};

export default Navbar;
