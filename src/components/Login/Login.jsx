import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router";
const Login = () => {
  const [show, setshow] = useState(false);
  const [number,setnumber] = useState("");
  const [take,settake] = useState("")
  const navigate = useNavigate()
  return (
    <div className="login">
      <img
        className="loginimg"
        src="https://www.reliancedigital.in/medias/Umbrella-Offer-Desktop-Banner-1200x500-19-04-2022-01.jpg?context=bWFzdGVyfGltYWdlc3wxNTg5MTU2fGltYWdlL2pwZWd8aW1hZ2VzL2hlMy9oODEvOTgxNjE2NTE4NzYxNC5qcGd8OTBhMTdmZGFjOTU5Yjg4MDk1NDNkYjFhODA0MjA4YzgyODc5M2M2ZTBkNTQwZDk5NTI0ODRiMmU3NzRiYTlhMQ"
        alt=""
      />
      <div className="logintext">
        <div className="loginbtndetail">
          <h3>Login / Register</h3>
          <hr />
          {show === false ? (
            <div className="inputlogin">
              <input onChange={(e) => setnumber(e.target.value)} className="logininput" type="number" />
              <button disabled={number===10} onClick={() => {
                if(number.length===10){
                  setshow(!show)
                }
                else{
                  alert("Mobile Number Should have 10 Numbers")
                }
                }} className="loginbtn">
                PROCEED
              </button>
            </div>
          ) : (
            <div className="otplogin">
              <h4>OTP Verification</h4>
              <p className="loginbtnup">Please enter the OTP sent to your mobile number {number}</p>
              <div className="putotp">
                <input onChange={(e) => settake(e.target.value)} type="number" placeholder="Enter OTP*" className="inputputlogin" name="" id="" />
                <p className="resend">Resend OTP</p>
                <button onClick={() => {
                      if(take==="878909"){
                        navigate("/",{replace:true})
                      }
                }} className="submitlogin">LOGIN</button>
                <button onClick={() => setshow(!show)} className="backlogin">
                  BACK
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
