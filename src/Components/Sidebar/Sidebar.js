import React from "react";
import styles from './Sidebar.module.scss'
import {NavLink, Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Link to={'/'}>
                <div className={styles.sidebarLogo}>
                    <span>P.</span>
                </div>
            </Link>
            <ul className={styles.sidebarList}>

                <li><NavLink activeClassName={styles.active} to={'/products/pizza'}> Pizza</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/products/pasta'}> Pasta</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/products/sandwiches'}> Sandwiches</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/products/soups'}> Soups</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/products/salads'}> Salads</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/products/desserts'}> Desserts</NavLink></li>
                <li><NavLink activeClassName={styles.active} to={'/products/drinks'}> Drinks</NavLink></li>
                <li>
                    <NavLink activeClassName={styles.active} to={'/constructor'}>
                        Constructor
                    </NavLink>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar