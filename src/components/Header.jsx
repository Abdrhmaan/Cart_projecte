import React from 'react'
import { Link } from 'react-router-dom'

import Useshop from '../Contex'

const Header = () => {
  const {products

  } = Useshop()
  
  return (
    <div className='menu'>
       <Link to="/"  href='#' className='logo'>Logo</Link>

        <ul className='menu_item'>
            <Link to="/"  href='#'>Home</Link>
            <Link to="/about"  href='#'>About</Link>
            <Link to="/cart"  href='#'>Cart</Link>
        </ul>
      
        <Link to="/cart"  href='#' className='cart'><span>{products.length}</span></Link>
      
 
        </div>
  )
}

export default Header