import QueryLayout from '@/components/Layout/query-layout';
import { ProductDetails } from '@/modules/product-details';
import { useLayoutStateStore } from '@/store/layout';
import type { NextPage } from 'next';
import React from 'react';
import { useEffect } from 'react';

type ProductDetailsPageProps = {
  isErrorFetchingProduct?: unknown;
};

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = ({ isErrorFetchingProduct }) => {
  const resetLayoutState = useLayoutStateStore(state => state.resetLayoutState);

  useEffect(() => {
    resetLayoutState();
  }, []);

  return (
    <React.Fragment>
      <QueryLayout>
        <ProductDetails isErrorFetchingProduct={isErrorFetchingProduct} />
      </QueryLayout>
    </React.Fragment>
  );
};

export default ProductDetailsPage;

// export const getServerSideProps: GetServerSideProps = async context => {
//   const queryClient = new QueryClient();

//   const { id } = context?.query;

//   let isErrorFetchingProduct: unknown = '';
//   let category: Categories | any;

//   try {
//     const product = await queryClient.fetchQuery<Products>({
//       queryKey: [QUERY_KEYS.GET_SINGLE_PRODUCT, id],
//       queryFn: () => getProductDetails(id),
//     } as { queryKey: QueryKey });

//     category = product.category;
//   } catch (err) {
//     isErrorFetchingProduct = err;
//   }

//   await queryClient.fetchQuery<Products>({
//     queryKey: [QUERY_KEYS.GET_PRODUCT_CATEGORY, category],
//     queryFn: () => getProductByCategory(category),
//     enabled: !!category,
//   } as { queryKey: QueryKey });

//   return {
//     props: {
//       isErrorFetchingProduct,
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
