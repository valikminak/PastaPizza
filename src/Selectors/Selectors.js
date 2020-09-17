import {createSelector} from "reselect";

const getProductsByCategorySelector = (allProducts, category) => {
    return {allProducts, category}
};
export const getProductsByCategory = createSelector(getProductsByCategorySelector,
    ({allProducts, category}) => allProducts.filter(item => item.category === category));


const getProductByIdSelector = (allProducts, id) => {
    return {allProducts, id};
};
export const getProductById = createSelector(getProductByIdSelector, ({allProducts, id}) => allProducts.filter((item) => item.id === +id));


const totalBasketProductsPriceSelector = (state) => {
    return state.basketReducer.map(({sumPrice}) => +sumPrice);
};
export const totalBasketProductsPrice = createSelector(totalBasketProductsPriceSelector, (sumPrice) => sumPrice.length > 0 ? sumPrice.reduce((acc, curr) => acc + curr) : 0);


