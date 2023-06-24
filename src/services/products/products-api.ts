import { QueryKey, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Categories, Products } from './types';

export const BASE_URL = 'https://fakestoreapi.com/products';

export const useProducts = () => {
  // Get all products
  const getProducts = async (filteredProducts?: string): Promise<Products[]> => {
    try {
      const response = await axios.get(`${BASE_URL}${filteredProducts}`);
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
  const getProductByCategory = async (category: Categories): Promise<Products[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/category/${category}`);
      return response.data;
    } catch (err) {
      return [];
    }
  };

  // ----- API CALL REACT QUERY -----

  // API call to get all products
  const useGetProducts = (filteredProducts?: string) => {
    return useQuery<Products[]>({
      queryKey: ['products', filteredProducts],
      queryFn: async () => getProducts(filteredProducts),
    } as { queryKey: QueryKey });
  };

  // API call to get a single product
  const useGetProductDetails = (id: any) => {
    return useQuery<Products>({
      queryKey: ['product', id],
      queryFn: async () => getProductDetails(id),
    } as { queryKey: QueryKey });
  };

  // API call to get a product category
  const useGetProductByCategory = (category: Categories) => {
    return useQuery<Products[]>({
      queryKey: ['product-category', category],
      queryFn: async () => getProductByCategory(category),
      enabled: !!category,
    } as { queryKey: QueryKey });
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
