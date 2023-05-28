import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from '../footer';
import { Navbar } from '../navbar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
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
