import React from "react";

import "./Basket.scss"

import TransitionGroup from "react-transition-group/cjs/TransitionGroup";
import {CSSTransition} from "react-transition-group";
import Accordion from "../Accordion/Accordion";
import Confirm from "./Confirm/Confirm";


const Basket = ({products, totalProductsPrice, deleteProductFromBasket, basketState, allConstructorProducts, isShowConfirm, confirmState,orderedConstructorProducts}) => {

    console.log("RENDER - BASKET");

    const deleteFromBasket = (id) => {
        deleteProductFromBasket(id)
    };

    const fullBasket = !isShowConfirm && products.length !== 0 &&
        <CSSTransition in={true} timeout={300} appear={true} classNames="content">
            <BasketContent products={products} deleteFromBasket={deleteFromBasket}
                           allConstructorProducts={allConstructorProducts} totalProductsPrice={totalProductsPrice}
                           confirmState={confirmState} orderedConstructorProducts={orderedConstructorProducts}/>
        </CSSTransition>;
    const emptyBasket = !isShowConfirm && products.length === 0 && <div className="basketContent__empty">Empty</div>;
    const confirmOrder = isShowConfirm &&
            <CSSTransition in={true} timeout={300} appear={true} classNames="confirm">
                <Confirm confirmState={confirmState}/>
            </CSSTransition>;

    return (
        <div className="basket">
            <div className="basketHeader">
                <h2 className="basketHeader__title">Order List</h2>
                <h4 onClick={() => basketState(false)} className="basketHeader__hide">Hide</h4>
            </div>
            {fullBasket}
            {emptyBasket}
            {confirmOrder}
        </div>
    )
};

    const BasketContent = ({products, deleteFromBasket, allConstructorProducts, totalProductsPrice, confirmState,}) => {

    return (
        <div className="basketContent">
            <TransitionGroup>
                {products.map(({count, id, image, name, sumPrice, toppings, category,checkedConstructorProducts,checkedProductsIds}) => (
                    <CSSTransition key={id} appear={true} timeout={500} classNames="delete">
                      <Accordion
                          id={id} count={count} image={image} name={name} sumPrice={sumPrice} toppings={toppings}
                          category={category} checkedConstructorProducts={checkedConstructorProducts}
                          checkedProductsIds={checkedProductsIds} deleteFromBasket={deleteFromBasket}
                          allConstructorProducts={allConstructorProducts}
                      />
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <div className="basketTotalPrice">
                <span>Total</span>
                <span>$ {totalProductsPrice.toFixed(1)}</span>
            </div>
            <div className="basketOrderButton">
                <button onClick={() => confirmState(true)}>
                    Order
                </button>
            </div>
        </div>


    )
};


export default Basket

