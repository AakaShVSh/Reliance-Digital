import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerdetail">
         <div className='footertitle'>
          <h2>Product Categories</h2>
          
            
            <Link to="/moto">Smartphones</Link>
            <h4>Laptops</h4>
            <h4>DSLR Camers</h4>
            <Link to="inchtv">Televisions</Link>
            <h4>Air Conditioners</h4>
            <h4>Refrigerators</h4>
            <Link to="/robotic">Kitchen Appliances</Link>
            <h4>Accessories</h4>
            <h4>Personal Care & Grooming</h4>
          <h2>FOLLO US</h2>
          
         </div>
      </div>
    </div>
  )
}

export default Footer
