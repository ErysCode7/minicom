import { useProductsFilterStore } from '@/store/products-filter';
import React from 'react';
import { BsFilter } from 'react-icons/bs';

const ProductsHideFilterBtn = () => {
  // PRODUCTS FILTER STORE
  const showFilterSideBar = useProductsFilterStore(state => state.showFilterSideBar);
  const setShowFilterSideBar = useProductsFilterStore(state => state.setShowFilterSideBar);

  return (
    <React.Fragment>
      <button
        onClick={setShowFilterSideBar}
        type="button"
        className="items-center justify-between gap-3 border-gray-500 border py-2 px-3 rounded-md outline-none active:scale-95 transition duration-200 tracking-wide font-bold hidden laptop:flex"
      >
        {showFilterSideBar ? 'Hide ' : 'Show '}
        Filters <BsFilter />
      </button>
    </React.Fragment>
  );
};

export default ProductsHideFilterBtn;
