import axios from 'axios';
import { Categories, Products } from './types';

export const BASE_URL = 'https://fakestoreapi.com/products';

export const getProducts = async (filteredProducts?: string): Promise<Products[]> => {
  try {
    const response = await axios.get(`${BASE_URL}${filteredProducts}`);
    return response.data;
  } catch (err) {
    return [];
  }
};

export const getProductDetails = async (id: any): Promise<Products | unknown> => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getProductByCategory = async (category: Categories): Promise<Products[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/category/${category}`);
    return response.data;
  } catch (err) {
    return [];
  }
};
