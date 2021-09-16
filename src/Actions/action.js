import {
    DELETE_PRODUCT_FROM_BASKET_SUCCESS,
    ADD_PRODUCT_TO_BASKET_SUCCESS,
    GET_ALL_CATEGORIES_START,
    GET_ALL_CATEGORIES_SUCCESS,
    GET_ALL_CATEGORIES_FAILURE,
    GET_PRODUCTS_BY_CATEGORY_START, GET_PRODUCTS_BY_CATEGORY_SUCCESS, GET_PRODUCTS_BY_CATEGORY_FAILURE,
} from "../ActionTypes";
import {
    getProductsByCategory as getProductsByCategoryApi,
    getAllCategories as getAllCategoriesApi, getProductsByCategory
} from '../Api/api'

export const getProductsByCategory = () => async dispatch => {
    dispatch({type: GET_PRODUCTS_BY_CATEGORY_START});
    try {
        const allProducts = await getProductsByCategoryApi();
        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
            payload: allProducts
        })
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const getAllCategories = () => async dispatch => {
    dispatch({type: GET_ALL_CATEGORIES_START});
    try {
        const categories = await getAllCategoriesApi();
        console.log(categories)
        dispatch({
            type: GET_ALL_CATEGORIES_SUCCESS,
            payload: categories
        })
    } catch (err) {
        dispatch({
            type: GET_ALL_CATEGORIES_FAILURE,
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





