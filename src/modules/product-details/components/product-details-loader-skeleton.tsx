import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductDetailsSkeletonLoader = () => {
  const RELATED_PRODUCTS = 3;

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
      <div className="mt-10">
        <Skeleton className="font-bold text-base sm:text-2xl mb-5" width={220} />
        <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 standard:grid-cols-4 gap-5">
          {Array.from({ length: RELATED_PRODUCTS }, (_, index) => (
            <Skeleton key={index} className="!h-[360px] !w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeletonLoader;
