import React from "react";
import styles from './Header.module.scss'

const Header = ({basketState,basketCount}) => {

    console.log("RENDER - HEADER")

    return (
        <div className={styles.header}>
                <div onClick={()=>basketState(true)} className={styles.headerBasket}>
                    <img src="https://res.cloudinary.com/minak/image/upload/v1594648191/PastaPizza/pastaPizzaBasket_oshgq8.png" alt="Logo"/>
                    <span>Basket</span>
                    <span className={styles.headerBasket__count}>{basketCount>0?basketCount:''}</span>
                </div>
        </div>
    )
}

export default Header