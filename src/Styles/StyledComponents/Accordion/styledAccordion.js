import React from "react";
import styled from "styled-components";


const AccordionSectionStyles = styled.button`


`;

export const AccordionSection = ({children, isShowToppings}) => {
    return <AccordionSectionStyles isShowToppings={isShowToppings}>{children}</AccordionSectionStyles>
};

