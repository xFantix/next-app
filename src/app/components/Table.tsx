import { getProducts } from '@/service/product.service';
import ProductTable from './ProductTable';
export default async function Table() {
  const products = await getProducts();

  return (
    <div className="flex flex-col gap-4">
      <ProductTable products={products} />
    </div>
  );
}
