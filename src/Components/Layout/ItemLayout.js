import React from "react";
import styles from "./Layouts.module.scss"
import {Link} from "react-router-dom";




const ItemLayout = ({id,image,price,name,structure}) => {
    return (
        <div className={styles.productItem}>
            <div className={styles.productItem__image}>
                <Link to={`/order/${id}`}><img src={image} alt="product"/></Link>
            </div>
            <div>
                <Link to={`/PastaPizza/order/${id}`}><span className={styles.productItem__add}>+</span></Link>
            </div>
            <div className={styles.productItem__description}>
                <span className={styles.productItem__price}>$ {price}</span>
                <p className={styles.productItem__name}>{name}</p>
                <p className={styles.productItem__structure}>{structure}</p>
            </div>
        </div>
    )
};

export default ItemLayout