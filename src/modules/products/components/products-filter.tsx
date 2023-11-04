import { useProductsFilterStore } from '@/store/products-filter';
import { PRODUCT_CATEGORIES } from '../constants';

const ProductsFilter = () => {
  const filterProductSort = useProductsFilterStore(state => state.filterProductSort);
  const filterProductLimit = useProductsFilterStore(state => state.filterProductLimit);

  const setFilterProductCategory = useProductsFilterStore(state => state.setFilterProductCategory);
  const setFilterProductSort = useProductsFilterStore(state => state.setFilterProductSort);
  const setFilterProductLimit = useProductsFilterStore(state => state.setFilterProductLimit);

  return (
    <aside>
      {/* SEARCH INPUT */}
      {/* <div className="mb-5">
        <input
          type="text"
          placeholder="Search"
          value={searchProduct}
          onChange={handleSearchProduct}
          className={'rounded-md border-none outline-none p-2'}
        />
      </div> */}

      {/* CATEGORY */}
      <div className="my-4">
        <h3 className="mb-1 font-bold text-2xl">Category</h3>
        {PRODUCT_CATEGORIES.map(category => (
          <p
            onClick={() => setFilterProductCategory(category.category)}
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
          value={filterProductSort?.split('=')[1]}
          onChange={setFilterProductSort}
          className="border-none outline-none rounded-md h-10 w-48 p-1 text-sm font-bold"
        >
          <option value="">Filter products</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        {/* LIMIT FILTER */}
        <select
          value={filterProductLimit?.split('=')[1]}
          onChange={setFilterProductLimit}
          className="border-none outline-none rounded-md h-10 w-48 p-1 text-sm font-bold"
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
