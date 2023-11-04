import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductDetailsRelatedSkeleton = () => {
  const RELATED_PRODUCTS = 3;

  return (
    <div className="mt-10">
      <Skeleton className="font-bold text-base sm:text-2xl mb-5" width={220} />
      <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 standard:grid-cols-4 gap-5">
        {Array.from({ length: RELATED_PRODUCTS }, (_, index) => (
          <Skeleton key={index} className="!h-[360px] !w-full" />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsRelatedSkeleton;
