import { useProductsFilterStore } from '@/store/products-filter';
import { memo } from 'react';

const ProductsFilterSort = () => {
  // PRODUCTS FILTER STORE
  const filterProductSort = useProductsFilterStore(state => state.filterProductSort);
  const setFilterProductSort = useProductsFilterStore(state => state.setFilterProductSort);

  const filterSortValue = filterProductSort?.split('=')[1] ?? '';

  return (
    <select
      value={filterSortValue}
      onChange={setFilterProductSort}
      className="border outline-none rounded-md h-10 w-48 p-1 text-sm font-bold"
    >
      <option value="">Filter products</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
};

export default memo(ProductsFilterSort);
