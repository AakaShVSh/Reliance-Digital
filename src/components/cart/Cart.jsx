import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { Link } from "react-router-dom";
import { addprice, discount, removefromcart } from "../../refactors/cart/cartAction";
import {Counter} from "../counter/counter";
const Cart = () => {
  const { cartdata ,totalprice} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [aplicable,setaplicable] = useState("")
  const [countcon,setcountcon] = useState(0)
  console.log(cartdata);
  return (
    <div className="cartdiv">
      <div className="item">
        <div className="itemcount">
          <h3>My Cart({cartdata.length} items)</h3>
          <h6>shiping to: 400103</h6>
        </div>
        <hr />
        {cartdata.map((e) => (
          <div id="conflex">
            <div className="mapitem">
              <div className="imgitem">
                <img className="itemimg" src={e.img} alt="" />
                <br />
                <Counter price={e.price}/>
              </div>
              <div className="itemtitle">
                <h3 className="top">{e.title}</h3>
                <h4 id="margin-top">485984989</h4>
              </div>
              <div className="itemprice">
                <h2 className="top">₹{e.price}</h2>
                <p id="discountcolor" className="topside">
                  M.R.P <span id="discount">₹{e.Dprice}</span> Inclusive of all
                  taxes
                </p>
                <p id="freeshiping" className="topside">
                  Free Shipping
                </p>
                <h5 id="delivery" className="top">
                  🚚Standard Delivery: 19 Jun (Sun)-20 Jun (Mon)
                </h5>
                <p id="des" className="top">
                  *Delivery assurance is subject to our delivery locations
                  staying open as per govt. regulations
                </p>
              </div>
            </div>
            <div className="removeitem">
              <button onClick={() => {dispatch(addprice(-e.price));dispatch(removefromcart(e.title))}} className="btn1r">Remove</button>
              <button className="btn1r">Move to wishlist</button>
            </div>
          </div>
        ))}
      </div>
      <div className="checkitem">
        <button className="checkbtn1"><Link className="cartlink" to="/checkout">CHECKOUT</Link></button>
        <div className="cartcheck">
          <div className="cartcheckcoupon">
            <input
               onChange={(e) => setaplicable(e.target.value)}
              className="checkcoupon"
              type="text"
              placeholder="Coupon Code"
            />
            <button onClick={() => {
              
              if(aplicable=="masai30"&&countcon===0){
                const sendprice = totalprice*(1-(30/100))
                dispatch(discount(Math.floor(sendprice)))
                setcountcon(1)
              }
              else{
                alert("not a valid Coupon Code")
              }
            }} className="applycoupon">APPLY</button>
            <hr className="hrcheck" />
            <div className="pricedetail">
              <h3>PRICE DETAILS</h3>
              <div className="totalpricecart">
                <div className="price2item">
                  <p className="price2color">Price({cartdata.length} items)</p><h4 className="checkcartprice">₹{totalprice}</h4>
                </div>
                <div className="deliveryitem">
                  <p className="price2color">Delivery Charges</p>
                  <h3 className="h4freedelivery">FREE</h3>
                </div>
                <hr className="hrcheck2"/>
                <div className="amttotalcart">
                  
                    <h4 className="amt">AMOUNT PAYABLE</h4>
                    <h3 className="amtcart">₹{totalprice}</h3>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// Dprice: 9999
// count: 1
// id: 1
// img: "https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849905-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDYxM3xpbWFnZS9qcGVnfGltYWdlcy9oNDAvaDAzLzk4MzQxMDY1MTk1ODIuanBnfDg0MDRiOWQxNGE5Zjk1OThkNTQ1NTJmYTU2ZTJmMzgyYTQ1OTQwYmZlZWYyNjliYTllMjEzNzBkZmZkNjVlYzE"
// price: 8999
// title: "
