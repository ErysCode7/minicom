import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useHooks } from '../hooks';
import Product from './product';
import ProductsFilter from './products-filter';

type Props = {
  isError: unknown;
};

const Products = ({ isError }: Props) => {
  const {
    // state
    sortState,
    limitFilter,
    searchProduct,
    productCategory,
    // state func
    setProductCategory,
    // PRODUCTS API DATA
    products,
    isLoadingProducts,
    // functions
    handleSearchProduct,
    handleCategory,
    handleSortFilter,
    handleLimitFilter,
  } = useHooks();

  if (isLoadingProducts) {
    return (
      <div className="flex justify-between gap-5 w-[90%] lg:w-[85%] m-auto my-10">
        <div className="hidden sm:block w-48 flex-shrink-0">
          <Skeleton count={12} />
        </div>
        <div className="w-full flex-grow">
          <Skeleton
            containerClassName="flex flex-wrap items-center justify-center laptop:justify-between gap-5"
            count={12}
            className="!h-[220px] !w-[200px] lg:!w-[180px] lg:!h-[180px] xl:!h-[200px] xl:!w-[200px]"
          />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 standard:grid-cols-4 gap-5">
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-between gap-5 w-[90%] lg:w-[85%] m-auto my-10">
      {/* FILTER */}
      <div className="hidden sm:block w-48 flex-shrink-0">
        <ProductsFilter
          sortState={sortState}
          limitFilter={limitFilter}
          searchProduct={searchProduct}
          handleSearchProduct={handleSearchProduct}
          handleCategory={handleCategory}
          handleSortFilter={handleSortFilter}
          handleLimitFilter={handleLimitFilter}
        />
      </div>

      {/* PRODUCTS LIST */}
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 standard:grid-cols-4 gap-5">
        {products?.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
