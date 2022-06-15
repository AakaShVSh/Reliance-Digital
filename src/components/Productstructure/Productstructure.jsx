import React from 'react'
import "./productstructure.css"
const Productstructure = ({product}) => {
  return (
    <div>
      
      <div className="bestmobile">
        {product.map((e) => <div key={e.id} className="bestmobilebox">
          <img className="bestmobileimg" src={e.img} alt="" />
          <p className="onhovertitle">{e.title}</p>
          <h5 className="bestphonedis">Offer Price:<>₹{e.price}.00</></h5>
          <p className="bestphonediscount">M.R.P: ₹{e.Dprice}.00</p>
          <button className="bestphonebutton">Buy Now</button>
        </div>)}
      </div>
      
    </div>
  )
}

export default Productstructure
