import { useState } from "react";

export function usePriceFilter(initialValue: number) {
  const [filterPrice, setFilterPrice] = useState(initialValue);

  const handlePricing = (price: number) => {
    setFilterPrice(price);
  };

  return { filterPrice, handlePricing };
}
