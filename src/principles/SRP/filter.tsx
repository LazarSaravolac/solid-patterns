import { IProduct } from "./product";

export function filterProducts(products: IProduct[], price: number) : IProduct[] {
  return products.filter(
    (product: IProduct) => product.price > price
  );
}

interface IFilterProps {
  filterPrice: number;
}

export function Filter(props: IFilterProps) {
  const { filterPrice } = props;

  return (
    <div>
      <span>Minimum price you are searching is: {filterPrice}</span>
    </div>
  );
}
