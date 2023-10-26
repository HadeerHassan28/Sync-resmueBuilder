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
  const [page, setpage] = useState(0);
  const FormTitle = [
    "Personal Details",
    "Education",
    "Exepericnes",
    "Projects",
    "Extra",
  ];
  const pageDisplay = () => {
    switch (page) {
      case 0: return <PersonalData /> 
      case 1: return <Education/>
      case 2: return <Exepericnes /> 
case 3: return      
    }
  }
  
  };
  return (
    <>
      <h2>test</h2>
    </>
  );
};

export default AddInfo;
