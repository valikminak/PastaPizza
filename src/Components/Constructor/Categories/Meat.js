import React from "react";
import ConstructorProducts from "../ConstructorProducts";

const Meat = ({meat, addProductClass, addProduct, removeProduct}) => {
    return (
        <>
            {meat.map((product) => <ConstructorProducts
                    key={product.id}
                    product={product}
                    addProductClass={addProductClass}
                    addProduct={addProduct}
                    removeProduct={removeProduct}
                />
            )}
        </>
    )
};
export default Meat
