
export interface IProduct {
  id: string;
  title: string;
  price: number;
  rating: { rate: number };
  image: string;
}

interface IProductProps {
  product: IProduct;
}

export function Product(props: IProductProps) {
  const { product } = props;
  const { title, price, rating } = product;

  return (
      <div>
        <a href="#">
          <h4>
            {title}
          </h4>
        </a>
        <div>
          <span>
            {Math.trunc(rating.rate)}
          </span>
        </div>
        <div>
          <span>
            ${price}
          </span>
        </div>
      </div>
  );
}
