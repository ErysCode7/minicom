import { ROUTES } from '@/utils/constants';
import dynamic from 'next/dynamic';
import React, { Dispatch, SetStateAction } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { useNavbarHooks } from '../hooks/hooks';

// Lazy load the component that depends on client-side data
const CartCount = dynamic(() => import('@/components/cart/cart-count'), { ssr: false });

type NavLinksProps = {
  setShowMobileNavbar?: Dispatch<SetStateAction<boolean>>;
};

const NavLinks = ({ setShowMobileNavbar }: NavLinksProps) => {
  const { router, routes, pathname } = useNavbarHooks();

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
            <CartCount />
          </div>
        </button>
      </div>
    </React.Fragment>
  );
};

export default NavLinks;
