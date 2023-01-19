import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Layout from '../components/layout';
import Footer from '../components/footer';

export default function Home() {
  const landingStyle = {
    boxShadow: '1px 2px 4px 0 rgba(0,0,0,0.4)',
    borderRadius: '5px',
  };
  return (
    <Layout>
      <div>
        <section
          id='splash-container'
          className='relative mx-auto h-2/6 min-h-[800px] bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-400'
        >
          <div
            id='text-container'
            className='h-1/2 w-2/6 p-16 bg-slate-100 absolute top-[10%] left-[200px] rounded-md z-10'
          >
            <label className='text-4xl'>Welcome to</label>
            <div className='pt-4'>
              <Image
                src='/privy-logo.png'
                alt='privy-logo'
                width={200}
                height={120}
              />
            </div>
          </div>
          <div className='h-1/2 w-4/6 absolute bottom-[5%] right-[100px] z-20'>
            <Image
              style={landingStyle}
              src={'/landing-splash.jpg'}
              height={800}
              width={1200}
              alt='Sunset in the mountains'
            />
          </div>
          <div id='image-container' className='w-full absolute bottom-0'>
            <img className='w-full' src='/wave-bottom.svg' alt='svg' />
          </div>
        </section>
        <section
          id='highlights'
          className='mx-auto mb-10 mt-20 max-w-[80%] h-1/6 flex justify-evenly'
        >
          <div className='max-w-sm rounded overflow-hidden shadow-lg m-2'>
            <div className='p-2'>
              <Image
                src={'/landing-tech.jpg'}
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
            {/* <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #photography
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #travel
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #winter
              </span>
            </div> */}
          </div>
          <div className='max-w-sm rounded overflow-hidden shadow-lg m-2'>
            <div className='p-2'>
              <Image
                src={'/landing-science.jpg'}
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
            {/* <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #photography
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #travel
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #winter
              </span>
            </div> */}
          </div>
          <div className='max-w-sm rounded overflow-hidden shadow-lg m-2'>
            <div className='p-2'>
              <Image
                src={'/landing-law.jpg'}
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
            {/* <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #photography
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #travel
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #winter
              </span>
            </div> */}
          </div>
        </section>
        <section className='h-1/6 flex flex-col items-center justify-center border-b-4 border-t-4 border-indigo-500'>
          <p className='text-3xl m-8 max-w-[50%] text-center'>
            Without Privy, I wouldn&apos;t have been able to advance my career
            without experiencing such a stream line process.
          </p>
          <label className='text-xl mb-8 max-w-[50%] text-center'>
            Kevin Baktiar, CTO of Afterhau5
          </label>
        </section>
        <section className='h-1/6 flex flex-col items-center justify-center'>
          <p className='text-xl m-8 max-w-[50%] text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
            perferendis eaque, exercitationem praesentium nihil. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
            nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
