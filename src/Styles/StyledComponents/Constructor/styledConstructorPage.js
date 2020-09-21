import React from "react";
import styled from "styled-components";

const ProductPiecesSectionStyles = styled.div`
    display: ${({show}) => show ? "block" : "none"};
    position: absolute;
  top: 50px;
    right: 43px;
    width: 407px;
  img{
  width:421px;
  }
  @media (max-width:1400px) {
  top: 20px;
    right: 17px;
      width:263px;
  }
  }
    @media (max-width:660px) {
    top: 11px;
    right: 10px;
    width:157px;

  }
  }
`;


const ProductPiecesSection = ({ children, show }) => {
    return <ProductPiecesSectionStyles show={show}>{children}</ProductPiecesSectionStyles>
};

export default ProductPiecesSection
