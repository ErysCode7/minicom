import Layout from '@/components/Layout/layout';
import { CartContextProvider } from '@/context/cart-context';
import '@/styles/globals.css';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  NProgress.configure({
    showSpinner: false, // Disable the spinner
  });

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          <CartContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartContextProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}
