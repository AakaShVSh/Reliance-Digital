import { ADD_PRICE, ADD_TO_CART, DISCOUNT, INDIVIDUAL, MORE_PRICE, REMOVE } from "./carttype"

const initstate = {
    cartdata:[],
    totalprice:0,
    directbuy:0
}

const cartreducer = (state = initstate,{type,payload}) => {
// console.log(type,payload)
    switch(type){
        case ADD_TO_CART:
            return {
                ...state,
                cartdata:[...state.cartdata,payload]
            }
        case ADD_PRICE:
            return{
                ...state,
                totalprice:state.totalprice+payload
            }
            case REMOVE:
                return {
                    ...state,
                    cartdata:state.cartdata.filter((e) => e.title !== payload)
                }
            case INDIVIDUAL:
                return {
                    ...state,
                    directbuy:payload
                }
            case MORE_PRICE:
                return {
                    ...state,
                    totalprice:state.totalprice + payload
                }  
            case DISCOUNT:
                return {
                    ...state,
                    totalprice:payload
                }      
        default:
            return state
    }

}

export default cartreducer
