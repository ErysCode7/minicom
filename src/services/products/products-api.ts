import { QueryKey, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Products } from './types';

export const BASE_URL = 'https://fakestoreapi.com/products';

export const useProducts = () => {
  //get all products
  const getProducts = async (): Promise<Products[]> => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (err) {
      return [];
    }
  };

  //get a single product
  const getProductsDetails = async (id: any): Promise<Products | unknown> => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  // ----- API CALL REACT QUERY -----

  //api call to get all products
  const useGetProducts = () => {
    const { data, isLoading } = useQuery<Products[]>({
      queryKey: ['products'],
      queryFn: () => getProducts(),
    } as { queryKey: QueryKey });

    return { data, isLoading };
  };

  //api call to get a single product
  const useGetProductDetails = (id: any) => {
    const { data, isLoading } = useQuery<Products>({
      queryKey: ['product', id],
      queryFn: () => getProductsDetails(id),
    } as { queryKey: QueryKey });

    return { data, isLoading };
  };

  return {
    //get all products
    getProducts,
    getProductsDetails,
    // ----- API CALL REACT QUERY -----
    useGetProducts,
    useGetProductDetails,
  };
};
