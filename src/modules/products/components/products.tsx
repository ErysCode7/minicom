import { useCartStore } from '@/store/cart';
import { useLayoutStateStore } from '@/store/layout';
import { LAYOUT_STATE } from '@/utils/constants';
import { useEffect } from 'react';
import { useProductsHooks } from '../hooks/hooks';

import dynamic from 'next/dynamic';

const Product = dynamic(() => import('./product'));
const ProductErrorScreen = dynamic(() => import('./product-error-screen'));

// Lazy load the component that depends on client-side data
const ProductSkeleton = dynamic(() => import('./loader/product-skeleton'), { ssr: false });
const ProductsFilter = dynamic(() => import('./products-filter'), { ssr: false });
const ProductsLayoutBtn = dynamic(() => import('./products-layout-btn'), { ssr: false });
const ProductsFilterBtn = dynamic(() => import('./products-filter-btn'), { ssr: false });

type ProductsProps = {
  isErrorFetchingProduct?: unknown;
};

const Products = ({ isErrorFetchingProduct }: ProductsProps) => {
  const {
    // API DATA
    products,
    isLoadingProducts,
  } = useProductsHooks();

  // LAYOUT STORE
  const layoutState = useLayoutStateStore(state => state.layoutState);

  // CART STORE
  const setProductLength = useCartStore(state => state.setProductLength);

  useEffect(() => {
    setProductLength(products?.length || 0);
  }, [products]);

  // LOADING STATE
  if (isLoadingProducts) {
    return <ProductSkeleton />;
  }

  // ERROR STATE
  if (isErrorFetchingProduct) {
    return <ProductErrorScreen />;
  }

  return (
    <div className="flex justify-between gap-5 w-[90%] lg:w-[85%] m-auto my-10">
      {/* FILTER */}
      <div className="hidden laptop:block w-48 flex-shrink-0">
        <ProductsFilter />
      </div>

      <div className="flex-grow">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <ProductsFilterBtn />
            <ProductsLayoutBtn />
          </div>
          <p className="text-xs mobile:text-sm sm:text-base text-black">
            {products?.length} Products Found
          </p>
        </div>

        {/* PRODUCTS LIST */}
        <div
          className={`flex-grow grid ${
            LAYOUT_STATE.horizontal === layoutState
              ? 'grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 standard:grid-cols-4'
              : 'laptop:grid-cols-1'
          }  gap-5`}
        >
          {products?.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
