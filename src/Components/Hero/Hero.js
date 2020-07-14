import React from "react";
import styles from "../App/App.module.scss";
import SliderMain from "../Slider/Slider";
import {Link} from "react-router-dom";

const Hero = ({products}) => {

    return (
        <div className={styles.heros}>
            <div className={styles.heroSlider}>
                <SliderMain products={products}/>
            </div>
            <div className={styles.heroFooter}>
                <div className={styles.heroFooter__descr}>Best constructor pizza<span>	&#160; In Italy</span></div>
                <div className={styles.heroFooter__see}>
                    <span>See</span>
                    <Link to={'/constructor'}> <button>Click here</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero