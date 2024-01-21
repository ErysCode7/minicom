import Layout from '@/components/Layout/layout';
import useNProgress from '@/hooks/use-nprogress';
import type { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';

import '@/styles/globals.css';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  useNProgress();

  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
};

export default App;
