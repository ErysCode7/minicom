import { Cart } from '@/modules/cart';
import { useProductsFilterStore } from '@/store/products-filter';
import type { NextPage } from 'next';
import { useEffect } from 'react';

const CartPage: NextPage = () => {
  // PRODUCTS FILTER STORE
  const resetFilterProductState = useProductsFilterStore(state => state.resetFilterProductState);

  useEffect(() => {
    resetFilterProductState();
  }, []);

  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
