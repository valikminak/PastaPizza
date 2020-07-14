import React, {Component} from "react";
import Hero from "./Hero";
import {connect} from "react-redux";
import {getProductsByCategory} from "../../Selectors/Selectors";


class HeroContainer extends Component {

    render() {
        return (
            <Hero products={this.props.products}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: getProductsByCategory(state.allProductsReducer.allProducts, "pizza")
    }
}
export default connect(mapStateToProps,null)(HeroContainer)