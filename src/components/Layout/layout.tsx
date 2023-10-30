import Head from 'next/head';
import { ReactNode } from 'react';
import { Navbar } from '../nav-bar';

import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../footer/footer'), { ssr: false });

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Minicom</title>
        <meta charSet="UTF-8" />

        {/* <!-- Viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!--  Primary --> */}
        <meta name="title" content="Minicom" />
        <meta name="description" content="Minicom is mini e-commerce" />
        <meta name="keywords" content="Minicom, Mini e-commerce Ecommerce" />
        <meta name="author" content="Eryscode7, @mozoerys@gmail.com" />
        <meta name="application_name" content="Minicom" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="Minicom" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Minicom Website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/minicom.svg" />
        <meta property="og:description" content="Minicom, Mini e-commerce Ecommerce" />
      </Head>
      <>
        {/* HEADER OR NAVBAR */}
        <Navbar />

        {/* MAIN PAGE */}
        <main>{children}</main>

        {/* FOOTER */}
        <Footer />
      </>
    </>
  );
};

export default Layout;
