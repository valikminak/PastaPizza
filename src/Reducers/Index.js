import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import allProductsReducer from "./AllProductsReducer";
import basketReducer from "./BasketReducer";


export default history=>combineReducers({
    router:connectRouter(history),
    allProductsReducer,
    basketReducer
})

