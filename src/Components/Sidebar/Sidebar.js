import React from "react";
import styles from './Sidebar.module.scss'
import { NavLink, Link } from "react-router-dom";




const Sidebar = ({ setShowSidebar }) => {
    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.sidebar}>
                    <span className={styles.showSidebar} onClick={() => setShowSidebar(false)}>
                         <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={styles.arrow} d="M18 5H1M1 5L5 1M1 5L5 9" stroke="black"
                                  strokeLinejoin="round"/>
                        </svg>
                    </span>
                <div>
                    <Link to={'/PastaPizza'}>
                        <div className={styles.sidebarLogo}>
                            <span>P.</span>
                        </div>
                    </Link>
                </div>
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
        </div>

    )
};

export default Sidebar
