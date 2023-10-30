import Layout from '@/components/layout/layout';
import useNProgress from '@/hooks/use-nprogress';
import '@/styles/globals.css';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  useNProgress();

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default App;
