import React from 'react'

const FormInput = ({labelText,value,onChange}) => {

  return (
    <label htmlFor="">
    {labelText}:
    <input
      value={value || ""}
      onChange={onChange}
    />
  </label>
  )
}

export default FormInput