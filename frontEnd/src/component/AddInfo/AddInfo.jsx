import React, { useState, useEffect } from "react";
import styles from "./AddInfo.module.css";
import Education from "../Education/Education";
import Exepericnes from "../Exepericnes/Exepericnes";
import PersonalData from "../PersonalData/PersonalData";
import Projects from "../Projects/Projects";
import Extra from "../Extra/Extra";

const AddInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_desc: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
  });
  // const [page, setpage] = useState(0);
  // const FormTitle = [
  //   "Personal Details",
  //   "Education",
  //   "Exepericnes",
  //   "Projects",
  //   "Extra",
  // ];
  // const pageDisplay = () => {
  //   if (page === 0)
  //     return <PersonalData formData={formData} setFormData={setFormData} />;
  //   else if (page === 1)
  //     return <Education formData={formData} setFormData={setFormData} />;
  //   else if (page === 2)
  //     return <Exepericnes formData={formData} setFormData={setFormData} />;
  //   else if (page === 3)
  //     return <Projects formData={formData} setFormData={setFormData} />;
  //   else return <Extra formData={formData} setFormData={setFormData} />;
  // };

  return (
    <>
      {/* <div className="container ">
        <h2 className="h2 title ">{FormTitle[page]}</h2>
        <div className="px-5">{pageDisplay()}</div>
        <div className="mt-2">
          <button
            onClick={() => {
              setpage(page - 1);
            }}
            disabled={page === 0}
            className="btn p-2"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button
            onClick={() => {
              setpage(page + 1);
            }}
            disabled={page === 4}
            className="btn p-2"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div> */}
      <div className="container">
        <PersonalData formData={formData} setFormData={setFormData} />
        <hr className="hr" />
        <Education formData={formData} setFormData={setFormData} />
        <hr />
        <Exepericnes formData={formData} setFormData={setFormData} />
        <hr />
        <Projects formData={formData} setFormData={setFormData} />
        <hr />
        <Extra formData={formData} setFormData={setFormData} />
      </div>
    </>
  );
};

export default AddInfo;
