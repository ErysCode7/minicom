import { useCartStore } from '@/store/cart';

import dynamic from 'next/dynamic';

const CartContainer = dynamic(() => import('./cart-container'));
const CartEmptyState = dynamic(() => import('./cart-empty-state'));
const CartOrderSummary = dynamic(() => import('./cart-order-summary'));

const Cart = () => {
  const cart = useCartStore(state => state.cart);

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-5 items-center justify-center pb-10">
      {cart.length > 0 ? (
        <div className="w-full">
          {/* CART CONTAINER */}
          <CartContainer />

          {/* ORDER SUMMARY */}
          <CartOrderSummary shippingFee={30} subtotal={200} totalItems={5} />
        </div>
      ) : (
        <CartEmptyState />
      )}
    </div>
  );
};

export default Cart;
