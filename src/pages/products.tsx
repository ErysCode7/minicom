import { Products } from '@/modules/products';
import { useProducts } from '@/services/products/products-api';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps, NextPage } from 'next';

type ProductsPageProps = {
  isErrorFetchingProduct: unknown;
};

const ProductsPage: NextPage<ProductsPageProps> = ({ isErrorFetchingProduct }) => {
  return (
    <>
      <Products isErrorFetchingProduct={isErrorFetchingProduct} />
    </>
  );
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();

  /* eslint-disable */
  const { getProducts } = useProducts();

  let isErrorFetchingProduct: unknown = '';
  let filteredProducts = '';

  try {
    await queryClient.fetchQuery({
      queryKey: ['products', filteredProducts],
      queryFn: () => getProducts(filteredProducts),
    });
  } catch (err) {
    isErrorFetchingProduct = err;
  }

  return {
    props: {
      isErrorFetchingProduct,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
