import { IProduct, Product } from "./product";
import { Filter, filterProducts } from "./filter";
import { useProducts } from "./hooks/useProducts";
import { usePriceFilter } from "./hooks/usePriceFilter";


export function SRP() {
  const { products } = useProducts();

  const {filterPrice, handlePricing} = usePriceFilter(21);

  return (
    <div>
      <Filter filterPrice={filterPrice}/>
      <div>
        {filterProducts(products, filterPrice).map((product: IProduct) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
