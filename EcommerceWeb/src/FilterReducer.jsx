


const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true };
        case "API_ERROR":
            return { ...state, error: true };
        case "API_SUCCESS":
            return { ...state, loading: false, FilterProducts: action.payload };
        case "GRID":
            return { ...state, grid: true, list: false };
        case "LIST":
            return { ...state, grid: false, list: true };
        case "SHORT":
            return { ...state, FilterProducts: action.payload === "lowest price" ? state.FilterProducts.sort((a, b) => a.price - b.price) : action.payload === "highest price" ? state.FilterProducts.sort((a, b) => b.price - a.price) : state.FilterProducts }
        default:
            return state;
    }
}
export default FilterReducer
