import {
    GET_ALL_PRODUCTS_START,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE,
    DELETE_PRODUCT_FROM_BASKET_SUCCESS,
    ADD_PRODUCT_TO_BASKET_SUCCESS,
} from "../ActionTypes";
import {
    fetchAllProducts as fetchAllProductsApi,
} from '../Api/api'

export const fetchAllProducts = () => async dispatch => {
    dispatch({type: GET_ALL_PRODUCTS_START});
    try {
        const allProducts = await fetchAllProductsApi();
        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: allProducts
        })
    } catch (err) {
        dispatch({
            type: GET_ALL_PRODUCTS_FAILURE,
            payload: err,
            error: true
        })
    }
};


//Basket
export const addProductToBasket = (product) => dispatch => {
    dispatch({
        type: ADD_PRODUCT_TO_BASKET_SUCCESS,
        payload: product
    })

};

export const deleteProductFromBasket = (id) => dispatch => {
    dispatch({
        type: DELETE_PRODUCT_FROM_BASKET_SUCCESS,
        payload: id
    })

};





