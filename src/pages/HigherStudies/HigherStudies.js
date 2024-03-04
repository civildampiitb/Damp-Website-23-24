import React from "react";
import HigherPeople from "./Component/HigherPeople";
import HigherContent from "./Component/HigherContent";
import style from "./higherstudies.module.css";


const HigherStudies = () => {
  return (
    <div className={style.higherstudies_mainpage}>
      <div><HigherContent/></div>
      <div><HigherPeople/></div>
    </div>
  );
};

export default HigherStudies;
