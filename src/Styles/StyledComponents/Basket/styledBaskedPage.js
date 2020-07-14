import React from "react";
import styled from "styled-components";

const BasketSectionStyles = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.isShowBasket ? "0" : "-555px")};
  width: 555px;
  font-size: 12px;
  height: 100vh;
  padding-top: 100px;
  background-color: #ffffff;
  padding-left:20px;
  border-left: 1px solid #000000;
  z-index: 2;
  overflow-y:scroll;
  transition: all .5s;

`;

export const BasketSection = ({children, isShowBasket}) => {
    return <BasketSectionStyles isShowBasket={isShowBasket}>{children}</BasketSectionStyles>
};


const ProductBasketPiecesSectionStyles = styled.div`
    display:${(props)=>(props.show?"block":"none")};
    position: absolute;
    top: 18px;
    right: 14px;
    width: 50px;
  img{
    width:38px;
    }
`;


export const ProductBasketPiecesSection = ({children, show}) => {
    return <ProductBasketPiecesSectionStyles show={show}>{children}</ProductBasketPiecesSectionStyles>
};