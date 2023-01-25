import Layout from '../components/layout';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import {
  FaMapMarker,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
export default function About() {
  const imgStyle = {
    boxShadow: '1px 2px 4px 0 rgba(0,0,0,0.4)',
  };

  const portraitStyle = {
    borderRadius: '50%',
  };

  const categories = ['Mission Statement', 'FAQ', 'Socials'];

  return (
    <Layout>
      <section className='relative mx-auto h-3/6 min-h-[400px] bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-400'>
        <div id='image-container' className='w-full absolute bottom-0 z-10'>
          <img className='w-full' src='/wave-bottom.svg' alt='svg' />
        </div>
        <div className='flex flex-col items-center justify-center relative p-10 z-50'>
          <label className='text-white text-5xl p-5'>Our Story</label>
          <Image
            style={imgStyle}
            src={'/splash.jpg'}
            height={800}
            width={1000}
            alt='Sunset in the mountains'
          />
        </div>
      </section>
      <section className='h-1/6 flex flex-col items-center justify-center'>
        <p className='text-xl m-8 max-w-[50%] text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
          perferendis eaque, exercitationem praesentium nihil.
        </p>
      </section>
      <section className='h-1/6 flex flex-col items-center justify-center w-full'>
        <Tab.Group>
          <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1 w-[400px]'>
            {Object.values(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-xl font-medium leading-5 text-blue-500',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='w-full m-3 bg-slate-100 shadow-inner'>
            <Tab.Panel>
              <p className='text-xl m-8 mx-auto max-w-[50%] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                et perferendis eaque, exercitationem praesentium nihil. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                quia, nulla! Maiores et perferendis eaque, exercitationem
                praesentium nihil.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </Tab.Panel>
            <Tab.Panel>
              <div className='flex justify-center m-8'>
                <div className='w-[50%] sm:w-3/5 xs:w-4/5 rounded-2xl bg-white p-2'>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                          <span className='text-xl'>
                            What is your refund policy?
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-indigo-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-lg text-gray-700'>
                          If you&apos;re unhappy with your purchase for any
                          reason, email us within 90 days and we&apos;ll refund
                          you in full, no questions asked.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as='div' className='mt-2'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                          <span className='text-xl'>
                            Do you offer technical support?
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-indigo-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-lg text-gray-700'>
                          No.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as='div' className='mt-2'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                          <span className='text-xl'>
                            What is your refund policy?
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-indigo-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-lg text-gray-700'>
                          If you&apos;re unhappy with your purchase for any
                          reason, email us within 90 days and we&apos;ll refund
                          you in full, no questions asked.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as='div' className='mt-2'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                          <span className='text-xl'>
                            Do you offer technical support?
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-indigo-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-lg text-gray-700'>
                          No.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className='flex mx-auto max-w-[20% justify-center m-8'>
                <ul>
                  <li>
                    <Link href='#'>
                      <div className='flex items-center pb-2'>
                        <FaFacebook />
                        <label className='mx-3 text-2xl'>Facebook</label>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <div className='flex items-center pb-2'>
                        <FaTwitter />
                        <label className='mx-3 text-2xl'>Twitter</label>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <div className='flex items-center pb-2'>
                        <FaLinkedin />
                        <label className='mx-3 text-2xl'>Linkedin</label>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
      <section
        id='team'
        className='mx-auto mb-16 max-w-[60%] h-1/6 flex flex-col pt-8'
      >
        <label className='text-4xl text-center p-2'>Meet the team</label>
        <div className='flex xs:flex-col flex-wrap justify-evenly'>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='p-3'>
              <Image
                style={portraitStyle}
                src={'/splash.jpg'}
                height={100}
                width={170}
                layout={'responsive'}
                alt='Sunset in the mountains'
              />
            </div>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Justin Chavez</div>
              <p className='text-gray-700 text-base'>CEO | Co-Founder</p>
            </div>
          </div>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='p-3'>
              <Image
                style={portraitStyle}
                src={'/splash.jpg'}
                height={100}
                width={170}
                layout={'responsive'}
                alt='Sunset in the mountains'
              />
            </div>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Cyrus</div>
              <p className='text-gray-700 text-base'>CFO | Co-Founder</p>
            </div>
          </div>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='p-3'>
              <Image
                style={portraitStyle}
                src={'/splash.jpg'}
                height={100}
                width={100}
                layout={'responsive'}
                alt='Sunset in the mountains'
              />
            </div>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Kevin Baktiar</div>
              <p className='text-gray-700 text-base'>CTO | Co-Founder</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
