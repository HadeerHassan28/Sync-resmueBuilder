import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-nav">
        <div className="ms-5">
          <Link className="navbar-brand " to="">
            <img src={logo} alt="Logo" width="100" height="60" />
          </Link>
        </div>
        <div className="container-fluid">
          <Link className="navbar-brand text" to="">
            <strong> Resume Builder</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  <span className="text"> Home</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
