import React from 'react'
import { Products } from '../../Products'
import Product from './Product'
import "./shop.css"


const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Deepayy Tech Shop</h1>
        </div>

        <div className='products'>

            {Products.map((saman)=> <Product data={saman}/> )}
        </div>
        


    </div>
  )
}

export default Shop