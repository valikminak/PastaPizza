import {
    ADD_PRODUCT_TO_BASKET_SUCCESS,
    DELETE_PRODUCT_FROM_BASKET_SUCCESS,
} from "../ActionTypes";


const inititalState = [];

export default (state = inititalState, {type, payload}) => {
    switch (type) {
        case ADD_PRODUCT_TO_BASKET_SUCCESS:
            return [
                ...state, payload
            ];
        case DELETE_PRODUCT_FROM_BASKET_SUCCESS:
            return [
                ...state.filter((item) => item.id !== payload)
            ];
        default:
            return state

    }
}
