import React, { useEffect, useState } from 'react';
import useOnclickOutside from "react-cool-onclickoutside";

const Select = (props:any) => {
  const { onChange = () => {}, label } = props;
  const { options = []} = props
  const [value, setValue] = useState<string>("Release Date");
  const [show, setShow] = useState<boolean>(false);
  const ref = useOnclickOutside(() => {
    setShow(false);
  })

  const handleChange = (e:any) => {
    setShow(true);
  }

  useEffect(() => {
    onChange(value);
  }, [value])

  return (
    <>
      <p className="label">{label && label}</p>
      <div style={{display: 'flex', width: "100%"}}>
        <div className="sort">
          <p>&#8593;</p>
        </div>
        <div className="select">
          <div className="select-value" onClick={handleChange}>
            {value}
          </div>
          {show && 
            <div ref={ref} className="absolute">
              {options.map((option:any, index:number) => 
                <div className="select-input" key={index} onClick={() => {
                  setValue(option.value);
                  setShow(false)
                }}>
                  {option.value}
                </div>
              )}
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Select;