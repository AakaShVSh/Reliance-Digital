import React from 'react'
import "./contactus.css"
const Contactus = () => {
  return (
    <div className='contactus-main'>
      <div className="mainbanner">
        <div className="msg">
         <h2>WE LOVE TO HELP YOU</h2>
        <h3>REACH US AT:</h3>
         </div>
        </div>
        <div className="contactby">
          <div className="call">
            <div className="imgcall">Call Us</div>
            <h2 className='h3color'>For E-Commerce Related Queries</h2>
            <p className='pcolor'>1800 889 1055</p>
            <p className='h3color'>(9:30 AM to 7:30, 365 days)</p>
            <h2 className='h3color'>For Store Related Queries</h2>
            <p className='pcolor'>1800-889-1044</p>
            <p  className='h3color'>(9:00 AM to 9:00PM, 365 days)</p>
          </div>
          <div className="call">
          <div className="imgcall">Whatsapp</div>
            <h2 className='h3color'>Send Hi to +91 7977912345</h2>
            
            <p className='pcolor'>or</p>
            <h2 className='h3color'>Click here to start</h2>
           </div>
          <div className="call">
          <div className="imgcall">Email us</div>
          <p className='pcolor'>You can send email on the following email</p>
            <h2 className='h3color'>reliancedigital@ril.com</h2>
            <h2 className='h3color'>digitalreliance01@ril.com</h2>
            <h2 className='h3color'>rd01@ril.com</h2>
             </div>
        </div>
    </div>
  )
}

export default Contactus
