import { useCartStore } from '@/store/cart';
import { LAYOUT_STATE } from '@/utils/constants';
import { useEffect } from 'react';
import { useProductsHooks } from '../hooks/hooks';

import dynamic from 'next/dynamic';

const Product = dynamic(() => import('./product'));
const ProductErrorScreen = dynamic(() => import('./product-error-screen'));
const ProductSkeleton = dynamic(() => import('./loader/product-skeleton'));
const ProductsFilter = dynamic(() => import('./products-filter'));
const ProductsLayoutBtn = dynamic(() => import('./products-layout-btn'));

type ProductsProps = {
  isErrorFetchingProduct?: unknown;
};

const Products = ({ isErrorFetchingProduct }: ProductsProps) => {
  const {
    layoutState,
    setLayoutState,
    // API DATA
    products,
    isLoadingProducts,
  } = useProductsHooks();

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
          <ProductsLayoutBtn layoutState={layoutState} setLayoutState={setLayoutState} />
          <p className="text-black">{products?.length} Products Found</p>
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
            <Product key={product.id} product={product} layoutState={layoutState} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
