import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductLoaderSkeleton = () => {
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
};

export default ProductLoaderSkeleton;
