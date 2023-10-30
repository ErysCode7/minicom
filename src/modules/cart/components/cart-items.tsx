import { Products } from '@/services/products/types';
import { calculateTotal } from '@/utils/helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';

type CartItemsProps = {
  product: Products;
  cartStateQuantity: number;
};

const CartItems = ({ product, cartStateQuantity }: CartItemsProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      {/* PRODUCT DETAILS  */}
      <div className="flex items-center gap-2 sm:gap-5 py-3">
        <div>
          <Image
            src={product?.image ?? ''}
            width={100}
            height={100}
            alt={product?.title ?? ''}
            className="rounded md:cursor-pointer hover:scale-[102%] hover:transition hover:duration-300"
            onClick={() => router.push(`/product/${product?.id}`)}
          />
        </div>
        <div className="flex flex-col items-start justify-evenly h-[100px] sm:w-[300px]">
          <h3
            className="font-bold text-xs sm:text-base md:cursor-pointer hover:text-blue-500 hover:transition hover:duration-300"
            onClick={() => router.push(`/product/${product?.id}`)}
          >
            {product?.title}
          </h3>
          <p className="text-red-500 text-xs sm:text-sm md:text-base">{product?.category}</p>
          <button type="button" className="text-gray-500 text-xs sm:text-sm md:text-base">
            Remove
          </button>
        </div>
      </div>

      {/* PRICE */}
      <div className="hidden md:block">
        <h3>Price</h3>
        <div>
          <p className="h-[142px] flex items-center justify-center font-bold">${product?.price}</p>
        </div>
      </div>

      {/* TOTAL */}
      <div className="hidden md:block">
        <h3>Total</h3>
        <div>
          <p className="h-[142px] flex items-center justify-center font-bold">
            {calculateTotal(product?.quantity || 0, product?.price || 0)}
          </p>
        </div>
      </div>

      {/* QUANTITY */}
      <div>
        <h3>Quantity</h3>
        <div className="flex gap-3 items-center justify-center h-[142px]">
          <button className="font-bold">-</button>
          <p className="text-lg font-bold">{cartStateQuantity}</p>
          <button className="font-bold">+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
