import { useProductsFilterStore } from '@/store/products-filter';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/footer/footer'));
const ProductsFilter = dynamic(() => import('./products-filter'), { ssr: false });

const ProductsFilterModal = () => {
  // PRODUCTS FILTER STORE
  const setShowFilterModal = useProductsFilterStore(state => state.setShowFilterModal);

  return (
    <div>
      {/* <!-- Main modal --> */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full md:inset-0 h-full">
        <div className="relative w-full h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white h-full">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900 ">Filter Products</h3>
              <button
                onClick={() => setShowFilterModal(false)}
                type="button"
                className="bg-black text-white rounded-full text-sm w-8 h-8 ml-auto inline-flex justify-center items-center active:scale-95 transition duration-200"
                data-modal-hide="static-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

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
