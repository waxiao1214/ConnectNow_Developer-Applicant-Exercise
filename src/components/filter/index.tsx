import React, { useState } from 'react'
import { FilterContent } from './index.styled';
import Input from '../Elements/Input';
import Select from '../Elements/Select';
import type { IFilter } from '../../interface/types';
const options = [
  {value: "Release Date"},
  {value: "Score"},
  {value: "Name"}
]
const initFilter = {
  name: '',
  score: 0,
  sort: "Release Date"
}
const Filter = (props:any) => {
  const { getFilterObj } = props;
  const [filterObj, setFilterObj] = useState<IFilter>(initFilter);
  // seeting filter option
  const handleChange = (name:string, value:any) => {
    setFilterObj({...filterObj, [name]: value})
    getFilterObj({ ...filterObj, [name]: value })
  }
// render component
  return (
    <FilterContent className="panel">
      <p className="title">Filter Results</p>
      <div className="form-control">
        <Input label="Name (contains)" onChange={(e:any) => handleChange("name", e)}/>
      </div>
      <div className="form-group">
        <div className="form-control">
          <Input label="Minimum Score" type="number" onChange={(e:any) => handleChange("score", e)}/>
        </div>
        <div className="form-control">
          <Select label="Order By" options={options} onChange={(value:any) => handleChange("sort", value)}/>
        </div>
        <div className="form-control button">
          <button>Clear</button>
        </div>
      </div>
    </FilterContent>
  )
}

export default Filter;