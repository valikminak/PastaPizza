import React from "react";
import ConstructorProducts from "../ConstructorProducts";

const Cheese = ({cheese, addProductClass, addProduct, removeProduct}) => {
    return (
        <>
            {cheese.map((product) => <ConstructorProducts
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
export default Cheese
