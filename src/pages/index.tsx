import { Home } from '@/modules/home';
import { useProducts } from '@/services/products/products-api';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

type Props = {};

const HomePage: NextPage<Props> = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

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

  //NEXT-AUTH SSR SAMPLE

  // if (!session) {
  //   return {
  //     props: { session },
  //     redirect: {
  //       destination: '/todos',
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      isError,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
