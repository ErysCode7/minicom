import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/footer/footer'));
const ProductsFilterModalHeader = dynamic(() => import('./products-filter-modal-header'));
const ProductsFilter = dynamic(() => import('./products-filter'), { ssr: false });

const ProductsFilterModal = () => {
  return (
    <div>
      {/* <!-- Main modal --> */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full md:inset-0 h-full">
        <div className="relative w-full h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white h-full">
            {/* <!-- Modal header --> */}
            <ProductsFilterModalHeader />

            {/* <!-- Modal body --> */}
            <div className="p-4">
              <ProductsFilter />
            </div>

            {/* <!-- Modal footer --> */}
            <div className="absolute bottom-0 bg-white right-0 left-0 flex items-center border-t border-gray-200">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilterModal;
