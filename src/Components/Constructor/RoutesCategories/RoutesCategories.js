import {Route, Switch} from "react-router";
import Vegetables from "../Categories/Vegetables";
import React from "react";
import Fish from "../Categories/Fish";
import Cheese from "../Categories/Cheese";
import Meat from "../Categories/Meat";

export const RoutesCategories = ({addProductClass, addProduct, removeProduct, vegetables, fish, cheese, meat,}) => {
        window.scrollTo(0, 0);
    return (

        <Switch>
            <Route path={'/constructor/vegetables'}
                   component={() => <Vegetables
                       addProductClass={addProductClass}
                       addProduct={addProduct}
                       removeProduct={removeProduct}
                       vegetables={vegetables}/>}

            />
            <Route path={'/constructor/fish'}
                   component={() => <Fish
                       addProductClass={addProductClass}
                       addProduct={addProduct}
                       removeProduct={removeProduct}
                       fish={fish}
                   />}

            />
            <Route path={'/constructor/meat'}
                   component={() => <Meat
                       addProductClass={addProductClass}
                       addProduct={addProduct}
                       removeProduct={removeProduct}
                       meat={meat}
                   />}

            />
            <Route path={'/constructor/cheese'}
                   component={() => <Cheese
                       addProductClass={addProductClass}
                       addProduct={addProduct}
                       removeProduct={removeProduct}
                       cheese={cheese}
                   />}

            />
        </Switch>
    )
}

export default RoutesCategories
