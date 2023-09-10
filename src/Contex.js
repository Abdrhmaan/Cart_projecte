import { createContext, useContext, useReducer } from "react";
import { Shopreducer, initialState } from "./Reducer";


const ShopContex = createContext(initialState)


export  const  ShopProvider = ({children})=> {






    const [state, dispatch] = useReducer(Shopreducer, initialState);



    const addToCart = (product)=> {


        const updatedpro = state.products.concat(product)
        total(updatedpro)

        dispatch({
            type : "ADD_TO_CART",
            payload : {
                products : updatedpro
            }
        })

    }
    const removeProduct = (product)=> {


        const updatedpro = state.products.filter((pro) =>  pro.id != product.id)
        total(updatedpro)

        dispatch({
            type : "ADD_TO_CART",
            payload : {
                products : updatedpro
            }
        })

    }
    const total = (products)=> {
        let total  = 0

        products.forEach(pro => {
            total += pro.price
            
        });

        

        dispatch({
            type : "total",
            payload : total
        })

    }

      const values = {
        products :  state.products,
        total :  state.total,
        addToCart,
        removeProduct
      }



    return    <ShopContex.Provider value={values}>
                 {children}
          </ShopContex.Provider>







}





const Useshop = () => {
  

    const contex  = useContext(ShopContex)

    if(contex === null){
        console.log("erroor")
    } else {
        return contex
    }
}

export default Useshop