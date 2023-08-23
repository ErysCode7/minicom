import { useCartContext } from '@/context/cart-context';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const { productLength, cart } = useCartContext();

  const date = new Date().getFullYear();

  const shouldStickToBottom =
    (pathname === '/products' && productLength <= 4) || (pathname === '/cart' && cart.length === 0);

  return (
    <footer
      className={`w-full h-20 shadow-sm bg-white ${
        shouldStickToBottom ? 'laptop:absolute bottom-0' : ''
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
