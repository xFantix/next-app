import { getProducts } from '@/service/product.service';
import { Suspense } from 'react';
import ProductTable from './ProductTable';
export default async function Table() {
  const products = await getProducts();

  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductTable products={products} />
      </Suspense>
    </div>
  );
}
