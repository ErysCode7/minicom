import { useCartStore } from '@/store/cart';
import { useLayoutStateStore } from '@/store/layout';
import { LAYOUT_STATE } from '@/utils/constants';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const { pathname } = router;

  const date = new Date().getFullYear();

  // CART STORE
  const cart = useCartStore(state => state.cart);
  const productLength = useCartStore(state => state.productLength);

  // LAYOUT STORE
  const layoutState = useLayoutStateStore(state => state.layoutState);

  // LOGIC TO SET THE FOOTER STATE
  const shouldStickToBottom =
    (pathname === '/products' && productLength <= 4 && layoutState !== LAYOUT_STATE.vertical) ||
    (pathname === '/cart' && cart?.length === 0);

  return (
    <footer
      className={`w-full h-20 shadow-sm bg-white ${
        shouldStickToBottom ? 'standard:absolute bottom-0' : ''
      }`}
    >
      <div className="flex items-center m-auto h-full w-[90%] lg:w-[85%]">
        <h2 className="text-gray-500 text-xs sm:text-sm">
          Minicom <span className="text-blue-500">©{date}.</span> All rights reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
