import React from "react";

const FormSelect = ({ labelText, value, onChange }) => {
  return (
    <div>
      <label htmlFor="selectedType">
        {labelText}:
        <select name="selectedType" value={value} onChange={onChange}>
          <option value="">----</option>
          <option value={"string"}>String</option>
          <option value={"number"}>Number</option>
          <option value={"boolean"}>Boolean</option>
        </select>
      </label>
    </div>
  );
};

export default FormSelect;
