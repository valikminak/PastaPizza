import React, { memo } from "react";
import styles from './Order.module.scss'
import OrderItem from "./OrderItem";



const Order = memo(({ toppings,orderProduct,addProductToBasket,history,basketState })=>{


    const product = orderProduct && orderProduct.map((product) =>
        <OrderItem toppings={toppings} addProductToBasket={addProductToBasket} product={product} key={product.id}
                   basketState={basketState}/>);
    const back = () => {
        history.goBack();
    };
    return (
        <div className={styles.order}>
            <div className={styles.orderBackToMenu}>
                    <div>
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={styles.arrow} d="M18 5H1M1 5L5 1M1 5L5 9" stroke="black"
                                  strokeLinejoin="round"/>
                        </svg>
                        <span onClick={back}>Back to menu</span>
                    </div>
            </div>
            <div className={styles.orderItem}>
                {product}
            </div>
        </div>
    )
});


export default Order
