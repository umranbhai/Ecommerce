import { useParams } from "react-router"
import { useParentComponent } from "./ParentComponent"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import PriceFormat from "./components/PriceFormat"
import { TbTruckDelivery, TbReplace } from "react-icons/tb"
import { MdSecurity, MdSupport } from "react-icons/md"
import AddToCard from "./components/AddToCard"
import SingalProductImage from "./components/SingalProductImage"
import RatingStars from "./components/RatingStars"
const SingleProduct = () => {
  const { id } = useParams()
  const { API, getFeatureProducts, oneProduct, loading } = useParentComponent()
  const { id: alise, name, category, company, description, stars, stock, reviews, price, image } = oneProduct
  const [count, setCount] = useState(1)
  useEffect(() => {
    getFeatureProducts(`${API}/${id}`)
    console.log(oneProduct)

  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-2xl font-bold">Loading...</div>;
  }

  return (
    <div className="w-[1200px] mx-auto p-4">
      <div>
        <Link to="/">Home</Link>/{name}
      </div>
      <div className="flex flex-wrap justify-between w-full mt-8">
        <div className="oneProductImage w-[100%] lg:w-[50%]">
          <SingalProductImage image={image} />
        </div>
        <div className="oneProductDetails w-[100%] lg:w-[50%]">
          <h2>{name}</h2>
          <RatingStars stars={stars} reviews={reviews} />
          <p className="product-price text-red-500">
            MRP:  <del><PriceFormat price={price + 250000} /></del>
          </p>
          <p className="product-price text-green-500">
            Deal of the day:  <PriceFormat price={price} />
          </p>
          <p>{description}</p>
          <div className="product-warranty flex flex-wrap justify-between border-b-2 border-gray-200 p-4">
            <div className="product-warranty-item flex flex-col items-center">
              <TbTruckDelivery />
              <p>Free Delivery</p>
            </div>
            <div className="product-warranty-item flex flex-col items-center">
              <TbReplace />
              <p>10 Days Replacement</p>
            </div>
            <div className="product-warranty-item flex flex-col items-center">
              <MdSupport />
              <p>24/7 Support</p>
            </div>
            <div className="product-warranty-item flex flex-col items-center">
              <MdSecurity />
              <p>1 Year Warranty</p>
            </div>
          </div>
          <div className="product-stock  p-4">
            <p>Available: <span className="font-bold ">{stock > 0 ? "In Stock" : "Out of Stock"}</span></p>
            <p>ID: <span className="font-bold ">{alise}</span></p>
            <p>Brand:<span className="font-bold uppercase"> {company}</span></p>
          </div>
          <hr />
          {stock > 0 && <AddToCard product={oneProduct} />}
          <div className="stock-count-container p-4">
            <div className="stock-count flex items-center gap-2">
              <button className="px-2 border border-gray-200 bg-gray-200 " onClick={() => count > 1 ? setCount(count - 1) : setCount(1)}>-</button>
              <button className="w-10 text-center">{count}</button>
              <button className="px-2 border border-gray-200 bg-gray-200" onClick={() => count < stock ? setCount(count + 1) : setCount(stock)}>+</button>
            </div>

          </div>
          <div className="product-button flex flex-wrap gap-2  border-b-2 border-gray-200 p-4">
            <button className="bg-red-500 text-white p-3 rounded">Buy Now</button>
            <button className="bg-green-500 text-white p-3 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;