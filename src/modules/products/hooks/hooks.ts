import { useProducts } from '@/services/products/products-api';
import { useLayoutStateStore } from '@/store/layout';
import { useProductsFilterStore } from '@/store/products-filter';

export const useProductsHooks = () => {
  // USE PRODUCTS API HOOKS
  const { useGetProducts } = useProducts();

  // LAYOUT STORE
  const layoutState = useLayoutStateStore(state => state.layoutState);
  const setLayoutState = useLayoutStateStore(state => state.setLayoutState);

  // PRODUCTS FILTER STORE
  const filterState = useProductsFilterStore(state => state.filterState);

  const { data: products, isLoading: isLoadingProducts } = useGetProducts(filterState);

  // const searchProductResult = useMemo(() => {
  //   return products?.filter(product => product.title.includes(searchProduct));
  // }, [searchProduct]);

  return {
    layoutState,
    setLayoutState,
    // API DATA
    products,
    isLoadingProducts,
  };
};
