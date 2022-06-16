import React from "react";
import { useSelector } from "react-redux";
import Filter from "../../filterstructure/Filter";
const Moto = () => {
  const {data} = useSelector((state) => state.moto)
  
  return (
   <div>
    <Filter data={data}/>
   </div>
  );
};

export default Moto;
