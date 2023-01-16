import Image from 'next/image';
import Link from 'next/link';

// import {
//   FaMapMarker,
//   FaEnvelope,
//   FaPhone,
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
// } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='flex-shrink p-5 bg-slate-100 shadow-inner'>
      <div className='flex mx-auto max-w-[60%]'>
        <div id='footer-right' className='w-2/5'>
          <Image
            src='/privy-logo.png'
            alt='privy-logo'
            width={100}
            height={60}
          />
          <ul className='flex my-5'>
            <li className='mr-3 text-xl text-blue-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='mr-3 text-xl text-blue-500'>
              <Link href='/about'>About</Link>
            </li>
            <li className='mr-3 text-xl text-blue-500'>
              <Link href='/support'>Support</Link>
            </li>
          </ul>
          <p className='footer-company-name'>Privy ©2022</p>
        </div>

        <div id='footer-center' className='w-2/5'>
          <div className='flex items-center my-4'>
            {/* <FaMapMarker /> */}
            <span className='ml-5 text-lg'>
              <p>421 Monterey Ave</p>
              <p>Ventura, California</p>
            </span>
          </div>

          <div className='flex items-center my-4'>
            {/* <FaPhone /> */}
            <p className='ml-5 text-lg'>+1.805.123.4567</p>
          </div>

          <div className='flex items-center my-4'>
            {/* <FaEnvelope /> */}
            <span className='ml-5 text-lg'>
              <a href='mailto:support@company.com'>support@joinprivy.com</a>
            </span>
          </div>
        </div>

        <div id='footer-right' className='w-1/5'>
          <p className='my-4'>About the company</p>
          <p className='my-4'>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className='flex max-w-[50%] h-5 my-4 justify-between'>
            <Link href='#'>
              <div>{/* <FaFacebook /> */}</div>
            </Link>
            <Link href='#'>
              <div>{/* <FaTwitter /> */}</div>
            </Link>
            <Link href='#'>
              <div>{/* <FaLinkedin /> */}</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
