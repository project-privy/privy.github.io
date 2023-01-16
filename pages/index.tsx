import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Layout from '../components/layout';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <div>
        <section
          id='splash-container'
          className='relative mx-auto h-2/6 min-h-[800px] bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-400'
        >
          <div
            id='text-container'
            className='h-1/2 w-2/6 p-16 bg-white absolute top-[10%] left-[200px] rounded-md z-10'
          >
            <label className='text-3xl'>Welcome to Privy</label>
          </div>
          <div id='image-container' className='w-full absolute bottom-0'>
            <img className='w-full' src='/wave-bottom.svg' alt='svg' />
          </div>
        </section>
        <section
          id='highlights'
          className='mx-auto mb-16 max-w-[80%] h-1/6 flex justify-evenly'
        >
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='p-2'>
              <Image
                src={'/splash.jpg'}
                height={100}
                width={170}
                layout={'responsive'}
                alt='Sunset in the mountains'
              />
            </div>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #photography
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #travel
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #winter
              </span>
            </div>
          </div>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='p-2'>
              <Image
                src={'/splash.jpg'}
                height={100}
                width={170}
                layout={'responsive'}
                alt='Sunset in the mountains'
              />
            </div>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #photography
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #travel
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #winter
              </span>
            </div>
          </div>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='p-2'>
              <Image
                src={'/splash.jpg'}
                height={100}
                width={170}
                layout={'responsive'}
                alt='Sunset in the mountains'
              />
            </div>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #photography
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #travel
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #winter
              </span>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
