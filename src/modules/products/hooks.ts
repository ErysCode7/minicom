import { useProducts } from '@/services/products/products-api';
import { ChangeEvent, useState } from 'react';

export const useHooks = () => {
  const { useGetProducts } = useProducts();

  //state
  const [searchProduct, setSearchProduct] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [sortState, setSortState] = useState('');
  const [limitFilter, setLimitFilter] = useState('');

  const filterState = productCategory ? productCategory : sortState ? sortState : limitFilter;

  const { data: products, isLoading: isLoadingProducts } = useGetProducts(filterState);

  // const searchProductResult = useMemo(() => {
  //   return products?.filter(product => product.title.includes(searchProduct));
  // }, [searchProduct]);

  // --- FILTERS ---

  // search
  const handleSearchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProductCategory('');
    setSearchProduct(value);
  };

  // category
  const handleCategory = (category: string) => {
    setSortState('');
    setLimitFilter('');
    setProductCategory(`/category/${category}`);
  };

  // sort
  const handleSortFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setLimitFilter('');
    setProductCategory('');
    setSortState(`?sort=${e.target.value}`);
  };

  // limit
  const handleLimitFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortState('');
    setProductCategory('');
    setLimitFilter(`?limit=${e.target.value}`);
  };

  return {
    // searchProductResult,
    // state
    sortState,
    limitFilter,
    searchProduct,
    productCategory,
    // state func
    setProductCategory,
    // PRODUCTS API DATA
    products,
    isLoadingProducts,
    // functions
    handleSearchProduct,
    handleCategory,
    handleSortFilter,
    handleLimitFilter,
  };
};
