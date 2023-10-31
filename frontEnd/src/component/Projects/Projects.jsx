import React, { useState, useContext } from "react";
import styles from "./Projects.module.css";
import { formDataContext } from "../../Context/FormDataContext";
const Projects = () => {
  const { formData, setFormData } = useContext(formDataContext);
  const [showSecProject, setshowSecProject] = useState(false);
  const addSecProjectFiled = (e) => {
    e.preventDefault();
    setshowSecProject(true);
  };
  //  proj1_title: "",
  //   proj1_link: "",
  //   proj1_desc: "",
  //////////////////////////
  //   proj2_title: "",
  //   proj2_link: "",
  //   proj2_desc: "",
  return (
    <>
      <h4 className="title mb-1">Projects</h4>
      {/* proj1_title */}
      <div className="col-md-6 mt-1">
        <label htmlFor="proj1_title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="proj1_title"
          name="proj1_title"
          value={formData.proj1_title}
          onChange={(e) => {
            setFormData({ ...formData, proj1_title: e.target.value });
          }}
        />
      </div>
      {/* proj1_link */}
      <div className="col-md-6 mt-1">
        <label htmlFor="proj1_link" className="form-label">
          Project Link
        </label>
        <input
          type="text"
          className="form-control"
          id="proj1_link"
          name="proj1_link"
          value={formData.proj1_link}
          onChange={(e) => {
            setFormData({ ...formData, proj1_link: e.target.value });
          }}
        />
      </div>

      {/* proj1_desc */}
      <div className="col-12">
        <label htmlFor="proj1_desc" className="form-label">
          Describtion
        </label>
        <input
          type="text"
          className="form-control"
          id="proj1_desc"
          value={formData.proj1_desc}
          onChange={(e) => {
            setFormData({ ...formData, proj1_desc: e.target.value });
          }}
        />
      </div>

      {/* To add Second */}
      <div className="d-flex justify-content-center ">
        <button onClick={addSecProjectFiled} className="btn px-4 py-1">
          {" "}
          <i className="fa-solid fa-circle-plus"></i>
        </button>
      </div>

      {showSecProject ? (
        <>
          {/* 2nd Project */}
          {/* proj2_title */}
          <h6 className="title mt-1">
            <u>2nd Project</u>
          </h6>
          <div className="col-md-6 mt-1">
            <label htmlFor="proj2_title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="proj2_title"
              name="proj2_title"
              value={formData.proj2_title}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  proj2_title: e.target.value,
                });
              }}
            />
          </div>
          {/* proj2_link */}
          <div className="col-md-6 mt-1">
            <label htmlFor="proj2_link" className="form-label">
              Project Link
            </label>
            <input
              type="text"
              className="form-control"
              id="proj2_link"
              name="proj2_link"
              value={formData.proj2_link}
              onChange={(e) => {
                setFormData({ ...formData, proj2_link: e.target.value });
              }}
            />
          </div>

          {/* proj2_desc */}
          <div className="col-12">
            <label htmlFor="proj2_desc" className="form-label">
              Describtion
            </label>
            <input
              type="text"
              className="form-control"
              id="proj2_desc"
              value={formData.proj2_desc}
              onChange={(e) => {
                setFormData({ ...formData, proj2_desc: e.target.value });
              }}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Projects;
