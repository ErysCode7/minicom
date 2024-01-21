import QueryLayout from '@/components/Layout/query-layout';
import { Cart } from '@/modules/cart';
import { useProductsFilterStore } from '@/store/products-filter';
import type { NextPage } from 'next';
import React from 'react';
import { useEffect } from 'react';

const CartPage: NextPage = () => {
  // PRODUCTS FILTER STORE
  const resetFilterProductState = useProductsFilterStore(state => state.resetFilterProductState);

  useEffect(() => {
    resetFilterProductState();
  }, []);

  return (
    <React.Fragment>
      <QueryLayout>
        <Cart />
      </QueryLayout>
    </React.Fragment>
  );
};

export default CartPage;
