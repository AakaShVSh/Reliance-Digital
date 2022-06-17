import React, { useState } from "react";
import Productstructure from "../Productstructure/Productstructure";
import "./filter.css";
import "../Productstructure/productstructure.css";
import { useDispatch } from "react-redux";
import sortaction from "../../refactors/sortaction";

const Filter = ({ data }) => {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div className="motomain">
        <div className="motofilter">
          <h3>FILTER</h3>
          <hr className="hr" />
          <h3>Price</h3>
          <div className="price">
            <input placeholder="1" className="rangenumber" type="number" /> to{" "}
            <input placeholder="100000" className="rangenumber" type="number" />{" "}
            <button className="button">GO</button>
          </div>
          <hr />
          <div>
            <h3>SEARCH :</h3>
            <input
              onChange={(e) => setsearch(e.target.value)}
              type="text"
              className="searchinput"
            />
          </div>

          <hr />
          <h3>Availability</h3>
          <div>
            <div className="avai">
              <input type="checkbox" name="" id="" />
              <p className="upfilter">Exclude out of Stock</p>
            </div>
            
          </div>
          <h3>Brands</h3>
          <div>
            <div className="avai">
              <input type="checkbox" name="" id="" />
              <p className="upfilter">Samsung</p>
            </div>
            <div className="avai">
              <input type="checkbox" name="" id="" />
              <p className="upfilter">LG</p>
            </div>
            <div className="avai">
              <input type="checkbox" name="" id="" />
              <p className="upfilter">BPL</p>
            </div>
            <div className="avai">
              <input type="checkbox" name="" id="" />
              <p className="upfilter">IRobot</p>
            </div>
          </div>
        </div>
        <div className="motoproduct">
          <div className="filter">
            <select
              onChange={(e) => {
                dispatch(sortaction(e.target.value));
              }}
              id="select"
            >
              <option value="">Sort by</option>
              <option value="title">sort by title</option>
              <option value="Dprice">sort by discount price</option>
              <option value="price">sort by price</option>
              <option value="id">Relevance</option>
            </select>
          </div>
          <hr />
          <div className="product">
            <Productstructure search={search} product={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
