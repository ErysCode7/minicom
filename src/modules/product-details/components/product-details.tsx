import { Button } from '@/components/button';
import { ROUTES } from '@/utils/constants';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BiMinus, BiPlus } from 'react-icons/bi';
import StarRatings from 'react-star-ratings';
import { useProductDetailsHooks } from '../hooks/hooks';

import dynamic from 'next/dynamic';

const Product = dynamic(() => import('@/modules/products/components/product'));
const ProductErrorScreen = dynamic(
  () => import('@/modules/products/components/product-error-screen'),
);
const ProductDetailsSkeletonLoader = dynamic(() => import('./product-details-loader-skeleton'));

type ProductDetailsProps = {
  isErrorFetchingProduct: unknown;
};

const ProductDetails = ({ isErrorFetchingProduct }: ProductDetailsProps) => {
  const router = useRouter();

  const {
    //data
    rate,
    //state
    dynamicProductDetails,
    productQuantity,
    //api data
    productDetails,
    isLoadingProductDetails,
    productCategory,
    //functions
    handleDynamicProductDetails,
    decreaseProductQuantity,
    increaseProductQuantity,
    //cart functions
    handleAddToCart,
  } = useProductDetailsHooks();

  if (isLoadingProductDetails) {
    return <ProductDetailsSkeletonLoader />;
  }

  // IS ERROR FETCHING PRODUCTS
  if (isErrorFetchingProduct) {
    return <ProductErrorScreen />;
  }

  return (
    <div className="w-[90%] lg:w-[85%] m-auto pb-10">
      <div className="relative flex flex-col laptop:flex-row laptop:gap-10 items-center laptop:h-full laptop:mt-20">
        <div className="absolute top-3 left-0 laptop:top-[-50px] xl:left-20">
          <Button text="Back to Products" onClick={() => router.push(ROUTES.PRODUCTS)} />
        </div>
        <div className="flex-1 flex flex-col items-center mt-12 laptop:mt-2">
          <div className="relative rounded-xl w-[280px] h-[280px] mobile:w-full mobile:h-[300px] sm:h-[350px] laptop:w-[400px] laptop:h-[400px] 2xl:h-[600px] 2xl:w-[600px] mt-5 laptop:mt-0">
            <Image
              src={dynamicProductDetails?.image || productDetails?.image || ''}
              alt={productDetails?.title || 'Image'}
              fill
              className="rounded"
            />
          </div>

          <div
            className={`${
              productDetails?.category && productCategory && productCategory?.length > 4
                ? `flex-wrap justify-center`
                : ''
            } flex items-center gap-2 mt-5 laptop:mt-2 laptop:h-full`}
          >
            {productCategory?.map(category => {
              return (
                <div
                  onClick={() => handleDynamicProductDetails(category)}
                  key={category.id}
                  className="relative w-[70px] h-[70px] mobile:w-20 mobile:h-20 sm:h-[100px] sm:w-[100px] laptop:cursor-pointer"
                >
                  <Image src={category.image} alt={category.title} fill />
                </div>
              );
            })}
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex-1 mt-5 pb-10 laptop:mt-0">
          <p className="uppercase text-gray-400 text-sm">
            {dynamicProductDetails?.category || productDetails?.category}
          </p>
          <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl">
            {dynamicProductDetails?.title || productDetails?.title}
          </h2>
          <div>
            <StarRatings
              starDimension="20px"
              starSpacing="2px"
              rating={rate}
              starRatedColor="rgb(34 197 94)"
              numberOfStars={5}
              name="rating"
            />
          </div>
          <p className="text-gray-500 mt-3 mb-5">
            {dynamicProductDetails?.description || productDetails?.description}
          </p>
          <div className="flex-1 flex items-center justify-between">
            <div>
              <p className="text-green-500 text-base sm:text-xl md:text-2xl">
                ${dynamicProductDetails?.price || productDetails?.price}
              </p>
              <div className="my-5 hidden laptop:flex items-center gap-5">
                {/* <button type="button" className="rounded p-2 bg-blue-500 text-white active:scale-95 w-28">
                  Buy it now
                </button> */}
                <button
                  type="button"
                  className="laptop:cursor-pointer"
                  onClick={() => decreaseProductQuantity(dynamicProductDetails?.id || 0)}
                >
                  <BiMinus size={30} />
                </button>
                <div className="text-center w-8">
                  <p className="font-bold text-2xl laptop:text-4xl">{productQuantity}</p>
                </div>
                <button
                  type="button"
                  className="laptop:cursor-pointer"
                  onClick={increaseProductQuantity}
                >
                  <BiPlus size={30} />
                </button>
              </div>
              <div className="mt-2 laptop:mt-0">
                <Button
                  text="Add to cart"
                  onClick={() => handleAddToCart(dynamicProductDetails?.id || 0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {productDetails?.category && productCategory && productCategory?.length > 0 ? (
        <div className="mt-10 laptop:mt-20">
          <h2 className="font-bold text-base sm:text-2xl mb-5">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 standard:grid-cols-4 gap-5">
            {productCategory
              ?.filter(category => category.id !== productDetails?.id)
              ?.map(category => {
                return <Product key={category.id} product={category} />;
              })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
