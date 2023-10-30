import React, { useState } from "react";
import styles from "./Extra.module.css";
const Extra = ({ formData, setFormData }) => {
  // extra_1: "",
  //   extra_2: "",
  const [showExtra, setshowExtra] = useState(false);
  const addExtra = (e) => {
    e.preventDefault();
    setshowExtra(true);
  };
  return (
    <>
      <form className="row g-3 imgHome">
        <h4 className="title mb-1">Extra</h4>
        {/* extra_1 */}
        <div className="col-md-12">
          <label htmlFor="extra_1" className="form-label">
            Extra
          </label>
          <input
            type="text"
            className="form-control"
            id="extra_1"
            name="extra_1"
            value={formData.extra_1}
            onChange={(e) => {
              setFormData({ ...formData, extra_1: e.target.value });
            }}
          />
        </div>

        {/* To add Second */}
        <div className="d-flex justify-content-center ">
          <button onClick={addExtra} className="btn px-4 py-1">
            {" "}
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </div>

        {showExtra ? (
          <>
            {/* 2nd Extra */}
            {/* extra_2 */}
            <h6 className="title mt-1">
              <u>2nd Extra</u>
            </h6>
            <div className="col-md-12 mt-1">
              <label htmlFor="extra_2" className="form-label">
                Extra
              </label>
              <input
                type="text"
                className="form-control "
                id="extra_2"
                name="extra_2"
                value={formData.extra_2}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra_2: e.target.value,
                  });
                }}
              />
            </div>
          </>
        ) : null}
      </form>
    </>
  );
};

export default Extra;
