import React from 'react'
import './Fotter.css'
import logo from '../Assets/logo.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Fotter = () => {
  return (
    <div className='fotter'>
        <div className="fotter-logo">
            <img src={logo} alt=" "/> 
            <p>Shopper</p>
        </div>
        <ul className='fotter-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-socials-icon">
            <div className="footer-icons-container">
              <FaInstagramSquare />
            </div>
            <div className="footer-icons-container">
              <FaTwitter />
            </div>
            <div className="footer-icons-container">
             <FaWhatsapp />
            </div>
        </div>
        <div className="footer-copyrights">
            <hr />
            <p>Copyright @2023 -All Rights Reserved.</p>
        </div>    

    </div>
  )
}

export default Fotter