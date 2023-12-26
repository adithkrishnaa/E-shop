import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Crums from '../Components/Crums/Crums';
import ProductDisplay from '../Components/ProductDispaly/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
  const {all_product} = useContext(ShopContext); 
  const {productId} =  useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Crums product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product 