import React, { createContext, useState } from "react";
import { Products } from "../Products";
import Product from "../Pages/Shop/Product";

export const ShopContext = createContext(null)
const getDefaultCart = () => {
    let cart = {}
    for( let i=1; i<= Products.length; i++){
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    const[cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart =(itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}) )
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]- 1}))
    }

    const updateCartAmount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
            for(const item in cartItems){
                if (cartItems[item] > 0){
                    let itemInfo = Products.find((Product) => Product.id === Number(item))
                    totalAmount += cartItems[item] * itemInfo.price
                }}
                    return totalAmount
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartAmount, getTotalCartAmount}
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )}
export default ShopContextProvider