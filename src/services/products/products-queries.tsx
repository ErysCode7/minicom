import { QueryKey, useQuery } from '@tanstack/react-query';
import { getProductByCategory, getProductDetails, getProducts } from './products-api';
import { QUERY_KEYS } from './products-keys';
import { Categories, Products } from './types';

export const useGetProducts = (filteredProducts?: string) => {
  return useQuery<Products[]>({
    queryKey: [QUERY_KEYS.GET_PRODUCTS, filteredProducts],
    queryFn: async () => getProducts(filteredProducts),
  } as { queryKey: QueryKey });
};

export const useGetProductDetails = (id: any) => {
  return useQuery<Products>({
    queryKey: [QUERY_KEYS.GET_SINGLE_PRODUCT, id],
    queryFn: async () => getProductDetails(id),
  } as { queryKey: QueryKey });
};

export const useGetProductByCategory = (category: Categories) => {
  return useQuery<Products[]>({
    queryKey: [QUERY_KEYS.GET_PRODUCT_CATEGORY, category],
    queryFn: async () => getProductByCategory(category),
    enabled: !!category,
  } as { queryKey: QueryKey });
};
