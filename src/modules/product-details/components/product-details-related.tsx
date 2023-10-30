import React from 'react';
import { useProductDetailsHooks } from '../hooks/hooks';

import dynamic from 'next/dynamic';

const Product = dynamic(() => import('@/modules/products/components/product'));

const ProductDetailsRelated = () => {
  const {
    // API DATA
    productDetails,
    productCategory,
  } = useProductDetailsHooks();

  return (
    <React.Fragment>
      {/* RELATED PRODUCTS */}
      {productDetails?.category && productCategory && productCategory?.length > 0 ? (
        <div className="mt-10 laptop:mt-20">
          <h2 className="font-bold text-base sm:text-2xl mb-5">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 standard:grid-cols-4 gap-5">
            {productCategory
              ?.filter(category => category.id !== productDetails?.id)
              ?.map(category => {
                return <Product key={category.id} product={category} />;
              })}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ProductDetailsRelated;
