import { Product } from '@/types/product';

import { ProductSort } from '@/types/product';

const compareFunctions: Record<
  ProductSort,
  (a: Product, b: Product) => number
> = {
  [ProductSort.CATEGORY_ASC]: (a, b) =>
    a.category.localeCompare(b.category),
  [ProductSort.CATEGORY_DESC]: (a, b) =>
    b.category.localeCompare(a.category),
  [ProductSort.PRICE_ASC]: (a, b) =>
    a.price - b.price,
  [ProductSort.PRICE_DESC]: (a, b) =>
    b.price - a.price,
};

export const sortProducts = (
  products: Product[],
  sort: ProductSort
) => {
  const productsCopy = [...products];
  const compareFn = compareFunctions[sort];
  return compareFn
    ? productsCopy.sort(compareFn)
    : productsCopy;
};
