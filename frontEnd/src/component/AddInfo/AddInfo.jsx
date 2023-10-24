import React from "react";
import styles from "./AddInfo.module.css";
const AddInfo = () => {
  return (
    <>
      <div className="container">
        <form>
          <div>
            <h4 className="mt-2">Add Personal Info</h4>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Full Name"
              className="form-control mb-2"
              // value={ }
              id="name"
              name="name"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddInfo;
