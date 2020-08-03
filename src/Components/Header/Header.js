import React from "react";
import styles from './Header.module.scss'
import { Toggle } from "../../SVG/Svg";


const Header = ({ basketState, basketCount, setShowSidebar }) => {

    return (
        <div className={styles.header}>
            <span className={styles.headerToggle} onClick={()=>setShowSidebar(true)}>
                <Toggle/>
            </span>
            <div onClick={() => basketState(true)} className={styles.headerBasket}>
                <img
                    src="https://res.cloudinary.com/minak/image/upload/v1594648191/PastaPizza/pastaPizzaBasket_oshgq8.png"
                    alt="Logo"/>
                <span>Basket</span>
                <span className={styles.headerBasket__count}>{basketCount > 0 ? basketCount : ''}</span>
            </div>
        </div>
    )
};

export default Header
