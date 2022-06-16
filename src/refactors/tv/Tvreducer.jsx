import { tv } from "../../data/data";

const initstate = {
    loading:false,
    data:tv,
}

export const tvreducer = (state = initstate,{type,payload}) => {

    switch(type){
        default:
            return state
    }
}

export default tvreducer
