import React from 'react'
import { useSelector } from 'react-redux'
import Filter from '../filterstructure/Filter'
const Roboticvacuum = () => {
  const {data} = useSelector((state) => state.roboticvaccum)
  
  return (
    <div>
      <Filter data={data}/>
    </div>
  )
}

export default Roboticvacuum
