import { useRouter } from 'next/router';
import { useHooks } from '../hooks';
import Product from './product';

type Props = {};

const ProductList = (props: Props) => {
  const router = useRouter();

  const { products, isLoadingProducts } = useHooks();

  if (isLoadingProducts) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 standard:grid-cols-4 gap-5">
      {products?.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
