import React from "react";

const FormInput = ({ labelText, value, onChange }) => {
  return (
    <div>
      <label htmlFor="">
        {labelText}:
        <input value={value || ""} onChange={onChange} />
      </label>
    </div>
  );
};

export default FormInput;
