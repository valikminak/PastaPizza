import React, { Component } from "react";
import styles from './Slider.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


class SliderMain extends Component {

    render() {
        const settings = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2500,
            pauseOnHover: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: false,
            className: "slides",
        };
        return (
            <div className={styles.slider}>
                <Slider {...settings}>
                    {this.props.products.map(({image, id}) => {
                        return (
                            <div className={styles.sliderItem} key={id}>
                                <Link to={`/order/${id}`}><img width="100%" src={image} alt="Slide"/></Link>
                            </div>
                        )
                    })}
                </Slider>

            </div>
        );
    }
}

export default SliderMain
