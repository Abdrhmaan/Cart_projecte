
import { useState } from 'react'
import React from 'react'
const initialState = {
    Zaaad : false,
    EVC : false,
    Sahal : false
}



const Payment = () => {

    function handlsubmit(e){
        e.preventDefault()
      const yes =   window.confirm('are you confirm to send mony' ,'tankes' )
     
      if(yes){
        alert("go")
      } else {
        alert("back")

      }





    }
    const [paymentmeyhood , setpaymentemethpd] = useState(initialState)
  return (
    <div>
        <h2 className='h'>Py with </h2>
        <div className='pymentcard'>

            <div className= {`payment-card ${paymentmeyhood.Zaaad && "selected" } ` }

            onClick={()=> setpaymentemethpd({...initialState , Zaaad : true})}>
                <h3>Zaaad service</h3>
            </div>

            <div className={`payment-card ${paymentmeyhood.EVC && "selected"}`}
             onClick={()=> setpaymentemethpd({...initialState , EVC : true})}>
                <h3>EVC service</h3>
            </div>
            <div className={`payment-card ${paymentmeyhood.Sahal && "selected"}`}
            onClick={()=> setpaymentemethpd({...initialState , Sahal : true})}>
                <h3>Sahal service</h3>
            </div>
        </div>
        
       
       <form onSubmit={handlsubmit}>
        <input type='text' className='form-control'/> 
        <button className='btn-xaan '>Submit</button>
       </form>
        
        
        
        </div>
  )
}

export default Payment