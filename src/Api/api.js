import {pastaPizzaProducts} from "./MockProducts";
import axios from "axios";


export const getProductsByCategory = async () => {
    return axios.get('http://127.0.0.1:8000').then(res => {
        return res.data
    });
};


export const getAllCategories = async () => {
    return axios.get('http://127.0.0.1:8000').then(res => {
        return res.data
    });
};


