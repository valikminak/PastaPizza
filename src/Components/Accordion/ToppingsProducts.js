import React from 'react';

const ToppingsProducts = ({ category, toppings, id, checkedConstructorProducts }) => {
    switch (category) {
        case "pizza":
            return <>
                <li className="toppingsTitle">Toppings:</li>
                <li
                    className="basketContent__toppings">{(!toppings || toppings.length) === 0 ? null : toppings.map((item) =>
                    <span key={id}>- {item.name}</span>)}
                </li>
            </>


        case "constructor":
            return <>
                <span className="toppingsTitle">
         Toppings:
                </span>
                <ul className="basketContent__accordion">
                    {checkedConstructorProducts.map(({name}) => <li>- {name}</li>)}
                </ul>
            </>


        default:
            return null
    }
};

export default ToppingsProducts;
