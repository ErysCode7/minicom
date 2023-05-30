import { ProductDetails } from '@/modules/product-details';
import type { NextPage } from 'next';

type Props = {};

const ProductDetailsPage: NextPage = (props: Props) => {
  return (
    <>
      <ProductDetails />
    </>
  );
};

export default ProductDetailsPage;
