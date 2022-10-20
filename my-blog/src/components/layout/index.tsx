import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>My Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
