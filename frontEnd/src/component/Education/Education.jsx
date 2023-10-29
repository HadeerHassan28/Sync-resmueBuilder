import React from "react";
import styles from "./Education.module.css";
const Education = ({ formData, setFormData }) => {
  // edu1_school: "",
  //   edu1_year: "",
  //   edu1_qualification: "",
  //   edu1_desc: "",
  //   edu2_school: "",
  //   edu2_year: "",
  //   edu2_qualification: "",
  //   edu2_desc: "",
  return (
    <>
      <form className="row g-3 imgHome">
        <h4 className="title mb-1">Education</h4>
        {/* edu1_school*/}
        <div className="col-md-6">
          <label for="edu1_school" className="form-label">
            Enter the University Name
          </label>
          <input
            type="text"
            className="form-control"
            id="edu1_school"
            name="edu1_school"
            value={formData.edu1_school}
            onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value });
            }}
          />
        </div>
        {/* edu1_year */}
        <div className="col-md-6">
          <label for="edu1_year" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="edu1_year"
            name="edu1_year"
            value={formData.edu1_year}
            onChange={(e) => {
              setFormData({ ...formData, edu1_year: e.target.value });
            }}
          />
        </div>
        {/* edu1_qualification */}
        <div className="col-md-6">
          <label for="edu1_qualification" className="form-label">
            Qualification
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
        {/* address */}
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label for="github" className="form-label">
            <i class="fa-brands fa-github me-2"></i>
            GitHub
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            name="github"
            placeholder="https://github/username"
            value={formData.github}
            onChange={(e) => {
              setFormData({ ...formData, github: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label for="linkedin" className="form-label">
            <i class="fa-brands fa-linkedin me-2"></i>
            LinkedIn
          </label>
          <input
            type="text"
            className="form-control"
            id="linkedin"
            name="linkedin"
            placeholder="https://linkedin/username"
            value={formData.linkedin}
            onChange={(e) => {
              setFormData({ ...formData, linkedin: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label for="skills" className="form-label">
            Skills
          </label>
          <input
            type="text"
            className="form-control"
            id="skills"
            name="skills"
            placeholder="Enter your Skills seperating by , "
            value={formData.skills}
            onChange={(e) => {
              setFormData({ ...formData, skills: e.target.value });
            }}
          />
        </div>
      </form>
    </>
  );
};

export default Education;
