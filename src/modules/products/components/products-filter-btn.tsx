import { useProductsFilterStore } from '@/store/products-filter';
import React from 'react';
import { BsFilter } from 'react-icons/bs';

const ProductsFilterBtn = () => {
  // PRODUCTS FILTER STORE
  const setShowFilterModal = useProductsFilterStore(state => state.setShowFilterModal);

  return (
    <React.Fragment>
      <button
        onClick={() => setShowFilterModal(true)}
        type="button"
        className="w-28 flex items-center justify-between gap-3 border-gray-500 border py-2 px-3 rounded-md outline-none active:scale-95 transition duration-200 tracking-wide font-bold laptop:hidden"
      >
        Filter <BsFilter />
      </button>
    </React.Fragment>
  );
};

export default ProductsFilterBtn;
