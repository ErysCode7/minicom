import { ProductDetails } from '@/modules/product-details';
import { useProducts } from '@/services/products/products-api';
import { Categories, Products } from '@/services/products/types';
import { QueryClient, QueryKey, dehydrate } from '@tanstack/react-query';
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

  const { getProductDetails, getProductByCategory } = useProducts();

  let isError: unknown = '';
  let category: Categories | any;

  try {
    const product = await queryClient.fetchQuery<Products>({
      queryKey: ['product', id],
      queryFn: () => getProductDetails(id),
    } as { queryKey: QueryKey });

    category = product.category;
  } catch (err) {
    isError = err;
  }

  await queryClient.fetchQuery<Products>({
    queryKey: ['product-category', category],
    queryFn: () => getProductByCategory(category),
    enabled: !!category,
  } as { queryKey: QueryKey });

  return {
    props: {
      isError,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
