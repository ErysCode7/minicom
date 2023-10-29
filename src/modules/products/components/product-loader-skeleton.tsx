import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductLoaderSkeleton = () => {
  return (
    <div className="flex justify-between gap-5 w-[90%] lg:w-[85%] m-auto my-10">
      <div>
        <div className="hidden sm:flex w-48 flex-shrink-0 flex-col gap-5">
          <Skeleton height={40} />
          <Skeleton count={5} />
          <Skeleton height={40} />
          <Skeleton height={40} />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Skeleton width={30} height={30} />
          <Skeleton width={30} height={30} />
          <Skeleton width={150} height={20} />
        </div>
        <div className="w-full flex-grow">
          <Skeleton
            containerClassName="flex flex-wrap items-center justify-center laptop:justify-between gap-5"
            count={8}
            className="!h-[220px] !w-[200px] lg:!w-[250px] lg:!h-[180px] xl:!h-[250px] xl:!w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductLoaderSkeleton;
