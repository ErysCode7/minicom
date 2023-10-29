import { useCartStore } from '@/store/cart';
import React from 'react';

const CartCount = () => {
  const cart = useCartStore(state => state.cart);

  return (
    <React.Fragment>
      {cart && cart.length > 0 ? (
        <span className="absolute right-[-12px] top-[-12px] bg-blue-500 rounded-full p-3 w-4 h-4 text-xs flex items-center justify-center text-white">
          {cart.length || 0}
        </span>
      ) : null}
    </React.Fragment>
  );
};

export default CartCount;
