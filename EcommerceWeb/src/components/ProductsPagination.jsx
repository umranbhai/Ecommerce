import { useState } from "react";
import { useFilterContext } from "../FilterContext";
import PriceFormat from "./PriceFormat";
import { Link } from "react-router";
const ProductsPagination = () => {
    const { FilterProducts, grid, list } = useFilterContext();
    return (
        <div className="flex flex-wrap justify-between">
            {
                FilterProducts.length > 0 ? (
                    FilterProducts.map((item) => (
                        grid ? (

                            <div key={item.id} className="lg:w-[32%] my-4 bg-white p-4 flex flex-col flex-wrap justify-between">
                                <Link to={`/singleProduct/${item.id}`}>
                                    <img src={item.image} alt={item.name} />
                                    <div className="flex justify-between">
                                        <h2 className="text-lg font-bold">{item.name}</h2>
                                        <p><PriceFormat price={item.price} /></p>
                                    </div>
                                </Link>
                            </div>

                        ) : (
                            <Link to={`/singleProduct/${item.id}`}>
                                <div key={item.id} className="lg:w-[100%] my-4 bg-white p-4 flex flex-wrap justify-between">
                                    <img className="w-[50%]" src={item.image} alt={item.name} />
                                    <div className="flex flex-col text-start w-[40%] gap-2">
                                        <h2 className="text-lg font-bold">{item.name}</h2>
                                        <p><PriceFormat price={item.price} /></p>
                                        <p>{item.description}</p>
                                        <button className="bg-green-500 text-white p-2">Add to Cart</button>
                                    </div>
                                </div>
                            </Link>
                        )
                    )
                    )
                )
                    : (
                        <h2>No Products Found</h2>
                    )
            }

        </div >
    );
}
export default ProductsPagination;