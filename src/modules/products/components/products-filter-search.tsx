import { memo } from 'react';

const ProductsFilterSearch = () => {
  return (
    <input
      type="text"
      placeholder="Search"
      // value={searchProduct}
      // onChange={handleSearchProduct}
      className="rounded-md border outline-none p-2 w-full"
    />
  );
};

export default memo(ProductsFilterSearch);
