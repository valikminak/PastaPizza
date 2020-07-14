import React from "react";
import styles from "./Constructor.module.scss";


const ConstructorProducts=(props)=>{
    const {product:{id, name, price, image}, addProductClass, addProduct, removeProduct} = props;
    const buttonMinusClassName = `${addProductClass.includes(id) ? styles.itemCount__minus : [styles.itemCount__minus, styles.activeRemoved].join(' ')}`;
    const buttonPlusClassName = `${addProductClass.some(itemId => itemId === id) ? [styles.itemCount__plus, styles.activeAdded].join(' ') : styles.itemCount__plus}`;


    return(
        <div className={styles.item} key={id}>
            <div className={styles.ingredientsProducts__image}>
                <img src={image} alt=""/>
            </div>
            <div className={styles.itemCount}>
                <button
                    disabled={
                        addProductClass.length <= 0 ||
                        !addProductClass.includes(id)}
                    onClick={() => removeProduct(price, id)}
                    className={buttonMinusClassName}>
                    -
                </button>
                <button
                    disabled={addProductClass.some(itemId => itemId === id)}
                    onClick={() => addProduct(price, id)}
                    className={buttonPlusClassName}>
                    +
                </button>
            </div>
            <p className={styles.itemName}>{name}</p>
            <span className={styles.itemPrice}>${price}</span>
        </div>
    )
}

export default ConstructorProducts