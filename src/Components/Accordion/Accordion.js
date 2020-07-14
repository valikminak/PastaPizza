import React, {useState, useRef} from "react";
import './Acordion.scss'
import {ProductBasketPiecesSection} from "../../Styles/StyledComponents/Basket/styledBaskedPage";
import ToppingsProducts from "./ToppingsProducts";


const Accordion = ({ id,count,image,name,sumPrice, checkedProductsIds, allConstructorProducts, deleteFromBasket,checkedConstructorProducts,category, toppings}) => {

    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState("0px");
    const content = useRef(null);
    const toggleAccordion = () => {
        setActiveState(setActive === ''? "isShowAccordion" : '');
        setHeightState(setActive === "isShowAccordion" ? "0" : `${content.current.scrollHeight}px`);
    };
    return (
        <div className="accordionWrapper">
            <div className="accordionSection">
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                    <table>
                        <tbody>
                        <tr>
                            <td className="basketContent__name">{name}</td>
                            <td className="basketContent__image"><img
                                src={image ? image : "https://res.cloudinary.com/minak/image/upload/v1594642610/emptyPizza_tnmk15.svg"} alt="Pizza"/>
                                {allConstructorProducts.map((item) =>
                                    <ProductBasketPiecesSection
                                        key={item.id}
                                        show={checkedProductsIds && checkedProductsIds.includes(item.id)}
                                    >
                                        <img src={item.imagePiece} alt="Product"/>
                                    </ProductBasketPiecesSection>)}
                            </td>
                            <td className="basketContent__price">$ {sumPrice}</td>
                            <td className="basketContent__count">{count ? count : 1}</td>
                        </tr>
                        </tbody>
                    </table>
                </button>
                <div ref={content} style={{maxHeight: `${setHeight}`, opacity:'1'}} className="accordionContent">
                    <div className="accordionText">
                            <ToppingsProducts category={category} toppings={toppings} id={id} checkedConstructorProducts={checkedConstructorProducts}/>
                    </div>
                </div>
            </div>
            <div className="basketContent__delete" onClick={() => deleteFromBasket(id)}><img
                src="https://res.cloudinary.com/minak/image/upload/v1594641692/deleteIcon_fmmphq.svg" alt="Delete"/></div>
        </div>

    )
};

export default Accordion