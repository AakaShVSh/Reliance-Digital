import React from 'react'
import "./productstructure.css"
import { useDispatch } from 'react-redux'
import { addtocart } from '../../refactors/cart/cartAction'
const Productstructure = ({product}) => {

  const dispatch = useDispatch()

  return (
    <div>
      
      <div className="mobile">
        {product.map((e) => <div key={e.id} className="mobilebox">
          <img id="struc" className="mobileimg" src={e.img} alt="" />
          <p className="hovertitle">{e.title}</p>
          <h5 className="phonedis">Offer Price:<>₹{e.price}.00</></h5>
          <p className="phonediscount">M.R.P: ₹{e.Dprice}.00</p>
         <div className='btn1'> <button className="phonebutton">Buy Now</button>
          <button onClick={() => dispatch(addtocart({...e,count:1}))} className="phonebutton">Add to Cart</button> 
      </div>  </div>)}
      </div>
      
    </div>
  )
}

export default Productstructure
