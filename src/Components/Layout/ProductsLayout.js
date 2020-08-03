import React from "react";
import styles from "./Layouts.module.scss"
import ItemLayout from "./ItemLayout";

const ProductsLayout = ({name, products}) => {

    return (
        <>
            <div className={styles.product}>
                <div className={styles.productTitle}>
                    <h2>{name}</h2>
                </div>
                <div className={styles.productList}>
                    {products && products.map((item) =>
                        <ItemLayout  {...item} key={item.id}/>
                    )}
                </div>
            </div>
        </>
    )
};

export default ProductsLayout
