import { ProductDetails } from '@/modules/product-details';
import type { NextPage } from 'next';

type ProductDetailsPageProps = {
  isErrorFetchingProduct?: unknown;
};

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = ({ isErrorFetchingProduct }) => {
  return (
    <>
      <ProductDetails isErrorFetchingProduct={isErrorFetchingProduct} />
    </>
  );
};

export default ProductDetailsPage;

// export const getServerSideProps: GetServerSideProps = async context => {
//   const queryClient = new QueryClient();

//   const { id } = context?.query;

//   /* eslint-disable */
//   const { getProductDetails, getProductByCategory } = useProducts();

//   let isErrorFetchingProduct: unknown = '';
//   let category: Categories | any;

//   try {
//     const product = await queryClient.fetchQuery<Products>({
//       queryKey: ['product', id],
//       queryFn: () => getProductDetails(id),
//     } as { queryKey: QueryKey });

//     category = product.category;
//   } catch (err) {
//     isErrorFetchingProduct = err;
//   }

//   await queryClient.fetchQuery<Products>({
//     queryKey: ['product-category', category],
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
