import React from "react";
import styled from "styled-components";

const ProductPiecesSectionStyles = styled.div`
    display: ${({show}) => show ? "block" : "none"};
    position: absolute;
    top: 41px;
    right: 157px;
    width: 300px;
  img{
  width:421px;
  }
  @media (max-width:1400px) {
  top: 20px;
    right: -21px;
    img{
  width:263px;
       }
  }
  }
    @media (max-width:660px) {
    top: 8px;
    right: -135px;
    img{
  width:157px;
       }
  }
  }
`;


const ProductPiecesSection = ({ children, show }) => {
    return <ProductPiecesSectionStyles show={show}>{children}</ProductPiecesSectionStyles>
};

export default ProductPiecesSection
