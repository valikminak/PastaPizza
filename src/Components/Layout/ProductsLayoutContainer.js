import React, { Component } from "react";
import { getProductsByCategory } from "../../Selectors/Selectors";
import ProductsLayout from "./ProductsLayout";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

class ProductsLayoutContainer extends Component {

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        const {name, products} = this.props;

        return (
            <>
                <ProductsLayout name={name} products={products}/>
            </>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        name: ownProps.match.params.product,
        products: getProductsByCategory(state.allProductsReducer.allProducts, ownProps.match.params.product)
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, null)
)
(ProductsLayoutContainer)
