import React from "react";
import styles from "./NotFound.module.css";
import notFound from "../../assets/images/notFound.jpeg";
const NotFound = () => {
  return (
    <>
      <div className="container">
        <img src={notFound} alt="not found" />
      </div>
    </>
  );
};

export default NotFound;
