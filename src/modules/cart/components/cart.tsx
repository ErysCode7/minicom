import { useCartStore } from '@/store/cart';
import CartContainer from './cart-container';
import CartEmptyState from './cart-empty-state';
import CartOrderSummary from './cart-order-summary';

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
