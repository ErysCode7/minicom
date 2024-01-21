import dynamic from 'next/dynamic';

// Lazy load the component that depends on client-side data
const ProductsFilterSearch = dynamic(() => import('./products-filter-search'), { ssr: false });
const ProductsFilterCategory = dynamic(() => import('./products-filter-category'), { ssr: false });
const ProductsFilterSort = dynamic(() => import('./products-filter-sort'), { ssr: false });
const ProductsFilterLimit = dynamic(() => import('./products-filter-limit'), { ssr: false });

const ProductsFilter = () => {
  return (
    <aside>
      {/* SEARCH INPUT */}
      {/* TODO: ADD FILTER SEARCH */}
      {/* <div className="mb-5">
        <ProductsFilterSearch />
      </div> */}

      {/* CATEGORY */}
      <div className="mb-4">
        <h3 className="mb-1 font-bold text-2xl">Category</h3>
        <ProductsFilterCategory />
      </div>

      <div className="flex flex-col gap-3">
        {/* SORT FILTER */}
        <ProductsFilterSort />

        {/* LIMIT FILTER */}
        <ProductsFilterLimit />
      </div>
    </aside>
  );
};

export default ProductsFilter;
