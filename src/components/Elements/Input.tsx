import React, { useState } from 'react'
import './elements.css';
const Input = (props:any) => {
  const [value, setValue] = useState<string>();
  const { label, type="text", onChange = () => {} } = props
  const handleChange = (e:any) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }
  return (
    <div className="input-box">
      <p className="label">{label && label}</p>
      <input value={value} type={type} onChange={handleChange}/>
    </div>
  )
}

export default Input;