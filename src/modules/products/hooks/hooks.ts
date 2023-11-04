import { useProducts } from '@/services/products/products-api';
import { useProductsFilterStore } from '@/store/products-filter';

export const useProductsHooks = () => {
  // USE PRODUCTS API HOOKS
  const { useGetProducts } = useProducts();

  // PRODUCTS FILTER STORE
  const filterState = useProductsFilterStore(state => state.filterState);

  const { data: products, isLoading: isLoadingProducts } = useGetProducts(filterState);

  // const searchProductResult = useMemo(() => {
  //   return products?.filter(product => product.title.includes(searchProduct));
  // }, [searchProduct]);

  return {
    // API DATA
    products,
    isLoadingProducts,
  };
};
