import { useProducts } from '@/services/products/products-api';
import { Categories } from '@/services/products/types';
import { useRouter } from 'next/router';

export const useHooks = () => {
  const router = useRouter();
  const { id } = router?.query;

  const { useGetProductDetails, useGetProductByCategory } = useProducts();

  const { data: productDetails, isLoading: isLoadingProductDetails } = useGetProductDetails(id);
  const { data: productCategory, isError: isErrorProductByCategory } = useGetProductByCategory(
    productDetails?.category as Categories,
  );

  return {
    productDetails,
    isLoadingProductDetails,
    productCategory,
  };
};
