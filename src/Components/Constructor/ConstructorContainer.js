import React, {Component} from "react";
import Constructor from "./Constructor";
import {connect} from "react-redux";
import {addProductToBasket} from "../../Actions/action";
import {getProductsByCategory} from "../../Selectors/Selectors";
import {compose} from "redux";
import {withRouter} from "react-router";


class ConstructorContainer extends Component {

    render() {
        const {allConstructorProducts, vegetables, fish, meat, cheese,addProductToBasket,basketState} = this.props;
        return (
            <Constructor allConstructorProducts={allConstructorProducts}
                         vegetables={vegetables}
                         fish={fish}
                         meat={meat}
                         cheese={cheese}
                         addProductToBasket={addProductToBasket}
                         basketState={basketState}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const category = ownProps.match.params.category;
    return {
        allConstructorProducts: state.allProductsReducer.allConstructorProducts,
        vegetables: getProductsByCategory(state.allProductsReducer.allProducts, category),
        fish: getProductsByCategory(state.allProductsReducer.allProducts, category),
        meat: getProductsByCategory(state.allProductsReducer.allProducts, category),
        cheese: getProductsByCategory(state.allProductsReducer.allProducts, category),

    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {addProductToBasket})
)(ConstructorContainer)

