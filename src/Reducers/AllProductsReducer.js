import {GET_ALL_CATEGORIES_SUCCESS, GET_ALL_PRODUCTS_SUCCESS} from "../ActionTypes";

const initialState = {
    allProducts: [],
    allConstructorProducts: []

};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                allProducts: [...state.allProducts, ...payload],
                allConstructorProducts: [...state.allConstructorProducts, ...payload.filter((item) => item.constructor === true)]
            };

        case GET_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, ...payload],
            };
        default:
            return state

    }
}
