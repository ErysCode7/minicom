import { useProductsFilterStore } from '@/store/products-filter';
import React, { memo } from 'react';
import { PRODUCT_CATEGORIES } from '../constants';

const ProductsFilterCategory = () => {
  // PRODUCTS FILTER STORE
  const setFilterProductCategory = useProductsFilterStore(state => state.setFilterProductCategory);

  return (
    <React.Fragment>
      {PRODUCT_CATEGORIES.map(category => (
        <p
          onClick={() => setFilterProductCategory(category.category)}
          key={category.id}
          className="text-gray-500 cursor-pointer my-1 capitalize"
        >
          {category.category}
        </p>
      ))}
    </React.Fragment>
  );
};

export default memo(ProductsFilterCategory);
