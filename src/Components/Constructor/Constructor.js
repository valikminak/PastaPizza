import React, {useState} from "react";
import styles from './Constructor.module.scss'
import {SvgCheese, SvgFish, SvgMeat, SvgVegetable} from "../../SVG/Svg";
import ProductPiecesSection from "../../Styles/StyledComponents/Constructor/styledConstructorPage";
import RoutesCategories from "./RoutesCategories/RoutesCategories";
import {NavLink} from "react-router-dom";


const Constructor = ({allConstructorProducts,vegetables, fish, cheese, meat, addProductToBasket,basketState}) => {

    const [addProductClass, onAddProductClass] = useState([]);
    const [addedRemovedPriceNumber, onAddRemovePriceNumber] = useState(0);

    const addProduct = (price, id) => {
        const addition = +(addedRemovedPriceNumber + price).toFixed(1);
        onAddRemovePriceNumber(addition);
        onAddProductClass([...addProductClass, id])
    };
    const removeProduct = (price, id) => {
        const subtraction = +(addedRemovedPriceNumber - price).toFixed(1);
        onAddRemovePriceNumber(subtraction);
        onAddProductClass(addProductClass.filter((itemId) => itemId !== id))
    };
    const placeOrder = () => {
        addProductClass.length>0&&addProductToBasket({
            name: "Constructor",
            category:"constructor",
            checkedConstructorProducts:allConstructorProducts.filter((item)=>addProductClass.includes(item.id)),
            checkedProductsIds:addProductClass,
            sumPrice: addedRemovedPriceNumber,
            id: Date.now(),
        });
        basketState(true);
        onAddRemovePriceNumber(0);
        onAddProductClass([]);
    };

    return (
        <div className={styles.constructor}>
            <div className={styles.pizza}>
                <img src="https://res.cloudinary.com/minak/image/upload/v1594645855/PastaPizza/Constructor/emptyPizza_ze8hwy.svg" alt="Pizza"/>
                {allConstructorProducts.map(({imagePiece, id}) =>
                    <ProductPiecesSection
                        key={id}
                        show={addProductClass.some(itemId => itemId === id)}
                    >
                        <img src={imagePiece} alt="Product"/>
                    </ProductPiecesSection>)}
            </div>

            <div className={styles.ingredients}>
                <div className={styles.ingredientsCategories}>
                    <NavLink activeClassName={styles.activeCategory}
                             to={"/constructor/vegetables"}><span><SvgVegetable/></span></NavLink>
                    <NavLink activeClassName={styles.activeCategory}
                             to={"/constructor/fish"}><span><SvgFish/></span></NavLink>
                    <NavLink activeClassName={styles.activeCategory}
                             to={"/constructor/meat"}><span><SvgMeat/></span></NavLink>
                    <NavLink activeClassName={styles.activeCategory}
                             to={"/constructor/cheese"}><span><SvgCheese/></span></NavLink>
                    <div className={styles.order}>
                         <span className={styles.sumPrice}>
                             Sum {addedRemovedPriceNumber} $
                         </span>
                        <button disabled={addProductClass.length===0} onClick={placeOrder} className={styles.orderButton}>
                            Order
                        </button>
                    </div>
                </div>
                <div className={styles.ingredientsProducts}>
                    <RoutesCategories
                        removeProduct={removeProduct}
                        addProduct={addProduct}
                        addProductClass={addProductClass}
                        vegetables={vegetables}
                        fish={fish}
                        meat={meat}
                        cheese={cheese}
                    />
                </div>

            </div>
        </div>
    )
};

export default Constructor