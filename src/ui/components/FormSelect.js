import React from 'react'

const FormSelect = ({labelText,value, onChange}) => {
  
  return (
    <label htmlFor="selectedType">
    {labelText}:
    <select
      name="selectedType"
      value={value}
      onChange={onChange}
    >
      <option value={"string"}>String</option>
      <option value={"number"}>Number</option>
      <option value={"boolean"}>Boolean</option>
    </select>
  </label>
  )
}

export default FormSelect