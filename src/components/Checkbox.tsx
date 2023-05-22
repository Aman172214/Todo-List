import React from "react";

const Checkbox = ({ label }) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="radio" />
      <label className="form-check-label">{label}</label>
    </div>
  );
};

export default Checkbox;
