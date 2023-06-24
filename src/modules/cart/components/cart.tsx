import { Button } from '@/components/button';
import { useHooks } from '@/modules/products/hooks';
import { ROUTES } from '@/utils/constant';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCartHooks } from '../hooks';

type Props = {};

const Cart = (props: Props) => {
  const router = useRouter();

  const { products } = useHooks();

  const {
    //state
    cartStateQuantity,
    //state func
    setCartStateQuantity,
  } = useCartHooks();

  const cartData = [1];

  return (
    //h-[calc(100vh_-_160px)]
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-5 items-center justify-center pb-10">
      {cartData.length > 0 ? (
        <div className="w-full">
          {/* CART CONTAINER */}
          <div className="border border-gray-200 rounded p-5 w-[90%] lg:w-[85%] m-auto my-10 shadow-md">
            <div className="flex-[3]">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl sm:text-2xl">Shopping Cart</h2>
                <div>
                  <p>3 Items</p>
                </div>
              </div>

              <div className="bg-gray-200 h-[1px] w-full my-5"></div>

              {/* CART DATA */}
              <div className="flex justify-between">
                <div>
                  <h3>Product Details</h3>
                  {products?.slice(0, 1).map(product => (
                    <div className="flex items-center gap-2 sm:gap-5 py-3">
                      <div>
                        <Image
                          src={product.image}
                          width={100}
                          height={100}
                          alt={product.title}
                          className="rounded"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-evenly h-[100px] sm:w-[300px]">
                        <h3 className="font-bold text-xs sm:text-base">{product.title}</h3>
                        <p className="text-red-500 text-xs sm:text-sm md:text-base">
                          {product.category}
                        </p>
                        <button
                          type="button"
                          className="text-gray-500 text-xs sm:text-sm md:text-base"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3>Quantity</h3>
                  <div className="flex gap-3 items-center justify-center h-[142px]">
                    <button className="font-bold">-</button>
                    <p className="text-lg font-bold">{cartStateQuantity}</p>
                    <button className="font-bold">+</button>
                  </div>
                </div>

                <div className="hidden md:block">
                  <h3>Price</h3>
                  <div>
                    <p className="h-[142px] flex items-center justify-center font-bold">$22.1</p>
                  </div>
                </div>

                <div className="hidden md:block">
                  <h3>Total</h3>
                  <div>
                    <p className="h-[142px] flex items-center justify-center font-bold">$22.1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="w-[90%] lg:w-[85%] m-auto flex justify-center mobile:justify-end">
            <div className="w-[300px] border border-gray-200 rounded p-5">
              <div>
                <h2 className="font-bold text-xl sm:text-2xl">Order Summary</h2>
              </div>
              <div className="bg-gray-200 h-[1px] w-full my-5"></div>

              {/* ORDER DETAILS */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <p>Subtotal : </p>
                  <p>$30.99</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping Fee : </p>
                  <p>$5.34</p>
                </div>
              </div>
              <div className="bg-gray-200 h-[1px] w-full my-5"></div>
              <div className="flex justify-between">
                <p>Order Total : </p>
                <p>$36.33</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">Your cart is empty</h1>
          <div className="w-[30%] m-auto text-center">
            <Button text="FILL IT" onClick={() => router.push(ROUTES.PRODUCTS)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
