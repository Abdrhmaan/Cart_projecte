import React, { useEffect, useState } from 'react'
import Useshop from '../Contex'


const Product = ({product}) => {

  const [isincart , setincart] =  useState(false)



  


  const {addToCart,products,removeProduct

  } = Useshop()


  useEffect(() => {
		const isCart = products.filter((pro) => pro.id == product.id);

    
		// console.log("isCart", isCart.length);
		if (isCart.length > 0) {
			setincart(true);
		} else {
			setincart(false);
		}
	}, [products]);





  function handlecatrt(){



    if(isincart){
      removeProduct(product)
    }else {
      addToCart(product)
    }
  
  }

  return (
    <div className='card' style={{
        minHeight: "100%",
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${product.urlImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }}>
        
        <div className='info'>
            <span className='name'>{product.name}</span>
            <span className='proce'>{product.price}</span>
        </div>
        <button  className={`btn ${isincart ? "btn-secondary" : "btn-primary"}`}
         onClick={handlecatrt}>  {isincart ? '-' : '+'}  </button>
    </div>
   
  )
}

export default Product