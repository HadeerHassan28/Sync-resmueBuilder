import React, { useContext } from "react";
import styles from "./AddInfo.module.css";
import Education from "../Education/Education";
import Exepericnes from "../Exepericnes/Exepericnes";
import PersonalData from "../PersonalData/PersonalData";
import Projects from "../Projects/Projects";
import Extra from "../Extra/Extra";
import { formDataContext } from "../../Context/FormDataContext";

const AddInfo = () => {
  const { generatePDF, formData, setFormData } = useContext(formDataContext);
  const Pdf = async () => {
    const htmlContent = document.querySelector(".container").innerHTML;
    await generatePDF(formData, htmlContent);
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <form className="row g-3 imgHome mt-3" onSubmit={hanldeSubmit}>
          <PersonalData />
          <hr className="hr" />
          <Exepericnes />
          <hr />
          <Projects />
          <hr />
          <Education />
          <hr />
          <Extra />
          <button onClick={Pdf} className="btn my-5">
            Download
          </button>
        </form>
      </div>
    </>
  );
};

export default AddInfo;
