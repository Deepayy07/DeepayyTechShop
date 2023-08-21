import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Shop-Context'
import "./Cart.css"

const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data
    const{cartItems, addToCart, removeFromCart, updateCartAmount} = useContext(ShopContext)

  return (
    <div className='cartItem'>
        <img src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>Rs. {price}</p>
                <div className='countHandler'>
                    <button onClick={()=> removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e)=> updateCartAmount(Number(e.target.value),id) }/>
                    <button onClick={()=> addToCart(id)}>+</button>
                </div>
        </div>
    </div>
  )
}

export default CartItem