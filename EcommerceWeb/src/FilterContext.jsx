import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import FilterReducer from "./FilterReducer";
const FilterContext = createContext();



const initialState = {
    loading: false,
    error: false,
    FilterProducts: [],
    grid: true,
    list: false,
    short: "short by"
}




const FilterContextProvider = ({ children }) => {
    const [filter, dispatch] = useReducer(FilterReducer, initialState)

    const API = `https://api.pujakaitem.com/api/products`;
    const getData = async (url) => {
        try {
            dispatch({ type: "LOADING" })
            const response = await axios(url);
            const products = await response.data;
            dispatch({ type: "API_SUCCESS", payload: products })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getData(API);
    }, [])

    return (
        <FilterContext.Provider value={{ ...filter, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}

export default FilterContextProvider;