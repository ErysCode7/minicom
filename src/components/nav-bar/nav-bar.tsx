import { useCartContext } from '@/context/cart-context';
import { ROUTES } from '@/utils/constant';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiShoppingCart } from 'react-icons/hi';
import { useHooks } from './hooks';

type NavLinksProps = {
  setShowMobileNavbar?: Dispatch<SetStateAction<boolean>>;
};

const NavLinks = ({ setShowMobileNavbar }: NavLinksProps) => {
  const { cart } = useCartContext();

  const { router, routes, pathname } = useHooks();

  const handleChangeRoute = (route: string) => {
    if (setShowMobileNavbar) {
      setShowMobileNavbar(false);
    }
    router.push(route);
  };

  return (
    <React.Fragment>
      {routes.map(route => {
        return (
          <li
            onClick={() => handleChangeRoute(route.routes)}
            key={route.id}
            className={`uppercase tracking-widest text-sm lg:cursor-pointer lg:hover:text-blue-500 lg:mt-0 h-20 flex items-center justify-center w-full text-center ${
              pathname === route.routes
                ? 'bg-gray-100 lg:bg-transparent text-blue-500'
                : 'text-black'
            }`}
          >
            {route.route}
          </li>
        );
      })}
      <div
        className={`laptop:hidden w-full h-20 flex items-center justify-center ${
          pathname === ROUTES.CART ? 'bg-gray-100 lg:bg-transparent' : 'text-black'
        }`}
      >
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={() => router.push(ROUTES.CART)}
        >
          <p>Cart</p>
          <div className="relative">
            <HiShoppingCart size={25} width={25} />
            {cart?.length > 0 && (
              <span className="absolute right-[-12px] top-[-12px] bg-blue-500 rounded-full p-3 w-4 h-4 text-xs flex items-center justify-center text-white">
                {cart?.length || null}
              </span>
            )}
          </div>
        </button>
      </div>
    </React.Fragment>
  );
};

const Navbar = () => {
  const { cart } = useCartContext();

  const { showMobileNavbar, setShowMobileNavbar, router } = useHooks();

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
