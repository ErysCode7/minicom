import { useProductsHooks } from '@/modules/products/hooks/hooks';
import { Products } from '@/services/products/types';
import { useCartStore } from '@/store/cart';
import { useCartHooks } from '../hooks/hooks';

import dynamic from 'next/dynamic';

// Lazy load the component that depends on client-side data
const CartHeader = dynamic(() => import('./cart-header'), { ssr: false });
const CartItems = dynamic(() => import('./cart-items'), { ssr: false });
const CartContainerSkeleton = dynamic(() => import('./loader/cart-container-skeleton'));

const CartContainer = () => {
  // CART STORE
  const cart = useCartStore(state => state.cart);

  const { products } = useProductsHooks();

  const {
    // STATE
    cartStateQuantity,
    // STATE FUNCTIONS
    setCartStateQuantity,
  } = useCartHooks();

  const findProductById = (id: number) => {
    const product = products?.find(product => product.id === id);
    return product;
  };

  // ITERATE TO CART ARRAY AND FIND THE PRODUCT BASE ON CART ID
  const getCartProduct = () => {
    const product = cart.map(item => {
      const product = findProductById(item.id) || null;
      return product;
    });
    return product;
  };

  const cartProduct = getCartProduct();

  // LOADING STATE
  if (cartProduct.some(item => item === null)) {
    return <CartContainerSkeleton />;
  }

  return (
    <div className="border border-gray-200 rounded p-5 w-[90%] lg:w-[85%] m-auto my-10 shadow-md bg-white">
      <div className="flex-[3]">
        <CartHeader cartLength={cart?.length} />

        <div className="bg-gray-200 h-[1px] w-full my-5" />

        <h3>Product Details</h3>

        <div className="flex flex-col gap-5">
          {/* CART DATA */}
          {cartProduct?.map((product, index, array) => {
            const key = `${product?.id}/${product?.title}`;

            // Check if it's the last item in the array
            const isLastItem = index === array.length - 1;

            return (
              <CartItems
                key={key}
                product={product as Products}
                cartStateQuantity={cartStateQuantity}
                isLastItem={isLastItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
