import { ChangeEvent } from 'react';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type ProductsFilterState = {
  // ----- FILTER STATE -----
  filterState: string;
  //   searchProduct: string;
  filterProductSort: string;
  filterProductLimit: string;

  // ----- FILTER STATE FUNCTIONS -----
  setFilterProductCategory: (category: string) => void;
  setFilterProductSort: (e: ChangeEvent<HTMLSelectElement>) => void;
  setFilterProductLimit: (e: ChangeEvent<HTMLSelectElement>) => void;
  resetFilterProductState: () => void;
};

export const useProductsFilterStore = create<ProductsFilterState>()(
  devtools(
    persist(
      (set, get) => ({
        // ----- FILTER STATE -----
        filterState: '',
        // searchProduct: '',
        filterProductSort: '',
        filterProductLimit: '',

        // ----- FILTER STATE FUNCTIONS -----
        setFilterProductCategory: (category: string) =>
          set({ filterState: `/category/${category}` }),

        setFilterProductSort: (e: ChangeEvent<HTMLSelectElement>) =>
          set({
            filterState: `?sort=${e.target.value}`,
            filterProductSort: `?sort=${e.target.value}`,
          }),

        setFilterProductLimit: (e: ChangeEvent<HTMLSelectElement>) =>
          set({
            filterState: `?limit=${e.target.value}`,
            filterProductLimit: `?limit=${e.target.value}`,
          }),

        resetFilterProductState: () => {
          set({ filterState: '' });
        },
      }),
      {
        name: 'products-filter-storage',
      },
    ),
  ),
);
