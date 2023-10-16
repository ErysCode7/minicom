import { Button } from '@/components/button';

type CartOrderSummaryProps = {
  subtotal: number;
  shippingFee: number;
  totalItems: number;
};

const CartOrderSummary = ({ subtotal, shippingFee, totalItems }: CartOrderSummaryProps) => {
  return (
    <div className="w-[90%] lg:w-[85%] m-auto flex justify-center mobile:justify-end">
      <div className="w-[300px] border border-gray-200 rounded p-5">
        <div>
          <h2 className="font-bold text-xl sm:text-2xl">Order Summary</h2>
        </div>

        <div className="bg-gray-200 h-[1px] w-full my-5"></div>

        {/* ORDER DETAILS */}
        <div className="flex flex-col gap-3">
          {/* SUBTOTAL */}
          <div className="flex justify-between">
            <p>Subtotal : </p>
            <p>{subtotal ?? '$30.99'}</p>
          </div>

          {/* SHIPPING FEE */}
          <div className="flex justify-between">
            <p>Shipping Fee : </p>
            <p>{shippingFee ?? '$5.34<'}</p>
          </div>

          <div className="flex justify-between">
            <p>Items : </p>
            <p>{totalItems ?? '2x'}</p>
          </div>
        </div>

        <div className="bg-gray-200 h-[1px] w-full my-5"></div>

        {/* TOTAL */}
        <div className="flex justify-between">
          <p>Order Total : </p>
          <p>$36.33</p>
        </div>

        {/* CHECKOUT BUTTON */}
        <div className="mt-3">
          <Button text="CHECKOUT" />
        </div>
      </div>
    </div>
  );
};

export default CartOrderSummary;
