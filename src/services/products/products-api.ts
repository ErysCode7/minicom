import { QueryKey, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Categories, Products } from './types';

export const BASE_URL = 'https://fakestoreapi.com/products';

export const useProducts = () => {
  // Get all products
  const getProducts = async (): Promise<Products[]> => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (err) {
      return [];
    }
  };

  // Get a single product
  const getProductDetails = async (id: any): Promise<Products | unknown> => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  // Get products in a specific category
  const getProductByCategory = async (category: Categories): Promise<Products | unknown> => {
    try {
      const response = await axios.get(`${BASE_URL}/category/${category}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  // ----- API CALL REACT QUERY -----

  // API call to get all products
  const useGetProducts = () => {
    const { data, isLoading, isError } = useQuery<Products[]>({
      queryKey: ['products'],
      queryFn: () => getProducts(),
    } as { queryKey: QueryKey });

    return { data, isLoading, isError };
  };

  // API call to get a single product
  const useGetProductDetails = (id: any) => {
    const { data, isLoading, isError } = useQuery<Products>({
      queryKey: ['product', id],
      queryFn: () => getProductDetails(id),
    } as { queryKey: QueryKey });

    return { data, isLoading, isError };
  };

  // API call to get a product category
  const useGetProductByCategory = (category: Categories) => {
    const { data, isLoading, isError } = useQuery<Products>({
      queryKey: ['product-category', category],
      queryFn: () => getProductByCategory(category),
      enabled: !!category,
    } as { queryKey: QueryKey });

    return { data, isLoading, isError };
  };

  return {
    // Get all products
    getProducts,
    // Get a single product
    getProductDetails,
    // Get products in a specific category
    getProductByCategory,
    // ----- API CALL REACT QUERY -----
    useGetProducts,
    useGetProductDetails,
    useGetProductByCategory,
  };
};
