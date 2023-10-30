import { useProducts } from '@/services/products/products-api';
import { useLayoutStateStore } from '@/store/layout';
import { ChangeEvent, useState } from 'react';

export const useProductsHooks = () => {
  // USE PRODUCTS API HOOKS
  const { useGetProducts } = useProducts();

  // LAYOUT STORE
  const layoutState = useLayoutStateStore(state => state.layoutState);
  const setLayoutState = useLayoutStateStore(state => state.setLayoutState);

  // STATE
  const [searchProduct, setSearchProduct] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [sortState, setSortState] = useState('');
  const [limitFilter, setLimitFilter] = useState('');

  const filterState = productCategory ? productCategory : sortState ? sortState : limitFilter;

  const { data: products, isLoading: isLoadingProducts } = useGetProducts(filterState);

  // const searchProductResult = useMemo(() => {
  //   return products?.filter(product => product.title.includes(searchProduct));
  // }, [searchProduct]);

  // ------ FILTERS ------

  // SEARCH
  const handleSearchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProductCategory('');
    setSearchProduct(value);
  };

  // CATEGORY
  const handleCategory = (category: string) => {
    setSortState('');
    setLimitFilter('');
    setProductCategory(`/category/${category}`);
  };

  // SORT
  const handleSortFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setLimitFilter('');
    setProductCategory('');
    setSortState(`?sort=${e.target.value}`);
  };

  // LIMIT
  const handleLimitFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortState('');
    setProductCategory('');
    setLimitFilter(`?limit=${e.target.value}`);
  };

  return {
    // searchProductResult,
    // STATE
    sortState,
    limitFilter,
    searchProduct,
    productCategory,
    layoutState,
    // STATE FUNCTIONS
    setProductCategory,
    setLayoutState,
    // API DATA
    products,
    isLoadingProducts,
    // FUNCTIONS
    handleSearchProduct,
    handleCategory,
    handleSortFilter,
    handleLimitFilter,
  };
};
