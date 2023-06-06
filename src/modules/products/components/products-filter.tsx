import { ChangeEvent } from 'react';
import { PRODUCT_CATEGORIES } from '../constants';

type Props = {
  sortState: string;
  limitFilter: string;
  searchProduct: string;
  handleSearchProduct: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCategory: (category: string) => void;
  handleSortFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLimitFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const ProductsFilter = ({
  sortState,
  limitFilter,
  searchProduct,
  handleSearchProduct,
  handleCategory,
  handleSortFilter,
  handleLimitFilter,
}: Props) => {
  return (
    <aside>
      {/* SEARCH INPUT */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search"
          value={searchProduct}
          onChange={handleSearchProduct}
          className={'rounded border-none outline-none p-2'}
        />
      </div>

      {/* CATEGORY */}
      <div className="my-4">
        <h3 className="mb-1 font-bold text-2xl">Category</h3>
        {PRODUCT_CATEGORIES.map(category => (
          <p
            onClick={() => handleCategory(category.category)}
            key={category.id}
            className="text-gray-500 cursor-pointer my-1 capitalize"
          >
            {category.category}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {/* SORT FILTER */}
        <select
          value={sortState}
          onChange={handleSortFilter}
          className="border-none outline-none rounded h-10 w-48 p-1 text-sm"
        >
          <option value="">Filter products</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        {/* LIMIT FILTER */}
        <select
          value={limitFilter}
          onChange={handleLimitFilter}
          className="border-none outline-none rounded h-10 w-48 p-1 text-sm font-bold"
        >
          <option value="">Limit by</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </aside>
  );
};

export default ProductsFilter;
