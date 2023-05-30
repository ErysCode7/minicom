import { useProducts } from '@/services/products/products-api';
import { useRouter } from 'next/router';

export const useHooks = () => {
  const router = useRouter();
  const { id } = router.query;

  const { useGetProductDetails } = useProducts();

  const { data: productDetails, isLoading: isLoadingProductDetails } = useGetProductDetails(id);

  return {
    productDetails,
    isLoadingProductDetails,
  };
};
