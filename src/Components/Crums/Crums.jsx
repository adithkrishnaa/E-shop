import React from 'react';
import './Crums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Crums = (props) => {
  const {product} = props;
  return (
    <div className='crums'>
        Home  <img src={arrow_icon} alt=" " /> Shop <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  ) 
}

export default Crums