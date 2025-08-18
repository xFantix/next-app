'use client';

import Input from '@/components/Input';
import Select from '@/components/Select';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
} from '@/components/ui/form';
import { sortProducts } from '@/helpers/products';
import {
  Product,
  ProductForm,
  ProductSort,
} from '@/types/product';
import { useMemo } from 'react';
import { UseFormReturn } from 'react-hook-form';
interface FiltersProps {
  products: Product[];
  form: UseFormReturn<ProductForm>;
  setFilteredProducts: (
    products: Product[]
  ) => void;
}

export default function Filters({
  products,
  form,
  setFilteredProducts,
}: FiltersProps) {
  const optionsSort = useMemo(() => {
    return Object.values(ProductSort);
  }, []);

  const categories = useMemo(() => {
    return Array.from(
      new Set(
        products?.map(product => product.category)
      )
    );
  }, [products]);

  const onSubmit = async (data: ProductForm) => {
    const filtered = products
      .filter(
        product =>
          !data.search ||
          product.title
            .toLowerCase()
            .includes(data.search.toLowerCase())
      )
      .filter(
        product =>
          !data.category ||
          product.category === data.category
      );

    const sorted = data.sort
      ? sortProducts(
          filtered,
          data.sort as ProductSort
        )
      : filtered;

    setFilteredProducts(sorted);
  };

  const onReset = () => {
    setFilteredProducts(products);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 flex-wrap"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <Input
              placeholder="Search"
              {...field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="sort"
          render={({ field }) => (
            <Select
              options={optionsSort}
              placeholder="Sort by"
              {...field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <Select
              options={categories}
              placeholder="Category"
              {...field}
            />
          )}
        />
        <Button type="submit">Filter</Button>
        <Button
          type="button"
          variant={'outline'}
          onClick={onReset}
        >
          Reset
        </Button>
      </form>
    </Form>
  );
}
