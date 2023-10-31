import React, { useState, useContext } from "react";
import styles from "./Exepericnes.module.css";
import { formDataContext } from "../../Context/FormDataContext";
const Exepericnes = () => {
  const { formData, setFormData } = useContext(formDataContext);
  const [showSecExp, setshowSecExp] = useState(false);
  const addSecExpFiled = (e) => {
    e.preventDefault();
    setshowSecExp(true);
  };
  // exp1_org: "",
  //   exp1_pos: "",
  //   exp1_desc: "",
  //   exp1_dur: "",
  //////////////////////
  //   exp2_org: "",
  //   exp2_pos: "",
  //   exp2_desc: "",
  //   exp2_dur: "",

  return (
    <>
      <form className="row g-3 imgHome">
        <h4 className="title mb-1">Experience</h4>
        {/* exp1_pos */}
        <div className="col-md-6 mt-1">
          <label htmlFor="exp1_pos" className="form-label">
            Postion
          </label>
          <input
            type="text"
            className="form-control"
            id="exp1_pos"
            name="exp1_pos"
            value={formData.exp1_pos}
            onChange={(e) => {
              setFormData({ ...formData, exp1_pos: e.target.value });
            }}
          />
        </div>
        {/* exp1_org */}
        <div className="col-md-6 mt-1">
          <label htmlFor="exp1_org" className="form-label">
            Organization
          </label>
          <input
            type="text"
            className="form-control"
            id="exp1_org"
            name="exp1_org"
            value={formData.exp1_org}
            onChange={(e) => {
              setFormData({ ...formData, exp1_org: e.target.value });
            }}
          />
        </div>

        {/* exp1_desc */}
        <div className="col-12 ">
          <label htmlFor="exp1_desc" className="form-label">
            Describtion
          </label>
          <input
            type="text"
            className="form-control"
            id="exp1_desc"
            value={formData.exp1_desc}
            onChange={(e) => {
              setFormData({ ...formData, exp1_desc: e.target.value });
            }}
          />
        </div>
        {/* exp1_dur */}
        <div className="col-12">
          <label htmlFor="exp1_dur" className="form-label">
            Duration
          </label>
          <input
            type="text"
            className="form-control"
            id="exp1_dur"
            name="exp1_dur"
            placeholder="Enter the duration as 1 year / 2 months"
            value={formData.exp1_dur}
            onChange={(e) => {
              setFormData({ ...formData, exp1_dur: e.target.value });
            }}
          />
        </div>

        {/* To add Second */}
        <div className="d-flex justify-content-center ">
          <button onClick={addSecExpFiled} className="btn px-4 py-1">
            {" "}
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </div>

        {showSecExp ? (
          <>
            {/* 2nd Experience */}
            {/* exp2_po */}
            <h6 className="title mt-1">
              <u>2nd Experience</u>
            </h6>
            <div className="col-md-6 mt-1">
              <label htmlFor="exp2_pos" className="form-label">
                Postion
              </label>
              <input
                type="text"
                className="form-control"
                id="exp2_pos"
                name="exp2_pos"
                value={formData.exp2_pos}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    exp2_pos: e.target.value,
                  });
                }}
              />
            </div>
            {/* exp2_org */}
            <div className="col-md-6 mt-1">
              <label htmlFor="exp2_org" className="form-label">
                Organization
              </label>
              <input
                type="text"
                className="form-control"
                id="exp2_org"
                name="exp2_org"
                value={formData.exp2_org}
                onChange={(e) => {
                  setFormData({ ...formData, exp2_org: e.target.value });
                }}
              />
            </div>

            {/* exp2_desc */}
            <div className="col-12">
              <label htmlFor="edu2_exp2_desc" className="form-label">
                Describtion
              </label>
              <input
                type="text"
                className="form-control"
                id="edu2_exp2_desc"
                value={formData.edu2_exp2_desc}
                onChange={(e) => {
                  setFormData({ ...formData, edu2_exp2_desc: e.target.value });
                }}
              />
            </div>
            {/* exp2_dur */}
            <div className="col-12">
              <label htmlFor="exp2_dur" className="form-label">
                Duration
              </label>
              <input
                type="text"
                className="form-control"
                id="exp2_dur"
                name="exp2_dur"
                value={formData.exp2_dur}
                placeholder="Enter the duration as 1 year / 2 months"
                onChange={(e) => {
                  setFormData({ ...formData, exp2_dur: e.target.value });
                }}
              />
            </div>
          </>
        ) : null}
      </form>
    </>
  );
};

export default Exepericnes;
