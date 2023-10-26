import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column ">
        <NavBar />
        <div className="m-3 ">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
