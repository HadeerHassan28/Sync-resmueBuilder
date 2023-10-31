import React from "react";
import styles from "./Resume.module.css";
import AddInfo from "../AddInfo/AddInfo";
import DisplayInfo from "../DisplayInfo/DispkayInfo";

const Resume = () => {
  return (
    <>
      <div className="container mt-3 mb-5">
        <div className="row ">
          <div className="col-md-6 border ">
            <div className="   ">
              <AddInfo />
            </div>
          </div>
          <div className="col-md-6 border">
            <div className="  ">
              <DisplayInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
