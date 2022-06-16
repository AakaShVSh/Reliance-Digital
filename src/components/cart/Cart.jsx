import React from "react";
import { useSelector } from "react-redux";
import "./cart.css";
const Cart = () => {
  const { cartdata } = useSelector((state) => state.cart);
  console.log(cartdata);
  return (
    <div className="cartdiv">
      <div className="item">
        <div className="itemcount">
          <h3>My Cart(1 items)</h3>
          <h6>shiping to: 400103</h6>
          
        </div>
        <hr />
        {cartdata.map((e) => (
          <div id="conflex">
          <div className="mapitem">
            <div className="imgitem">
              <img className="itemimg" src={e.img} alt="" />
              <br />
              <button>+</button>
              {e.count}
              <button>-</button>
            </div>
            <div className="itemtitle">
              <h3 className="top">{e.title}</h3>
              <h4 id="margin-top">485984989</h4>
            </div>
            <div className="itemprice">
              <h2  className="top">₹{e.price}</h2>
              <p id="discountcolor"  className="topside">
                M.R.P <span id="discount">₹{e.Dprice}</span> Inclusive of all taxes
              </p>
              <p id="freeshiping" className="topside">Free Shipping</p>
              <h5 id="delivery" className="top">🚚Standard Delivery: 19 Jun (Sun)-20 Jun (Mon)</h5>
              <p id="des" className="top">*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</p>
            </div>
          </div>
          <div className="removeitem">
            <button className="btn1r">Remove</button>
            <button className="btn1r">Move to wishlist</button>
          </div>
         </div>
        ))}
       
      
      </div> 
      <div className="checkitem">
        <button>CHECKOUT</button>
        <div className="cartcheck">
          
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
