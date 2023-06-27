import { useProducts } from '@/services/products/products-api';

export const useHooks = () => {
  const { useGetProducts } = useProducts();

  const { data: products, isLoading: isLoadingProducts } = useGetProducts('');

  return {
    products,
  };
};
