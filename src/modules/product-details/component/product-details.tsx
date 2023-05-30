import Image from 'next/image';
import { useHooks } from '../hooks';

type Props = {};

const ProductDetails = (props: Props) => {
  const { productDetails, isLoadingProductDetails } = useHooks();

  console.log(productDetails);

  if (isLoadingProductDetails) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="w-[90%] lg:w-[85%] m-auto flex flex-col laptop:flex-row items-center h-[calc(100vh_-_80px)]">
      <div className="flex-1 relative w-[280px] h-[280px] mobile:w-full mobile:h-[300px] sm:h-[350px] laptop:w-[400px] laptop:h-[500px] rounded mt-5 laptop:mt-0">
        <Image
          src={productDetails?.image ?? ''}
          alt={productDetails?.title ?? 'Image'}
          fill
          className="object-contain rounded"
        />
      </div>
      <div className="flex-1 mt-5 pb-10 laptop:mt-0">
        <p className="uppercase text-gray-400">{productDetails?.category}</p>
        <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl">{productDetails?.title}</h2>
        <p className="text-gray-500 mt-3">{productDetails?.description}</p>
        <div className="flex items-center gap-2 my-2">
          <h4 className="text-base sm:text-xl">Category</h4>
          <p className="capitalize text-base sm:text-xl">{productDetails?.category}</p>
        </div>

        <p className="text-green-500 text-base sm:text-xl md:text-2xl">${productDetails?.price}</p>
        <div className="mt-3">
          <p>Count: {productDetails?.rating?.count}</p>
          <p>Rate: {productDetails?.rating?.rate}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
