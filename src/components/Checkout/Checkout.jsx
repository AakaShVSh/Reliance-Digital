import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./checkout.css";
const Checkout = () => {
  const [show,setshow] = useState(false)
  const [otp,setotp] = useState("");
  const navigate = useNavigate()
  return (
    <div className="checkoutpage">
      {show===false? <h1 className="headcheck">Shipping</h1> : <h1 className="headcheck">Payment</h1>}
      {show ===false? (<div className="checkoutpagedetail">
      <div className="flexcheckb">
          <h3>Name : </h3>
          <input className="chemethod" type="text" />
        </div>
        <div className="flexcheckb">
          <h3>Phone : </h3>
          <input className="chemethod" type="text" />
        </div>
        <div className="flexcheckb">
          <h3>Address : </h3>
          <input className="chemethod" type="text" />
        </div> <div className="flexcheckb">
          <h3>Pincode : </h3>
          <input className="chemethod" type="text" />
        </div>
        <div className="paymentmethod">
          <h2>Payment Method</h2>
          <h3><input type="checkbox" /> Paytm</h3>
          <h3><input type="checkbox" /> Gpay</h3>
          <h3><input type="checkbox" /> Phonepay</h3>
          <h3><input type="checkbox" /> bank</h3>
        </div>
        <button  onClick={() => setshow(!show)} className="checkprocced">Procced</button>
      </div>):(<div className="checkoutpagedetail">
        <h3 className="otpvari">OTP Verification</h3>
        <input type="text" onChange={(e) => setotp(e.target.value)} placeholder="ENTER OTP*" className="otpcheckoutpage" />
        <div className="btncheckoutpage">
          <button onClick={() => {
            if(otp==="888888"){
              navigate("/",{replace:true})
            }
          }} className="chackpagepay">Pay Amount</button>
          <button onClick={() => setshow(!show)} className="checkpageback">Back</button>
        </div>
      </div>)}
    </div>
  );
};

export default Checkout;
