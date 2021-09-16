import {GET_ALL_CATEGORIES_SUCCESS, GET_PRODUCTS_BY_CATEGORY_SUCCESS} from "../ActionTypes";

const initialState = {
    products: [],
    allConstructorProducts: [],
    categories: []

};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                products: [...state.products, ...payload],
                // allConstructorProducts: [...state.allConstructorProducts, ...payload.filter((item) => item.constructor === true)]
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
