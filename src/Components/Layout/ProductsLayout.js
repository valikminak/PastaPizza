import React, {Suspense} from "react";
import styles from "./Layouts.module.scss"
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const ItemLayout = React.lazy(() => import ("./ItemLayout"));

const ProductsLayout = ({name, products}) => {
    
    return (
        <>
            <div className={styles.product}>
                <div className={styles.productTitle}>
                    <h2>{name}</h2>
                </div>
                <div className={styles.productList}>
                      <Suspense fallback={<Preloader/>}>
                        {products && products.map((item) =>
                            <ItemLayout  {...item} key={item.id}/>
                        )}
                    </Suspense>
                </div>
            </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    products: state.allProductsReducer.products
});

export default compose(
    connect(mapStateToProps, null),
    withRouter
)(ProductsLayout)


