import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Order.module.scss";
import './Transitions.css'
import { SectionSizeButtons } from "../../Styles/StyledComponents/Order/styledOrderPage";
import { OrderToppings } from "./OrderTopings";
import { CSSTransition } from "react-transition-group";



const OrderItem = ({ product, addProductToBasket,basketState,toppings }) => {

    const { name, image, category, price, structure } = product;

    const sizes = [
        {size: 'Small', weight: 320, number: 1, id: Date.now()},
        {size: 'Medium', weight: 530, number: 2, id: Date.now() + 5},
        {size: 'Large', weight: 860, number: 3, id: Date.now() + 6},

    ];

    const [chosenSize, chooseSize] = useState(2);
    const [chosenToppings, chooseToppings] = useState([]);
    const [multipliedSum, sumWithMultiply] = useState([0]);



    const deleteItemFromArray = (item) => {
        const index = chosenToppings.indexOf(item);
        return (
            chosenToppings.slice(0, index)
                .concat(chosenToppings.slice(index + 1))
        )
    };

    //Price sum
    const priceWithToppings = (sum) => {
        chosenToppings.includes(4) && sum.push(0.8);
        chosenToppings.includes(5) && sum.push(0.5);
        chosenToppings.includes(6) && sum.push(0.4);
        chosenToppings.includes(7) && sum.push(0.3);
        chosenToppings.includes(8) && sum.push(0.5);

    };
    const summaryPrice = () => {
        let sum = !chosenSize ? [price] : [0];
        if (chosenSize === 1) {
            sum.push(price / 1.3);
            priceWithToppings(sum)
        }
        if (chosenSize === 2) {
            sum.push(price);
            priceWithToppings(sum)
        }
        if (chosenSize === 3) {
            sum.push(price * 1.3);
            priceWithToppings(sum)
        }
        return (
            multipliedSum.length === 1
                ? sum.reduce((arr, current) => arr + current)
                : sum.reduce((arr, current) => arr + current) * multipliedSum.length
        )

    };
    let sum = +summaryPrice();

    //ClassNames
    const orderSizeClass = classNames.bind(styles)({
        orderSize: true,
        orderSizeSmall: chosenSize === 1,
        orderSizeMedium: chosenSize === 2,
        orderSizeLarge: chosenSize === 3,
    });
    const disableMinusBtn = classNames.bind(styles)({
        priceCount__minusBtn: true,
        disabled: multipliedSum.length === 1
    });

        const placeOrder = () => {
        const orderedToppings = [];
        for (let i = 0; i < chosenToppings.length; i++) {
            orderedToppings.push(toppings.find((item) => item.number === chosenToppings[i]))
        }
        product.toppings = orderedToppings;
        product.sumPrice = sum.toFixed(1);
        product.count = multipliedSum.length;
        addProductToBasket(product);
        basketState(true);
        sum = price;
        chooseToppings([]);
        sumWithMultiply([0]);
        chooseSize(2)

    };
    return (
        <>
            <CSSTransition in={true} timeout={700} classNames={"animOrder"} appear={true}>
                <div className={styles.orderItemImg}>
                    <img className={orderSizeClass} src={image} alt="Pizza"/>
                </div>
            </CSSTransition>
            <div className={styles.orderItemDetails}>
                <h3 className={styles.orderItemDetails__title}>{name}</h3>
                <p className={styles.orderItemDetails__description}>{structure}</p>

                <div className={styles.size}>
                    {sizes.map(({size, weight, number, id}) =>
                        <SectionSizeButtons size={size} key={id} chosenSize={chosenSize} chooseSize={chooseSize}
                                            number={number}>
                            <span className={styles.sizeSize}>{size} </span>
                            <span>{weight} <sub>{category === "drinks" ? "ml" : "g"}</sub></span>
                        </SectionSizeButtons>)}
                </div>

                {category === "pizza" && <div className={styles.toppings}>
                    <span className={styles.toppingsTitle}>Toppings</span>
                    <div className={styles.toppingsItems}>
                        <OrderToppings toppings={toppings} deleteItemFromArray={deleteItemFromArray}
                                       chooseToppings={chooseToppings} chosenToppings={chosenToppings}
                                       category={category}/>
                    </div>
                </div>}
                <div className={styles.price}>
                        <span className={styles.priceItem}>
                            $ {parseFloat(sum).toFixed(1)}
                        </span>
                    <div className={styles.priceCount}>
                        <span className={styles.priceCount__minus}>
                            <button disabled={multipliedSum.length === 1} className={disableMinusBtn}
                                    onClick={() => sumWithMultiply(multipliedSum.slice(0, -1))}>-</button>
                        </span>
                        {multipliedSum.length}
                        <span className={styles.priceCount__plus}>
                            <button className={styles.priceCount__plusBtn}
                                    onClick={() => sumWithMultiply(multipliedSum => [...multipliedSum, "plus"])}>+</button>
                        </span>
                    </div>
                </div>
                <div>
                    <button onClick={placeOrder} className={styles.orderButton}> Place order</button>
                </div>
            </div>
        </>
    )
};

export default OrderItem
