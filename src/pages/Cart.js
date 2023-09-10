import React from 'react'
import Useshop from '../Contex'
import CartProdcte from '../components/CartProdcte'

import Payment from '../components/Payment'
const Cart = () => {
  const {products,

  } = Useshop()

  if(products.length  == 0) return <h1>cart is empty</h1>
  return (
    <div className='cart-container '>
     
     <CartProdcte/>
     <Payment/>
      </div>
  )
}

export default Cart