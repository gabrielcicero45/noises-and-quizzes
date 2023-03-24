import React from "react";
import Input from "../styles/Input";
import Label from "../styles/Label";
const FormInput = ({ labelText, value, onChange }) => {
  return (
      <Label htmlFor="">
        {labelText}:
        <Input value={value || ""} onChange={onChange} />
      </Label>
  );
};

export default FormInput;
