import { useRouter } from 'next/router';
import { useState } from 'react';

export const useNavbarHooks = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const routes = [
    {
      id: 'HOME',
      route: 'Home',
      routes: '/',
    },
    {
      id: 'ABOUT',
      route: 'About',
      routes: '/about',
    },
    {
      id: 'PRODUCTS',
      route: 'Products',
      routes: '/products',
    },
  ];

  return {
    routes,
    router,
    pathname,
    showMobileNavbar,
    setShowMobileNavbar,
  };
};
