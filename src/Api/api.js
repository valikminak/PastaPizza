import { pastaPizzaProducts } from "./MockProducts";


export const fetchAllProducts = async () => {
    return new Promise(resolve => {
        resolve(pastaPizzaProducts)
    })
};


