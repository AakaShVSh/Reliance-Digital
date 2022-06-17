import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import cartreducer from "./cart/cartreducer";
import homeAppliancereducer from "./HomeAppliance/homeAppliancereducer";
import isAuthreducer from "./isAuth/isAuthreducer";
import motoreducer from "./Motog/motoreducer";
import tvreducer from "./tv/Tvreducer";


const rootreducer = combineReducers({
    moto:motoreducer,
    tv:tvreducer,
    roboticvaccum:homeAppliancereducer,
    cart:cartreducer,
    auth:isAuthreducer,
})

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))