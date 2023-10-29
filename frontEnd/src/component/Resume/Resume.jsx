import React from "react";
import styles from "./Resume.module.css";
import AddInfo from "../AddInfo/AddInfo";
import DisplayInfo from "../DisplayInfo/DispkayInfo";

const Resume = () => {
  return (
    <>
      <div className=" d-flex flex-row justify-content-between m-5">
        <div className=" border ">
          <AddInfo />
        </div>

        <div className=" border ">
          <DisplayInfo />
        </div>
      </div>
    </>
  );
};

export default Resume;
