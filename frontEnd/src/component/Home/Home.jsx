import React from "react";
import styles from "./Home.module.css";
import home from "../../assets/images/home.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("resume");
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 border">
            <img src={home} alt="Home Picture" className="imgHome mx-4" />
          </div>
          <div className="col-md-6 d-flex align-self-center flex-column px-5">
            <h1 className="title">Start Build Your Resmue</h1>
            <button onClick={handleSubmit} type="button" className="btn">
              Let's Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
