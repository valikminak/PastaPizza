import React, { Component } from "react";
import Order from "./Order";
import { connect } from "react-redux";
import { getProductById } from "../../Selectors/Selectors";
import { addProductToBasket } from "../../Actions/action";
import { compose } from "redux";
import { withRouter } from "react-router";


class OrderContainer extends Component {

    toppings = [
        {name: 'Roast Beef', number: 4, id: 1},
        {name: 'Mushrooms', number: 6, id: 2},
        {name: 'Onions', number: 7, id: 3},
        {name: 'Tomatoes', number: 8, id: 4},
        {name: 'Bell peppers', number: 5, id: 5}
    ];


    render() {
        const { orderProduct, addProductToBasket, history, basketState } = this.props;
        console.log(orderProduct)
        return (
            <>
                <Order toppings={this.toppings} orderProduct={orderProduct} addProductToBasket={addProductToBasket} history={history}
                       basketState={basketState}/>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    orderProduct: getProductById(state.allProductsReducer.allProducts, ownProps.match.params.id)
});


export default compose(
    withRouter,
    connect(mapStateToProps, {addProductToBasket})
)(OrderContainer)
