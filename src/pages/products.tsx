import { Products } from '@/modules/products';
import { useProducts } from '@/services/products/products-api';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps, NextPage } from 'next';

type ProductsPageProps = {
  isError: unknown;
};

const ProductsPage: NextPage<ProductsPageProps> = ({ isError }) => {
  return (
    <>
      <Products isError={isError} />
    </>
  );
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();

  const { getProducts } = useProducts();

  let isError: unknown = '';
  let filteredProducts = '';

  try {
    await queryClient.fetchQuery({
      queryKey: ['products', filteredProducts],
      queryFn: () => getProducts(filteredProducts),
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
