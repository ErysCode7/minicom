import { Button } from '@/components/button';
import { ROUTES } from '@/utils/constant';
import { useRouter } from 'next/router';

type Props = {};

const Cart = (props: Props) => {
  const router = useRouter();

  const cartData = [];

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-5 items-center justify-center h-[calc(100vh_-_160px)]">
      {cartData.length > 0 ? (
        <div className="border border-gray-200 rounded p-5">
          <div className="flex items-center justify-between">
            <h2>Shopping Cart</h2>
            <div>
              <p>3 Items</p>
            </div>
          </div>

          <div className="bg-gray-200 h-[1px] w-full"></div>

          <div></div>
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
