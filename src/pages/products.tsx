import { Products } from '@/modules/products';
import { useProductsFilterStore } from '@/store/products-filter';
import type { NextPage } from 'next';
import React from 'react';

import dynamic from 'next/dynamic';

// Lazy load the component that depends on client-side data
const ProductsFilterModal = dynamic(
  () => import('@/modules/products/components/products-filter-modal'),
  { ssr: false },
);

type ProductsPageProps = {
  isErrorFetchingProduct?: unknown;
};

const ProductsPage: NextPage<ProductsPageProps> = ({ isErrorFetchingProduct }) => {
  // PRODUCTS FILTER STORE
  const showFilterModal = useProductsFilterStore(state => state.showFilterModal);

  return (
    <React.Fragment>
      {/* FILTER MODAL */}
      {showFilterModal && <ProductsFilterModal />}

      {/* PRODUCTS PAGE */}
      <Products isErrorFetchingProduct={isErrorFetchingProduct} />
    </React.Fragment>
  );
};

export default ProductsPage;

// export const getServerSideProps: GetServerSideProps = async context => {
//   const queryClient = new QueryClient();

//   /* eslint-disable */
//   const { getProducts } = useProducts();

//   let isErrorFetchingProduct: unknown = '';
//   let filteredProducts = '';

//   try {
//     await queryClient.fetchQuery({
//       queryKey: ['products', filteredProducts],
//       queryFn: () => getProducts(filteredProducts),
//     });
//   } catch (err) {
//     isErrorFetchingProduct = err;
//   }

//   return {
//     props: {
//       isErrorFetchingProduct,
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
