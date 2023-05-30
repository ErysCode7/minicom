import { useHooks } from '../hooks';

type Props = {};

const ProductDetails = (props: Props) => {
  const { productDetails, isLoadingProductDetails } = useHooks();

  if (isLoadingProductDetails) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return <div></div>;
};

export default ProductDetails;
