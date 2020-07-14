import React from "react";
import styles from './Sidebar.module.scss'
import {NavLink, Link} from "react-router-dom";

const Sidebar = () => {

    console.log("RENDER - SIDEBAR");


    return (
        <div className={styles.sidebar}>
            <Link to={'/PastaPizza'}>
                <div className={styles.sidebarLogo}>
                    <span>P.</span>
                </div>
            </Link>
            <ul className={styles.sidebarList}>

                <li><NavLink activeClassName={styles.active} to={'/PastaPizza/products/pizza'}> Pizza</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/PastaPizza/products/pasta'}> Pasta</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/PastaPizza/products/sandwiches'}> Sandwiches</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/PastaPizza/products/soups'}> Soups</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/PastaPizza/products/salads'}> Salads</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/PastaPizza/products/desserts'}> Desserts</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/PastaPizza/products/drinks'}> Drinks</NavLink></li>
                <li>
                    <NavLink activeClassName={styles.active} to={'/PastaPizza/constructor'}>
                        Constructor
                    </NavLink>
                </li>
            </ul>
            <div className={styles.sidebarFooter}></div>
        </div>
    )
};

export default Sidebar