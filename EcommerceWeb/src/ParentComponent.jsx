import { createContext, useState, useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import ProduceReducer from './Reduces/ProduceReducer'

const initialState = {
    loading: false,
    error: false,
    products: [],
    featureProducts: [],
    oneProduct: {},
}


const ParentComponentContext = createContext();

const ParentComponent = ({ children }) => {
    const [flex, setFlex] = useState('flex');
    const [state, dispatch] = useReducer(ProduceReducer, initialState)


    const API = `https://api.pujakaitem.com/api/products`;
    const getData = async (url) => {
        try {
            dispatch({ type: "LOADING" })
            const response = await axios(url);
            // Handle the response data
            const products = await response.data;
            // console.log(products)
            dispatch({ type: "API_SUCCESS", payload: products })

        } catch (error) {
            dispatch({ type: "API_ERROR" })
            console.error("Error fetching data:", error);
        }
    }

    const getFeatureProducts = async (url) => {
        try {
            dispatch({ type: "LOADING" })
            const response = await axios(url);
            // Handle the response data
            const getSingleProduct = await response.data;
            console.log(getSingleProduct)
            dispatch({ type: "API_SUCCESS_SINGLE", payload: getSingleProduct })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getData(API);
    }, [])

    return (
        <ParentComponentContext.Provider value={{ ...state, API, getData, getFeatureProducts }}>
            {children}
        </ParentComponentContext.Provider >
    );
}

const useParentComponent = () => {
    return useContext(ParentComponentContext);
}

export default ParentComponent;
export { ParentComponentContext, useParentComponent };