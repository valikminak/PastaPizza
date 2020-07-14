import React from "react";
import styled from "styled-components";

const ProductPiecesSectionStyles = styled.div`
    display: ${props => (props.show ? "block" : "none")};
    position: absolute;
    top: 117px;
    right: 741px;
    width: 300px;
  img{
  width:421px;
  }
`;


const ProductPiecesSection = ({children, show}) => {
    return <ProductPiecesSectionStyles show={show}>{children}</ProductPiecesSectionStyles>
};

export default ProductPiecesSection