import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Products } from '@/services/products/types';

// Define the state type for the dynamic product details store
type DynamicProductDetailsType = {
  dynamicProductDetails: Products | undefined;
  setDynamicProductDetails: (productDetails: Products | undefined) => void;
};

// Create the dynamic product details store using Zustand
export const useDynamicProductDetailsStore = create<DynamicProductDetailsType>()(
  devtools(
    persist(
      set => ({
        // ----- STATE -----

        // Initial state for dynamic product details
        dynamicProductDetails: undefined,

        // ----- STATE FUNCTIONS -----

        // Set Dynamic Product Details
        // This function updates the dynamicProductDetails in the store
        setDynamicProductDetails: (productDetails: Products | undefined) =>
          set({ dynamicProductDetails: productDetails }),
      }),
      {
        // Configuration for Zustand middleware (in this case, for persistence)
        name: 'dynamic-product-details-storage',
      },
    ),
  ),
);
