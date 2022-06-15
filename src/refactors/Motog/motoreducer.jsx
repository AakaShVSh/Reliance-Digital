import { moto } from "../../data/data"
console.log(moto)
const initstate = {
    loading:false,
    data:moto,
}

export const motoreducer =  (state = initstate,{type,payload}) => {
 
    switch(type){
        default:
            return state
    }
}

export default motoreducer
