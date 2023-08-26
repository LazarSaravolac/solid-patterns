import { Product } from "./product";
import { Filter, filterProducts } from "./filter";
import { useProducts } from "./hooks/useProducts";
import { usePriceFilter } from "./hooks/usePriceFilter";

export function Good() {
  const { products } = useProducts();

  const {filterPrice, handlePricing} = usePriceFilter(21);

  const handleInput = (value: string) : number => {
    if(value === ""){
      return 0;
    }

    return parseInt(value);
  }

  return (
    <div>
      <input value={filterPrice} onChange={(e)=>handlePricing(handleInput(e.target.value))}/>
      <Filter filterPrice={filterPrice}/>
      <div>
        {filterProducts(products, filterPrice).map((product: any) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
