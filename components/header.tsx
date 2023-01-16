/* eslint-disable react/display-name */
import Image from 'next/image';
import Link from 'next/link';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import React from 'react';
import { useRouter } from 'next/router';

type HeaderProps = {
  user?: any;
  loading: boolean;
};

const Header = () => {
  const router = useRouter();
  //const { data: session, status } = useSession();
  //const loading = status === 'loading';

  return (
    <header className='w-full h-24 px-8 flex items-center justify-between bg-white  border-b-2 border-grey-50'>
      <Link href='/'>
        <div>
          <Image
            src='/privy-logo.png'
            alt='privy-logo'
            width={100}
            height={60}
          />
        </div>
      </Link>
      <nav>
        <ul className='list-none flex align-baseline items-center text-xl'>
          <li className='ml-8 justify-center'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='ml-8 justify-center'>
            <Link href='/about'>About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
