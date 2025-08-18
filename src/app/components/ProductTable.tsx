'use client';

import { DataTable } from '@/components/DataTable';
import {
  Product,
  ProductForm,
} from '@/types/product';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Filters from './Filters';

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({
  products,
}: ProductTableProps) {
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(products);

  const columns: ColumnDef<Product>[] = [
    {
      header: 'Title',
      accessorKey: 'title',
    },
    {
      header: 'Price',
      accessorKey: 'price',
    },
    {
      header: 'Category',
      accessorKey: 'category',
    },
  ];

  const form = useForm<ProductForm>({
    mode: 'onChange',
    defaultValues: {
      search: '',
      sort: '',
      category: '',
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <Filters
        form={form}
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <DataTable
        columns={columns}
        data={filteredProducts}
      />
    </div>
  );
}
