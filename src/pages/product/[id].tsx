import { ProductDetails } from '@/modules/product-details';
import { useProducts } from '@/services/products/products-api';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps, NextPage } from 'next';

type Props = {};

const ProductDetailsPage: NextPage = (props: Props) => {
  return (
    <>
      <ProductDetails />
    </>
  );
};

export default ProductDetailsPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();

  const { id } = context?.query;

  const { getProductsDetails } = useProducts();

  let isError: unknown = '';

  try {
    await queryClient.fetchQuery({
      queryKey: ['product', id],
      queryFn: () => getProductsDetails(id),
    });
  } catch (err) {
    isError = err;
  }

  return {
    props: {
      isError,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
