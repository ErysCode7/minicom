import { ROUTES } from '@/utils/constant';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiShoppingCart } from 'react-icons/hi';
import { useHooks } from './hooks';

type Props = {};

const NavLinks = () => {
  const { router, routes, pathname } = useHooks();

  return (
    <>
      {routes.map(route => {
        return (
          <li
            onClick={() => router.push(route.routes)}
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
    </>
  );
};

const Navbar = () => {
  const { showMobileNavbar, setShowMobileNavbar, router } = useHooks();

  return (
    <nav className="w-full h-20 shadow-sm bg-white">
      <div className="flex items-center justify-between m-auto h-full w-[90%] lg:w-[85%]">
        <div className="laptop:cursor-pointer flex items-center gap-12">
          <Image
            src={'/minicom.png'}
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
          className={`absolute w-60 sm:w-96 z-50 ${
            showMobileNavbar ? 'left-0' : 'left-[-999px]'
          } top-0 bottom-0 transition-all duration-500 lg:hidden bg-white shadow-md flex flex-col items-center`}
        >
          <NavLinks />
        </ul>

        <button className="hidden laptop:block" onClick={() => router.push(ROUTES.CART)}>
          <HiShoppingCart size={25} width={25} />
        </button>

        <div
          className="laptop:hidden"
          onClick={() => setShowMobileNavbar(prevMobileNavbar => !prevMobileNavbar)}
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
