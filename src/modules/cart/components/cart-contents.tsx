import { useCartStore } from '@/store/cart';

import dynamic from 'next/dynamic';
import React from 'react';

const CartContainer = dynamic(() => import('./cart-container'));
const CartEmptyState = dynamic(() => import('./cart-empty-state'));
const CartOrderSummary = dynamic(() => import('./cart-order-summary'));

const CartContents = () => {
  const cart = useCartStore(state => state.cart);

  const renderCartElement = () => {
    if (cart?.length > 0) {
      return (
        <div className="w-full">
          {/* CART CONTAINER */}
          <CartContainer />

          {/* ORDER SUMMARY */}
          <CartOrderSummary shippingFee={30} subtotal={200} totalItems={5} />
        </div>
      );
    } else {
      <CartEmptyState />;
    }
  };

  return <React.Fragment>{renderCartElement()}</React.Fragment>;
};

export default CartContents;
