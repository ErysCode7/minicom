import Product from '@/modules/products/components/product';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import { useHooks } from '../hooks';

type Props = {};

const ProductDetails = (props: Props) => {
  const { productDetails, isLoadingProductDetails, productCategory } = useHooks();

  const rate = Math.round(productDetails?.rating?.rate ?? 0) as number;

  if (isLoadingProductDetails) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="w-[90%] lg:w-[85%] m-auto pb-10">
      <div className="flex flex-col laptop:flex-row laptop:gap-10 items-center h-[calc(100vh_-_80px)] laptop:h-full laptop:mt-20">
        <div className="flex-1 relative rounded-xl w-[280px] h-[280px] mobile:w-full mobile:h-[300px] sm:h-[350px] laptop:w-[300px] laptop:h-[400px] mt-5 laptop:mt-0">
          <Image
            src={productDetails?.image ?? ''}
            alt={productDetails?.title ?? 'Image'}
            fill
            className="object-contain"
          />
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
          <p className="text-gray-500 mt-3 mb-5">{productDetails?.description}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-500 text-base sm:text-xl md:text-2xl">
                ${productDetails?.price}
              </p>
              <div className="mt-5 hidden laptop:flex items-center gap-2">
                <button className="rounded p-2 bg-blue-500 text-white active:scale-95 w-28">
                  Buy it now
                </button>
                <button className="rounded p-2 bg-blue-500 text-white active:scale-95 w-28">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-base sm:text-2xl mb-5">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 standard:grid-cols-4 gap-5">
          {productCategory
            ?.filter(category => category.id !== productDetails?.id)
            ?.map(category => {
              return <Product key={category.id} product={category} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
