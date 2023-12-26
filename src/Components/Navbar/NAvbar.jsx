import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { ShopContext} from '../../Context/ShopContext';

const NAvbar = () => {
  const [menu,setMenu] = useState("shop"); 
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="LOGO" />
        <p>Shop</p>
      </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/ '>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link to="/men">Men</Link>{menu==="men"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link to="/women">Women</Link>{menu==="women"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("kid")}}><Link to="/kid" >Kids</Link>{menu==="kid"?<hr />:<></>}</li>
        </ul>
        <div className='nav-icons'>
            <Link to='/login'><button>Login</button></Link>
            <div className='cart-icons'> 
              <Link to='/cart'> <FaShoppingCart /> </Link> 
            </div>
            <div className='nav-cart'>{getTotalCartItems()}</div>
        </div>
    </div> 
  )
}

export default NAvbar