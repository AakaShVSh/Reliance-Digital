import { ADD_TO_CART } from "./carttype"


export const addtocart = (data) => {

    return {
        type:ADD_TO_CART,
        payload:data,
    }
}