import React from "react";
import Input from "../theme/Input";
import Label from "../theme/Label";
const FormInput = ({ labelText, value, onChange }) => {
  return (
      <Label htmlFor="">
        {labelText}:
        <Input value={value || ""} onChange={onChange} />
      </Label>
  );
};

export default FormInput;
