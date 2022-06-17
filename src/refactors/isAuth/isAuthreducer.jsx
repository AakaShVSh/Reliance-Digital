import { ISAUTH } from "./isAuthAction"

const initstate = {
    isauth:false
}

const isAuthreducer = (state = initstate,{type,payload}) => {
  
    switch(type){
       case ISAUTH:
        return {
            ...state,
            isauth:payload
        }
        default:
            return state
    }
}

export default isAuthreducer
