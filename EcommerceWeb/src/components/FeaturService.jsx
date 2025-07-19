
import { useParentComponent } from "../ParentComponent";
import { Link } from "react-router";
import PriceFormat from "./PriceFormat";
function FeaturService() {
    const { featureProducts, loading } = useParentComponent();
    return (
        <div className="featur-service text-start">
            <div className="featur-service-header">
                <span>New Product</span>
                <h2 className="text-2xl font-bold">FeaturService</h2>
            </div>
            <div className="featur-service-content flex flex-wrap justify-between" >
                {loading && <h2 className="flex justify-center items-center h-screen text-2xl font-bold">Loading...</h2>}
                {featureProducts.map((item) => (
                    <div className="featur-service-content-item w-[20%]" key={item.id}>
                        <Link to={`/singleProduct/${item.id}`}>
                            <img src={item.image} alt="Product 1" className="gallery-image" />
                            <div className=" flex   justify-between">
                                <div>{item.name}</div>
                                <div><PriceFormat price={item.price} /></div>
                            </div>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default FeaturService;
