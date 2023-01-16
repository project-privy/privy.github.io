import Head from 'next/head';
import Header from './header';

// background color: bg-[#BDD4E7]

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Privy</title>
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
