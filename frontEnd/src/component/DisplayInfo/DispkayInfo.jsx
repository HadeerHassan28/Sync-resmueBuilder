import React, { useEffect, useContext } from "react";
import styles from "./DispkayInfo.module.css";
import axios from "axios";
import { formDataContext } from "../../Context/FormDataContext";
const DisplayInfo = () => {
  const { formData } = useContext(formDataContext);
  return (
    <>
      <div className="col-md-12 mx-2 mt-0">
        <br />
        {/* personal */}
        <div className="row ">
          <div className="col-md-12">
            <h1>
              <b>{formData.name}</b>
            </h1>
            <p className="lead email ">
              <strong>Email:</strong> {formData.email}
            </p>
            <p className="lead">
              <strong>Contact:</strong> (+20){formData.phone}
            </p>
            <p className="lead">
              <strong>Address:</strong> {formData.address}
            </p>
            <p className="lead">
              <strong>LinkedIn:</strong> {formData.linkedin}
            </p>
            <p className="lead">
              <strong>Github:</strong> {formData.github}
            </p>
          </div>
        </div>
        <hr />
        {/* skills */}
        <div className="col-md-12 mx-auto bg-light">
          <h3>
            <b>Skills</b>
          </h3>
        </div>
        <div className="col-md-12 row mx-auto">
          <p className="lead"> {formData.skills}</p>
        </div>
        {/* Experience */}
        <div className="col-md-12 mx-auto bg-light">
          <h3>
            <b>Experience</b>
          </h3>
        </div>
        <div className="col-md-12 mx-auto">
          <p className="lead">
            <b>
              {formData.exp1_org}, {formData.exp1_pos}
            </b>{" "}
            ({formData.exp1_dur})
          </p>
          <p className="mt-0">{formData.exp1_desc}</p>
        </div>
        <div className="col-md-12 mx-auto">
          <p className="lead">
            <b>
              {formData.exp2_org}, {formData.exp2_pos}
            </b>{" "}
            ({formData.exp2_dur})
          </p>
          <p className="mt-0">{formData.exp2_desc}</p>
        </div>
        <div className="col-md-12 mx-auto bg-light">
          <h3>
            <b>Projects</b>
          </h3>
        </div>
        <div className="col-md-12 mx-auto">
          <p className="lead">
            <b>{formData.proj1_title}</b>({formData.proj1_link})
          </p>
          <p className="mt-0">{formData.proj1_desc}</p>
        </div>
        <div className="col-md-12 mx-auto">
          <p className="lead">
            <b>{formData.proj2_title}</b> ({formData.proj2_link})
          </p>
          <p className="mt-0">{formData.proj2_desc}</p>
        </div>
        <div className="col-md-12 mx-auto bg-light">
          <h3>
            <b>Education</b>
          </h3>
        </div>
        <div className="col-md-12 mx-auto">
          <p className="lead">
            <b>{formData.edu1_school}</b> ({formData.edu1_qualification},
            {formData.edu1_year})
          </p>
          <p className="mt-0">{formData.edu1_desc}</p>
        </div>
        <div className="col-md-12 mx-auto">
          <p className="lead">
            <b>{formData.edu2_school}</b> ({formData.edu2_qualification},
            {formData.edu2_year})
          </p>
          <p className="mt-0">{formData.edu2_desc}</p>
        </div>
        <div className="col-md-12 mx-auto bg-light">
          <h3>
            <b>Extra-Curriculars/Activities</b>
          </h3>
        </div>
        <div className="col-md-12 mx-auto">
          <ul>
            <li>
              <p className="lead">
                <b>Languages: </b>
                {formData.extra_1}{" "}
              </p>
            </li>
            <li>
              <p className="lead">
                <b>Hobbies: </b>
                {formData.extra_2}{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DisplayInfo;
