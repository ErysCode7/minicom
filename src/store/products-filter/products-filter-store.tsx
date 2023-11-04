import { ChangeEvent } from 'react';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type ProductsFilterState = {
  // ----- FILTER STATE -----
  filterState: string;
  //   searchProduct: string;
  filterProductSort: string;
  filterProductLimit: string;
  showFilterModal: boolean;
  showFilterSideBar: boolean;

  // ----- FILTER STATE FUNCTIONS -----
  setFilterProductCategory: (category: string) => void;
  setFilterProductSort: (e: ChangeEvent<HTMLSelectElement>) => void;
  setFilterProductLimit: (e: ChangeEvent<HTMLSelectElement>) => void;
  resetFilterProductState: () => void;
  setShowFilterModal: (showFilterModal: boolean) => void;
  setShowFilterSideBar: () => void;
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
        showFilterModal: false,
        showFilterSideBar: false,

        // ----- FILTER STATE FUNCTIONS -----
        setFilterProductCategory: (category: string) =>
          set({
            filterState: `/category/${category}`,
            filterProductSort: '',
            filterProductLimit: '',
            showFilterModal: false,
          }),

        setFilterProductSort: (e: ChangeEvent<HTMLSelectElement>) =>
          set({
            filterState: `?sort=${e.target.value}`,
            filterProductSort: `?sort=${e.target.value}`,
            filterProductLimit: '',
            showFilterModal: false,
          }),

        setFilterProductLimit: (e: ChangeEvent<HTMLSelectElement>) =>
          set({
            filterState: `?limit=${e.target.value}`,
            filterProductSort: '',
            filterProductLimit: `?limit=${e.target.value}`,
            showFilterModal: false,
          }),

        resetFilterProductState: () => {
          set({ filterState: '' });
        },

        setShowFilterModal: (showFilterModal: boolean) => {
          set({ showFilterModal });
        },

        setShowFilterSideBar: () => {
          set({ showFilterSideBar: !get().showFilterSideBar });
        },
      }),
      {
        name: 'products-filter-storage',
      },
    ),
  ),
);
