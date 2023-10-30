import { Products } from '@/services/products/types';
import Image from 'next/image';
import React from 'react';
import { useProductDetailsHooks } from '../hooks/hooks';

type ProductDetailsHeroProps = {
  dynamicProductDetails: Products | undefined;
  handleDynamicProductDetails: (productDetails: Products) => void;
};

const ProductDetailsHero = ({
  dynamicProductDetails,
  handleDynamicProductDetails,
}: ProductDetailsHeroProps) => {
  const {
    // API DATA
    productDetails,
    productCategory,
  } = useProductDetailsHooks();

  return (
    <React.Fragment>
      {/* PRODUCT HERO */}
      <div className="flex-1 flex flex-col items-center mt-12 laptop:mt-2">
        <div className="relative rounded-xl w-[280px] h-[280px] mobile:w-full mobile:h-[300px] sm:h-[350px] laptop:w-[400px] laptop:h-[400px] 2xl:h-[600px] 2xl:w-[600px] mt-5 laptop:mt-0">
          <Image
            src={dynamicProductDetails?.image || productDetails?.image || ''}
            alt={productDetails?.title || 'Image'}
            fill
            className="rounded"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33.3vw, 400px"
          />
        </div>

        <div
          className={`${
            productDetails?.category && productCategory && productCategory?.length > 4
              ? `flex-wrap justify-center`
              : ''
          } flex items-center gap-2 mt-5 laptop:mt-3 laptop:h-full`}
        >
          {productCategory?.map(category => {
            return (
              <div
                onClick={() => handleDynamicProductDetails(category)}
                key={category.id}
                className="relative w-[70px] h-[70px] mobile:w-20 mobile:h-20 sm:h-[100px] sm:w-[100px] laptop:cursor-pointer active:scale-[101%]"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 100px, (max-width: 768px) 50px, (max-width: 1024px) 80px, 100px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetailsHero;
