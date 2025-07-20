import { useFilterContext } from "../FilterContext";
const ProductShotList = () => {
    const { dispatch, FilterProducts } = useFilterContext();
    return (
        <div className="flex flex-wrap justify-between">
            <div className="flex justify-between items-center gap-2">
                <button onClick={() => dispatch({ type: "GRID" })}>Grid</button>
                <button onClick={() => dispatch({ type: "LIST" })}>List</button>
            </div>
            <h2>{FilterProducts.length}Product Shot List</h2>
            <div>
                <form>
                    <label className="mr-2" htmlFor="short">Short By</label>
                    <select onChange={(e) => dispatch({ type: "SHORT", payload: e.target.value })}>
                        <option value="short by" id="short">Please Select </option>
                        <option value="lowest price" id="short">Lowest Price</option>
                        <option value="highest price" id="short">Highest Price</option>
                    </select>
                </form>
            </div>
        </div>
    );
}
export default ProductShotList;