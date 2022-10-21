import { ReactNode } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className='container'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
