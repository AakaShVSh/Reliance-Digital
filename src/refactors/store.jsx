import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import motoreducer from "./Motog/motoreducer";


const rootreducer = combineReducers({
    moto:motoreducer,
})

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))