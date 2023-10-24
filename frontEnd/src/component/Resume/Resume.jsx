import React from "react";
import styles from "./Resume.module.css";
import AddInfo from "../AddInfo/AddInfo";
import DisplayInfo from "../DisplayInfo/DispkayInfo";

const Resume = () => {
  return (
    <>
      <div className="container">
        <div className="row imgHome">
          <div className="col-md-6 border">
            <AddInfo />
          </div>
          <div className="col-md-6 border">
            <DisplayInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
