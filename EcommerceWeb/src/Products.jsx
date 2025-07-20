import FilterSection from "./components/FilterSection";
import ProductShotList from "./components/ProductShotList";
import ProductsPagination from "./components/ProductsPagination";
import { useFilterContext } from "./FilterContext";
const Products = () => {
  const { FilterProducts } = useFilterContext();
  return (
    <div className='w-[1200px] mx-auto text-center bg-gray-100'>
      <section className="flex flex-wrap justify-between">
        <div className="w-[20%] border border-gray-400">
          <FilterSection />
        </div>
        <div className="w-[80%] border border-gray-400">
          <div className="p-4"  >
            <ProductShotList FilterProducts={FilterProducts} />
          </div>
          <div className="p-4">
            <ProductsPagination FilterProducts={FilterProducts} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;