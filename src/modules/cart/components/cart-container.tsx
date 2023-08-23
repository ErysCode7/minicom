import { useCartContext } from '@/context/cart-context';
import { useProductsHooks } from '@/modules/products/hooks';
import { Products } from '@/services/products/types';
import { useCartHooks } from '../hooks';
import CartHeader from './cart-header';
import CartItems from './cart-items';

type Props = {};

const CartContainer = (props: Props) => {
  const { cart } = useCartContext();
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

  console.log({ cartProduct });

  return (
    <div className="border border-gray-200 rounded p-5 w-[90%] lg:w-[85%] m-auto my-10 shadow-md">
      <div className="flex-[3]">
        <CartHeader cartLength={cart?.length} />

        <div className="bg-gray-200 h-[1px] w-full my-5"></div>

        <h3>Product Details</h3>

        {/* CART DATA */}
        {cartProduct?.map(product => (
          <CartItems
            key={product?.id}
            product={product as Products}
            cartStateQuantity={cartStateQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default CartContainer;
