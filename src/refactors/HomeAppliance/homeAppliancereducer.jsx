import { roboticvacuum } from "../../data/data";

const initstate = {
    loading:false,
    data:roboticvacuum,
}


export const homeAppliancereducer = (state = initstate,{type,payload}) => {

    switch(type){
        default:
            return state
    }
}

export default homeAppliancereducer

