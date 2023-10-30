import { useProductsHooks } from '@/modules/products/hooks/hooks';
import { Products } from '@/services/products/types';
import { useCartStore } from '@/store/cart';
import { useCartHooks } from '../hooks/hooks';

import dynamic from 'next/dynamic';

const CartHeader = dynamic(() => import('./cart-header'), { ssr: false });
const CartItems = dynamic(() => import('./cart-items'), { ssr: false });
const CartContainerSkeletonLoader = dynamic(
  () => import('./loader/cart-container-skeleton-loader'),
);

const CartContainer = () => {
  const cart = useCartStore(state => state.cart);

  const { products } = useProductsHooks();

  const {
    //state
    cartStateQuantity,
    //state func
    setCartStateQuantity,
  } = useCartHooks();

  const findProductById = (id: number) => {
    const product = products?.find(product => product.id === id);
    return product;
  };

  const getCartProduct = () => {
    const product = cart.map(item => {
      const product = findProductById(item.id) || null;
      return product;
    });
    return product;
  };

  const cartProduct = getCartProduct();

  if (cartProduct.some(item => item === null)) {
    return <CartContainerSkeletonLoader />;
  }

  return (
    <div className="border border-gray-200 rounded p-5 w-[90%] lg:w-[85%] m-auto my-10 shadow-md">
      <div className="flex-[3]">
        <CartHeader cartLength={cart?.length} />

        <div className="bg-gray-200 h-[1px] w-full my-5" />

        <h3>Product Details</h3>

        {/* CART DATA */}

        {cartProduct?.map(product => {
          const key = `${product?.id}/${product?.title}`;

          return (
            <CartItems
              key={key}
              product={product as Products}
              cartStateQuantity={cartStateQuantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartContainer;
