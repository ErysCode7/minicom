import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import dynamic from 'next/dynamic';

const ProductDetailsRelatedSkeletonLoader = dynamic(
  () => import('./product-details-related-skeleton-loader'),
);

const ProductDetailsSkeletonLoader = () => {
  return (
    <div className="w-[90%] lg:w-[85%] m-auto pb-10">
      <div className="relative flex flex-col laptop:flex-row laptop:gap-10 items-center laptop:h-full laptop:mt-20">
        <div className="flex-1 flex flex-col items-center mt-12 laptop:mt-2">
          <Skeleton className="relative rounded-xl !w-[280px] !h-[280px] mobile:!h-[300px] sm:!h-[350px] laptop:!w-[400px] laptop:!h-[400px] 2xl:!h-[600px] 2xl:!w-[600px] mt-5 laptop:mt-0" />
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex-1 mt-5 pb-10 laptop:mt-0 flex flex-col gap-3">
          <Skeleton height={20} width={200} />
          <Skeleton height={40} />
          <Skeleton height={30} width={300} className="w-![200px] mobile:!w-[300px]" />
          <Skeleton height={30} width={300} className="w-![200px] mobile:!w-[300px]" />
          <Skeleton height={30} width={300} className="w-![200px] mobile:!w-[300px]" />
          <Skeleton height={50} width={300} className="w-![200px] mobile:!w-[300px]" />
          <Skeleton height={50} width={220} />
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <ProductDetailsRelatedSkeletonLoader />
    </div>
  );
};

export default ProductDetailsSkeletonLoader;
