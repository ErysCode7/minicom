import { Cart } from '@/modules/cart';
import type { NextPage } from 'next';

type Props = {};

const CartPage: NextPage = (props: Props) => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
