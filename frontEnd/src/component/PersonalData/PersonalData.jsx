import React, { useContext } from "react";
import styles from "./PersonalData.module.css";
import { formDataContext } from "../../Context/FormDataContext";
const PersonalData = () => {
  const { formData, setFormData } = useContext(formDataContext);
  //  name: "",
  //   email: "",
  //   phone: "",
  //   c: "",
  //   linkedin: "",
  //   github: "",
  //   skills: "",
  return (
    <>
      <form className="row g-3 imgHome mt-3">
        <h4 className="title mb-1">Personal Details</h4>
        {/* name */}
        <div className="col-md-4 ">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </div>
        {/* email */}
        <div className="col-md-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        {/* phone */}
        <div className="col-md-4">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
        </div>
        {/* address */}
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
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
          <label htmlFor="linkedin" className="htmlForm-label">
            <i className="fa-brands fa-linkedin me-2"></i>
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
          <label htmlFor="github" className="form-label">
            <i className="fa-brands fa-github me-2"></i>
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
          <label htmlFor="skills" className="form-label">
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

export default PersonalData;
