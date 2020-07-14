import React from "react";
import {ToppingsComponent} from "../../Styles/StyledComponents/Order/styledOrderPage";

export const OrderToppings=({chosenToppings,chooseToppings,deleteItemFromArray,toppings})=>{

    return(
        <>
            {toppings.map(({name, number, id}) =>
                <ToppingsComponent key={id} number={number} chosenToppings={chosenToppings}
                                   chooseToppings={chooseToppings}
                                   deleteItemFromArray={deleteItemFromArray}>
                    <span>{name}</span>
                </ToppingsComponent>)}
            </>
    )
}
