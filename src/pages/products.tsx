import { Products } from '@/modules/products';
import type { NextPage } from 'next';

type Props = {};

const ProductsPage: NextPage = (props: Props) => {
  return (
    <>
      <Products />
    </>
  );
};

export default ProductsPage;
