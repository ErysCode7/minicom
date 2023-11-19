import { useGetProducts } from '@/services/products/products-queries';
import { useProductsFilterStore } from '@/store/products-filter';

export const useProductsHooks = () => {
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
