export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ProductForm = Record<
  'search' | 'sort' | 'category',
  string
>;

export enum ProductSort {
  CATEGORY_ASC = 'Category (A-Z)',
  CATEGORY_DESC = 'Category (Z-A)',
  PRICE_ASC = 'Price (Low to High)',
  PRICE_DESC = 'Price (High to Low)',
}
