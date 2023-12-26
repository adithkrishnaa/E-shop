import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addtoCart} = useContext(ShopContext);

  return (
    <div className='productdispaly'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list"> 
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdispaly-img">
                <img className='prouctdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdispaly-right-prices">
                <div className="productdisplay-right-prices-old">₹{product.old_price}</div>
                <div className="productdisplay-right-prices-new">₹{product.new_price}</div>
            </div>
            <div className="productdispaly-right-description">
            Our classic cotton t-shirt, the perfect blend of comfort and style. Made from 100% premium cotton, this t-shirt offers a soft and breathable feel, making it an ideal choice for everyday wear.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div> 
                </div>
            </div>
            <button onClick={()=>{addtoCart(product.id)}}>Add to cart</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women ,T-shirt, Crop top </p>
            <p className='productdisplay-right-category'><span>Tags :</span>Morden , Tranding  </p>
        </div>
    </div>
  )
}

export default ProductDisplay