import { ADD_PRICE, ADD_TO_CART, DISCOUNT, INDIVIDUAL, MORE_PRICE, REMOVE } from "./carttype"


export const addtocart = (data) => {

    return {
        type:ADD_TO_CART,
        payload:data,
    }
}

export const addprice = (p) => {
    return {
        type:ADD_PRICE,
        payload:p
    }
}

export const removefromcart = (id) => {
    return {
        type:REMOVE,
        payload:id
    }
}
export const directbuy = (p) => {
    return {
        type:INDIVIDUAL,
        payload:p
    }
}
export const moreprice = (p) => {
    return {
        type:MORE_PRICE,
        payload:p
    }
}
export const discount = (total) => {
    return {
        type:DISCOUNT,
        payload:total
    }
} 