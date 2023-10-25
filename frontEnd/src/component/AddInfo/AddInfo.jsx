import React, { useState, useEffect } from "react";
import styles from "./AddInfo.module.css";
import axios from "axios";
const AddInfo = () => {
  const [htmlContent, sethtmlContent] = useState("");

  //!get:

  //!Post:
  // const fetchHtmlContect = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:5001/template.js");
  //     console.log(response);
  //     if (response.status === 200) sethtmlContent(response.data);
  //     else console.log("Error Fetching");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //!post:
  const generatePDF = () => {
    try {
      const response = axios.post("/generatePdf", {
        htmlContent: htmlContent,
      });
      if (response.data === 200) console.log("done");
      else console.log("error");
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   fetchHtmlContect();
  // }, []);
  return (
    <>
      <h2>test</h2>
    </>
  );
};

export default AddInfo;
