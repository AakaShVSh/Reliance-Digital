import { roboticvacuum } from "../../data/data";
import { SORT } from "../sortaction";

const initstate = {
    loading:false,
    data:roboticvacuum,
}


export const homeAppliancereducer = (state = initstate,{type,payload}) => {

    switch(type){
    case SORT:
      return {
        ...state,
        data: [...state.data].sort((a, b) =>
          a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0
        ),
      };
        default:
            return state
    }
}

export default homeAppliancereducer

