import React from "react";
import ConstructorProducts from "../ConstructorProducts";

const Fish = ({fish, addProductClass, addProduct, removeProduct}) => {
    return (
        <>
            {fish.map((product) => <ConstructorProducts
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
export default Fish