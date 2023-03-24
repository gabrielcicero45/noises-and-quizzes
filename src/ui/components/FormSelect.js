import React from "react";
import Label from "../styles/Label";
import Select from "../styles/Select";

const FormSelect = ({ labelText, value, onChange }) => {
  return (
    <Label htmlFor="selectedType">
      {labelText}:
      <Select name="selectedType" value={value} onChange={onChange}>
        <option value="">----</option>
        <option value={"string"}>String</option>
        <option value={"number"}>Number</option>
        <option value={"boolean"}>Boolean</option>
      </Select>
    </Label>
  );
};

export default FormSelect;
