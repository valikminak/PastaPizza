import React from "react";
import styled from "styled-components";

const ProductPiecesSectionStyles = styled.div`
    display: ${props => (props.show ? "block" : "none")};
    position: absolute;
    top: 41px;
    right: 157px;
    width: 300px;
  img{
  width:421px;
  }
  @media (max-width:1100px) {
  top: 33px;
    right: 71px;
    img{
  width:341px;
  }
  }
    @media (max-width:522px) {
  top: 45px;
    right: 3px;
    img{
  width:290px;
  }
  }
      @media (max-width:370px) {
  top: 55px;
    right: -47px;
    img{
  width:236px;
  }
  }
`;


const ProductPiecesSection = ({children, show}) => {
    return <ProductPiecesSectionStyles show={show}>{children}</ProductPiecesSectionStyles>
};

export default ProductPiecesSection