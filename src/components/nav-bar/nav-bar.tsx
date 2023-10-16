import { useCartContext } from '@/context/cart-context';
import { ROUTES } from '@/utils/constant';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiShoppingCart } from 'react-icons/hi';
import { NavLinks } from './components/nav-links';
import { useNavbarHooks } from './hooks';

const Navbar = () => {
  const { cart } = useCartContext();

  const { showMobileNavbar, setShowMobileNavbar, router } = useNavbarHooks();

  const handleRedirectToCart = () => {
    router.push(ROUTES.CART);
  };

  const handleMobileNavbarToggle = () => {
    setShowMobileNavbar(prevMobileNavbar => !prevMobileNavbar);
  };

  return (
    <nav className="w-full h-20 shadow-sm bg-white">
      <div className="flex items-center justify-between m-auto h-full w-[90%] lg:w-[85%]">
        <div className="laptop:cursor-pointer flex items-center gap-12">
          <Image
            src={'/minicom.svg'}
            alt="next image"
            width={70}
            height={70}
            onClick={() => router.push(ROUTES.HOME)}
          />
          {/* 1024px UP */}
          <ul className="hidden laptop:flex items-center gap-4">
            <NavLinks />
          </ul>
        </div>

        {/* MOBILE TO 1023px */}
        <ul
          className={`absolute w-60 sm:w-96 z-[99999] ${
            showMobileNavbar ? 'left-0' : 'left-[-999px]'
          } top-0 bottom-0 transition-all duration-500 lg:hidden bg-white shadow-md flex flex-col items-center`}
        >
          <NavLinks setShowMobileNavbar={setShowMobileNavbar} />
        </ul>

        <button
          type="button"
          className="hidden laptop:block relative"
          onClick={handleRedirectToCart}
        >
          <HiShoppingCart size={25} width={25} />
          {cart?.length > 0 && (
            <span className="absolute right-[-12px] top-[-12px] bg-blue-500 rounded-full p-3 w-4 h-4 text-xs flex items-center justify-center text-white">
              {cart?.length || null}
            </span>
          )}
        </button>

        <div className="laptop:hidden" onClick={handleMobileNavbarToggle}>
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
