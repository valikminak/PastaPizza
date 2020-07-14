import React from "react";
import styled from "styled-components";

const mainSectionStyles = `text-transform: uppercase;
display:flex;
justify-content:center;
align-items:center;
font-size: 12px;
padding: 10px;
cursor: pointer;
& sub{
    text-transform: lowercase;
}
&:hover {
    background-color: #FFDF8C;
}`;


const SectionSizeButtonStyles = styled.div`
    background-color: ${props => (props.chosenSize === props.number ? "#FFDF8C" : "#F7F5F7")};
    border-bottom-left-radius: ${props => (props.size === "Small" ? "30px" : null)};
    border-top-left-radius: ${props => (props.size === "Small" ? "30px" : null)};
    border-bottom-right-radius: ${props => (props.size === "Large" ? "30px" : null)};
    border-top-right-radius: ${props => (props.size === "Large" ? "30px" : null)};
    ${mainSectionStyles}
`;
const SectionToppingsStyles = styled.div`
    background-color: ${props => (props.chosenToppings.includes(props.number) ? "#FFDF8C" : "#F7F5F7")};
    border-radius: 30px;
    ${mainSectionStyles}
`;

export const SectionSizeButtons = ({children, chosenSize, chooseSize, number,size}) => {
    return <SectionSizeButtonStyles onClick={() => chooseSize(number)} chosenSize={chosenSize}
                                    number={number} size={size}>{children}</SectionSizeButtonStyles>
};


export const ToppingsComponent = ({children, chosenToppings, chooseToppings, deleteItemFromArray, number}) => {
    return <SectionToppingsStyles
        onClick={() => chooseToppings(chosenToppings.includes(number)
            ? () => deleteItemFromArray(number)
            : [...chosenToppings, number])}
        chosenToppings={chosenToppings}
        number={number}
    >{children}</SectionToppingsStyles>

};









