import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CartContainerSkeleton = () => {
  return (
    <div className="w-[90%] lg:w-[85%] m-auto">
      <Skeleton className="rounded p-5 my-10 h-[260px] sm:h-[300px] md:w-[350px]" />
    </div>
  );
};

export default CartContainerSkeleton;
