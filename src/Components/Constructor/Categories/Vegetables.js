import React from "react";
import ConstructorProducts from "../ConstructorProducts";

const Vegetables = ({vegetables, addProductClass, addProduct, removeProduct}) => {



    return (
        <>
            {vegetables.map((product) => <ConstructorProducts
                    key={product.id}
                    product={product}
                    addProductClass={addProductClass}
                    addProduct={addProduct}
                    removeProduct={removeProduct}
                />
            )}
        </>
    )
}
export default Vegetables