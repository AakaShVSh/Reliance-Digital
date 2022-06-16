import React from 'react'
import Productstructure from "../Productstructure/Productstructure";
import "./filter.css"
import "../Productstructure/productstructure.css"

const Filter = ({data}) => {
  return (
    <div>
      <div className="motomain">
        <div className="motofilter">
            <h3>FILTER</h3>
            <hr className="hr" />
            <h3>Price</h3>
            <div className="price">
              <input placeholder="1" className="rangenumber" type="number" /> to <input placeholder="100000" className="rangenumber" type="number" /> <button className="button">GO</button>
            </div>
            <hr />
            <div>
              <h3>SEARCH :</h3>
              <input type="text" className="searchinput" />
            </div>
            <hr />
        </div>
        <div className="motoproduct">
           <div className="filter">
            <select  id="select">
              <option value="">Sort by</option>
              <option value="high">price(High to Low)</option>
              <option value="low">price(Low to High)</option>
              <option value="nameatoz">name(A-Z)</option>
              <option value="nameztoa">name(Z-A)</option>
            </select>
           </div>
           <hr />
           <div className="product">
            
             <Productstructure product={data}/>                
           </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
