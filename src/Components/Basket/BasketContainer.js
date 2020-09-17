import React, { Component } from "react";
import Basket from "./Basket";
import { connect } from "react-redux";
import { deleteProductFromBasket } from "../../Actions/action";
import {
    totalBasketProductsPrice
} from "../../Selectors/Selectors";


class BasketContainer extends Component {


    render() {
        const {products, totalProductsPrice, deleteProductFromBasket,
            basketState,allConstructorProducts,isShowConfirm,confirmState} = this.props;
        return (
            <Basket products={products} totalProductsPrice={totalProductsPrice}
                    deleteProductFromBasket={deleteProductFromBasket}
                    basketState={basketState} allConstructorProducts={allConstructorProducts}
                    isShowConfirm={isShowConfirm}
                    confirmState={confirmState}
            />
        )
    }
}


const mapStateToProps = (state) => ({
    products: state.basketReducer,
    allConstructorProducts: state.allProductsReducer.allConstructorProducts,
    totalProductsPrice: totalBasketProductsPrice(state),
});
export default connect(mapStateToProps, {deleteProductFromBasket})(BasketContainer)
