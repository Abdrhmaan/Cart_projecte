

export const initialState = {
    products :  [],
    total : 0
}


export const Shopreducer =(state,action)=> {

    const {type , payload} = action

 switch (type) {
    case "ADD_TO_CART":
        return {
            ...state,
            products : payload.products
        }
        case "remove":
            return {
                ...state,
                products : payload.products
            }
            case "total":
                return {
                    ...state,
                    total : payload
                }
        
        break;
 
    default: return state
     
 }



}