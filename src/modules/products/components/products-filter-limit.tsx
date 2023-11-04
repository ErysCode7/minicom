import { useProductsFilterStore } from '@/store/products-filter';
import { memo } from 'react';

const ProductsFilterLimit = () => {
  // PRODUCTS FILTER STORE
  const filterProductLimit = useProductsFilterStore(state => state.filterProductLimit);
  const setFilterProductLimit = useProductsFilterStore(state => state.setFilterProductLimit);

  const filterLimitValue = filterProductLimit?.split('=')[1] ?? '';

  return (
    <select
      value={filterLimitValue}
      onChange={setFilterProductLimit}
      className="border-none outline-none rounded-md h-10 w-48 p-1 text-sm font-bold"
    >
      <option value="">Limit by</option>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
    </select>
  );
};

export default memo(ProductsFilterLimit);
