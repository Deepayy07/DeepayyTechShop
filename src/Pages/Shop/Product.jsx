import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";

const Product = (props) => {

        const {id, productName, price, productImage} = props.data

        const {addToCart, cartItems} = useContext(ShopContext)

        const cartItemsAmount = cartItems[id]

    return(
        <div className="product">
            <img src={productImage}/>
                <div className="description">
                    <p>     <b>{productName}</b>   </p>
                    <p>     Rs. {price}     </p>
                </div>

            <button className="addToCartButton" onClick={() => addToCart(id)}>
                Add to Cart {cartItemsAmount>0 && <> <b>({cartItemsAmount})</b> </>  }</button>
        </div>
    )
}

export default Product