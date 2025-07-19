
const ProduceReducer = (state, action) => {

    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true };
        case "API_ERROR":
            return { ...state, error: true };
        case "API_SUCCESS":
            const featureProductsData = action.payload.filter((item) => item.featured === true);
            return {
                ...state, loading: false,
                products: action.payload,
                featureProducts: featureProductsData,
            };

        case "API_SUCCESS_SINGLE":
            return {
                ...state, loading: false,
                oneProduct: action.payload,
            };

        default:
            return state;
    }
}
export default ProduceReducer
