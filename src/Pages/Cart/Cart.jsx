import React, { useContext } from 'react'
import { Products } from '../../Products'
import { ShopContext } from '../../Context/Shop-Context'
import CartItem from './CartItem'
import "./Cart.css"
import { useNavigate } from 'react-router'


const Cart = () => {

    const {cartItems, getTotalCartAmount} = useContext(ShopContext)

    const TotalAmount = getTotalCartAmount()

    const navigate = useNavigate()

  return (
    <div className='cart'>
        
        <div> 
          <h1>Your Cart Items</h1> 
          </div>
        <div className='cart'>
          {Products.map((saman)=>{
            if (cartItems[saman.id] !== 0) {
                  return(<CartItem data={saman}/>)
            }
          })}
        </div>

        {TotalAmount > 0 ? 
        <div className='checkout'>

          <p><b className='subTotal'>SubTotal: Rs. {TotalAmount}</b></p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
        : <div className='EmptyCart'> <h1>Your cart is Empty ! </h1>
        <div className='checkout'>

        <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
        </div>} 
        
        


                          
    </div>
  )
}

export default Cart