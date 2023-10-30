import { Button } from '@/components/button';
import { Products } from '@/services/products/types';
import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import StarRatings from 'react-star-ratings';
import { useProductDetailsHooks } from '../hooks/hooks';

type ProductDetailsInfoProps = {
  dynamicProductDetails: Products | undefined;
};

const ProductDetailsInfo = ({ dynamicProductDetails }: ProductDetailsInfoProps) => {
  const {
    //data
    rate,
    //state
    productQuantity,
    //api data
    productDetails,
    //functions
    decreaseProductQuantity,
    increaseProductQuantity,
    //cart functions
    handleAddToCart,
  } = useProductDetailsHooks();

  console.log({ dynamicProductDetails });

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ProductDetailsInfo;
