import { QueryKey, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { HennesProduct } from '../types';

const BASE_URL = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e9b554d91amsh382076b6c3a8a46p152b2ejsndbc63c85e132',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  },
  params: {
    country: 'us',
    lang: 'en',
    currentpage: '0',
    pagesize: '30',
    categories: 'men_all',
    concepts: 'H&M MAN',
  },
};

export const useHennesProducts = () => {
  //get list of products
  const getHennesProducts = async (): Promise<HennesProduct | unknown> => {
    try {
      const response = await axios.get(BASE_URL, options);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  // ----- API CALL REACT QUERY -----
  const useGetHennesProducts = () => {
    return useQuery<HennesProduct>({
      queryKey: ['hennes-product'],
      queryFn: async () => getHennesProducts(),
    } as { queryKey: QueryKey });
  };

  return {
    //get list of products
    // ----- API CALL REACT QUERY -----
    useGetHennesProducts,
  };
};
