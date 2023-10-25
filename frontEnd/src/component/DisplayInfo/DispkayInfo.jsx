import React, { useState, useEffect } from "react";
import styles from "./DispkayInfo.module.css";
import axios from "axios";
const DisplayInfo = () => {
  const [htmlContent, sethtmlContent] = useState("");

  //!get:
  const fetchHtmlContect = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5001/template.js");
      // console.log(response);
      if (response.status === 200) sethtmlContent(response.data);
      else console.log("Error Fetching");
    } catch (error) {
      console.log(error);
    }
  };
  //!Post:
  const generatePDF = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5001/generatePdf", {
        htmlContent: htmlContent,
      });
      console.log(response);
      if (response.status === 200) {
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
  useEffect(() => {
    fetchHtmlContect();
  }, []);
  return (
    <>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <button onClick={generatePDF} className="btn">
          Download
        </button>
      </div>
    </>
  );
};

export default DisplayInfo;
