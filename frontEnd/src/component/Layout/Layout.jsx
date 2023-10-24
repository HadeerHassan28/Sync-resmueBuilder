import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <div className="container py-5">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
