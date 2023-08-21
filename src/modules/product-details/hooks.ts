import { useCartContext } from '@/context/cart-context';
import { useProducts } from '@/services/products/products-api';
import { Categories, Products } from '@/services/products/types';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useHooks = () => {
  const router = useRouter();
  const { id } = router?.query;

  //context
  const { increaseCartQuantity, decreaseCartQuantity } = useCartContext();

  //products data
  const { useGetProductDetails, useGetProductByCategory } = useProducts();

  const { data: productDetails, isLoading: isLoadingProductDetails } = useGetProductDetails(id);
  const { data: productCategory, isError: isErrorProductByCategory } = useGetProductByCategory(
    productDetails?.category as Categories,
  );

  //state
  const [dynamicProductDetails, setDynamicProductDetails] = useState(productDetails);
  const [productQuantity, setProductQuantity] = useState(1);

  //round of product rate
  const rate = Math.round(
    dynamicProductDetails?.rating?.rate || productDetails?.rating?.rate || 0,
  ) as number;

  //dyamic product details
  const handleDynamicProductDetails = (productDetails: Products) => {
    setDynamicProductDetails(productDetails);
  };

  //substract quantity
  const handleSubstractProductQuantity = () => {
    setProductQuantity(prevCount => {
      if (prevCount === 1) {
        return 1;
      } else {
        return prevCount - 1;
      }
    });
  };

  //add quantity
  const handleAddProductQuantity = () => {
    setProductQuantity(prevCount => prevCount + 1);
  };

  const handleAddToCart = (id: number) => {
    increaseCartQuantity(id);
  };

  return {
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
    handleSubstractProductQuantity,
    handleAddProductQuantity,

    //cart functions
    handleAddToCart,
  };
};
