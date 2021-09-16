import {pastaPizzaProducts} from "./MockProducts";
import axios from "axios";


export const fetchAllProducts = async () => {
    return new Promise(resolve => {
        resolve(pastaPizzaProducts)
    })
};


export const getAllCategories = async () => {
    axios.get('http://127.0.0.1:8000').then(res => {
        console.log(res)
        return res.data
    });
};


