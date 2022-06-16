import React from 'react'
import { useSelector } from 'react-redux'
import Filter from '../filterstructure/Filter'
const Inchtv = () => {
  const {data} = useSelector((state) => state.tv)
 
  return (
    <div>
      <Filter data={data}/>
    </div>
  )
}

export default Inchtv
