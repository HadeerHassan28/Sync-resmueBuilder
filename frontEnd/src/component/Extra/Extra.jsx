import React, { useContext } from "react";
import styles from "./Extra.module.css";
import { formDataContext } from "../../Context/FormDataContext";
const Extra = () => {
  // extra_1: "",
  //   extra_2: "",
  const { formData, setFormData } = useContext(formDataContext);
  return (
    <>
      <form className="row g-3 imgHome">
        <h4 className="title mb-1">Extra</h4>
        {/* extra_1 */}
        <div className="col-md-12">
          <label htmlFor="extra_1" className="form-label">
            Languages
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

        <div className="col-md-12 ">
          <label htmlFor="extra_2" className="form-label">
            Hobbies
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
      </form>
    </>
  );
};

export default Extra;
