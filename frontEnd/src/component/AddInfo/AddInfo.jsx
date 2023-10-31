import React, { useContext } from "react";
import styles from "./AddInfo.module.css";
import Education from "../Education/Education";
import Exepericnes from "../Exepericnes/Exepericnes";
import PersonalData from "../PersonalData/PersonalData";
import Projects from "../Projects/Projects";
import Extra from "../Extra/Extra";
import { formDataContext } from "../../Context/FormDataContext";

const AddInfo = () => {
  const { generatePDF } = useContext(formDataContext);
  const Pdf = async () => {
    await generatePDF();
  };
  return (
    <>
      <div className="container">
        <PersonalData />
        <hr className="hr" />
        <Exepericnes />
        <hr />
        <Education />
        <hr />
        <Projects />
        <hr />
        <Extra />
        <button onClick={Pdf} className="btn my-5">
          Download
        </button>
      </div>
    </>
  );
};

export default AddInfo;
