import { ADD_TO_CART } from "./carttype"

const initstate = {
    cartdata:[]
}

const cartreducer = (state = initstate,{type,payload}) => {
// console.log(type,payload)
    switch(type){
        case ADD_TO_CART:
            return {
                ...state,
                cartdata:[...state.cartdata,payload]
            }
        
        default:
            return state
    }

}

export default cartreducer
