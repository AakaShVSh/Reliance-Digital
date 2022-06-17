import { tv } from "../../data/data";
import { SORT } from "../sortaction";

const initstate = {
    loading:false,
    data:tv,
}

export const tvreducer = (state = initstate,{type,payload}) => {

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

export default tvreducer
