import React, { createContext, useState } from "react";
import axios from "axios";
export const formDataContext = createContext();

const FormDataContextProvider = ({ children }) => {
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
  //!Post to generate PDF:
  const generatePDF = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5001/generatePdf", {
        formData: formData,
      });
      console.log(response);
      if (response.status === 200) {
        // localStorage.setItem("formData", JSON.stringify(formData));
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "generated-pdf.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        console.log("done");
      } else console.log("error");
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    formData: formData,
    setFormData: setFormData,
    generatePDF: generatePDF,
  };
  return (
    <formDataContext.Provider value={values}>
      {children}
    </formDataContext.Provider>
  );
};
export default FormDataContextProvider;
