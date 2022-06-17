import React from 'react'
import "./productstructure.css"
import { useDispatch } from 'react-redux'
import { addprice, addtocart, directbuy } from '../../refactors/cart/cartAction'
import { useNavigate } from 'react-router'
const Productstructure = ({product,search}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div>
      
      <div className="mobile">
        {product.filter((e) => e.title.includes(search)).map((e) => <div key={e.id} className="mobilebox">
          <img id="struc" className="mobileimg" src={e.img} alt="" />
          <p className="hovertitle">{e.title}</p>
          <h5 className="phonedis">Offer Price:<>₹{e.price}.00</></h5>
          <p className="phonediscount">M.R.P: ₹{e.Dprice}.00</p>
         <div className='btn1'> <button onClick={() => {dispatch(directbuy(e.price));
        navigate("/checkout",{replace:true})
        }} className="phonebutton">Buy Now</button>
          <button onClick={() => {dispatch(addtocart({...e,count:1}));dispatch(addprice(e.price))}} className="phonebutton">Add to Cart</button> 
      </div>  </div>)}
      </div>
      
    </div>
  )
}

export default Productstructure
