import React, { useState, useContext } from "react";
import styles from "./Education.module.css";
import { formDataContext } from "../../Context/FormDataContext";
const Education = () => {
  const { formData, setFormData } = useContext(formDataContext);
  const [showSecDregee, setshowSecDregee] = useState(false);
  const addSecDegreeFiled = (e) => {
    e.preventDefault();
    setshowSecDregee(true);
  };
  //   edu1_school: "",
  //   edu1_year: "",
  //   edu1_qualification: "",
  //   edu1_desc: "",
  //////////////////////
  //   edu2_school: "",
  //   edu2_year: "",
  //   edu2_qualification: "",
  //   edu2_desc: "",
  return (
    <>
      <h4 className="title mb-1">Education</h4>
      {/* edu1_qualification */}
      <div className="col-md-6 mt-1">
        <label htmlFor="edu1_qualification" className="form-label">
          Degree
        </label>
        <input
          type="text"
          className="form-control"
          id="edu1_qualification"
          name="edu1_qualification"
          value={formData.edu1_qualification}
          onChange={(e) => {
            setFormData({ ...formData, edu1_qualification: e.target.value });
          }}
        />
      </div>
      {/* edu1_year */}
      <div className="col-md-6 mt-1">
        <label htmlFor="edu1_year" className="form-label">
          Year
        </label>
        <input
          type="text"
          className="form-control"
          id="edu1_year"
          name="edu1_year"
          value={formData.edu1_year}
          onChange={(e) => {
            setFormData({ ...formData, edu1_year: e.target.value });
          }}
        />
      </div>

      {/* school */}
      <div className="col-12">
        <label htmlFor="edu1_school" className="form-label">
          University
        </label>
        <input
          type="text"
          className="form-control"
          id="edu1_school"
          value={formData.edu1_school}
          onChange={(e) => {
            setFormData({ ...formData, edu1_school: e.target.value });
          }}
        />
      </div>
      <div className="col-12">
        <label htmlFor="edu1_desc" className="form-label">
          Describtion
        </label>
        <input
          type="text"
          className="form-control"
          id="edu1_desc"
          name="edu1_desc"
          value={formData.edu1_desc}
          onChange={(e) => {
            setFormData({ ...formData, edu1_desc: e.target.value });
          }}
        />
      </div>

      {/* To add Second */}
      <div className="d-flex justify-content-center ">
        <button onClick={addSecDegreeFiled} className="btn px-4 py-1">
          {" "}
          <i className="fa-solid fa-circle-plus"></i>
        </button>
      </div>

      {showSecDregee ? (
        <>
          {/* 2nd Degree */}
          {/* edu2_qualification */}
          <h6 className="title">
            <u>2nd Degree</u>
          </h6>
          <div className="col-md-6">
            <label htmlFor="edu2_qualification" className="form-label">
              Degree
            </label>
            <input
              type="text"
              className="form-control"
              id="edu2_qualification"
              name="edu2_qualification"
              value={formData.edu2_qualification}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  edu2_qualification: e.target.value,
                });
              }}
            />
          </div>
          {/* edu2_year */}
          <div className="col-md-6">
            <label htmlFor="edu2_year" className="form-label">
              Year
            </label>
            <input
              type="text"
              className="form-control"
              id="edu2_year"
              name="edu2_year"
              value={formData.edu2_year}
              onChange={(e) => {
                setFormData({ ...formData, edu2_year: e.target.value });
              }}
            />
          </div>

          {/* school */}
          <div className="col-12">
            <label htmlFor="edu2_school" className="form-label">
              University
            </label>
            <input
              type="text"
              className="form-control"
              id="edu2_school"
              value={formData.edu2_school}
              onChange={(e) => {
                setFormData({ ...formData, edu2_school: e.target.value });
              }}
            />
          </div>
          <div className="col-12">
            <label htmlFor="edu2_desc" className="form-label">
              Describtion
            </label>
            <input
              type="text"
              className="form-control"
              id="edu2_desc"
              name="edu2_desc"
              value={formData.edu2_desc}
              onChange={(e) => {
                setFormData({ ...formData, edu2_desc: e.target.value });
              }}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Education;
