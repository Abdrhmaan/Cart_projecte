import React from 'react'
import products from '../data'
import Product from './Product'
const Profucts = () => {
    console.log(products)
  return (
    <div className='grid'>
        {
            products.map((item) => (
              <Product  product  ={item}/>
            ))
        }
     
     
        </div>
  )
}

export default Profucts