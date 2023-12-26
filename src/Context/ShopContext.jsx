import React, { createContext,useState } from 'react';
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart =()=> {
    let cart ={};
    for(let index =0; index < all_product.length+1; index++)
    {
        cart[index] = 0;
    }  
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());
   
    const addtoCart = (itemid) => {
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1 }))

    }

    const removeFromCart = (itemid) => {
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo =all_product.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
    
        return totalAmount;
    }
    
    const getTotalCartItems =() => 
    {
        let totalItems = 0;
        for(const item in cartItems)
        {
        if(cartItems[item]>0)
        {
         totalItems += cartItems[item];
        }
        }
        return totalItems;
    } 

    
    const contextValue ={getTotalCartAmount,all_product,cartItems,addtoCart,removeFromCart,getTotalCartItems };

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>    
    )
    }

export default ShopContextProvider;