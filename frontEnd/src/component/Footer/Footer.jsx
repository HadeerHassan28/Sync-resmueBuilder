import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white "
      style={{
        backgroundColor: "#21081a",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <MDBContainer></MDBContainer>

      <div
        className="text-center pt-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <p className="text-white">Hadeer Hassan</p>
      </div>
    </MDBFooter>
  );
}
