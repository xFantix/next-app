'use server';

import { Product } from '@/types/product';
import { get } from '@/utils/api';
import { endpoints } from '@/utils/endpoints';

const getProducts = async (): Promise<
  Product[]
> => {
  const response = await get(endpoints.products);
  return (await response.json()) as Product[];
};

export { getProducts };
