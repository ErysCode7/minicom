import { Button } from '@/components/button';
import { ROUTES } from '@/utils/constant';
import { useRouter } from 'next/router';

const CartEmptyState = () => {
  const router = useRouter();

  return (
    <div className="flex items-center h-[calc(100vh_-_160px)]">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">Your cart is empty</h1>
        <div className="w-[30%] m-auto text-center">
          <Button text="FILL IT" onClick={() => router.push(ROUTES.PRODUCTS)} />
        </div>
      </div>
    </div>
  );
};

export default CartEmptyState;
