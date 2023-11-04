import { memo } from 'react';

const ProductsFilterSearch = () => {
  return (
    <input
      type="text"
      placeholder="Search"
      // value={searchProduct}
      // onChange={handleSearchProduct}
      className={'rounded-md border-none outline-none p-2'}
    />
  );
};

export default memo(ProductsFilterSearch);
