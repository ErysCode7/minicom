import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import { useHooks } from '../hooks';

type Props = {};

const ProductDetails = (props: Props) => {
  const { productDetails, isLoadingProductDetails } = useHooks();

  console.log(productDetails);

  const rate = Math.round(productDetails?.rating?.rate ?? 0) as number;

  if (isLoadingProductDetails) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="w-[90%] lg:w-[85%] m-auto flex flex-col laptop:flex-row laptop:gap-10 items-center h-[calc(100vh_-_80px)]">
      <div className="flex-1 relative rounded-xl w-[280px] h-[280px] mobile:w-full mobile:h-[300px] sm:h-[350px] laptop:w-[300px] laptop:h-[450px] mt-5 laptop:mt-0">
        <Image src={productDetails?.image ?? ''} alt={productDetails?.title ?? 'Image'} fill />
      </div>
      <div className="flex-1 mt-5 pb-10 laptop:mt-0">
        <p className="uppercase text-gray-400 text-sm">{productDetails?.category}</p>
        <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl">{productDetails?.title}</h2>
        <div>
          <StarRatings
            starDimension="20px"
            starSpacing="2px"
            rating={rate}
            starRatedColor="rgb(34 197 94)"
            numberOfStars={5}
            name="rating"
          />
          <p>{rate}</p>
        </div>
        <p className="text-gray-500 my-3">{productDetails?.description}</p>
        <p className="text-green-500 text-base sm:text-xl md:text-2xl">${productDetails?.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
