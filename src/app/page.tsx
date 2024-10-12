'use client';

import Footer from '@/components/footer';
import HeaderList from '@/components/header-list';
import HeaderLogo from '@/components/header-logo';
import HeaderSocialMedia from '@/components/header-social-media';
import TypeAnimationLocalProducers from '@/components/type-animation-local-producers';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <main className='relative h-max min-h-screen w-full overflow-y-hidden bg-background text-primary'>
        <HeaderLogo />
        <HeaderList />
        <HeaderSocialMedia />

        {/* Who we are */}
        <section className='absolute left-[50%] top-[40%] z-10 translate-x-[-50%] translate-y-[-40%] sm:top-[50%] sm:translate-y-[-50%]'>
          <div className='container w-screen space-y-10 xl:space-y-16'>
            <div className='grid place-items-center gap-4 px-10 sm:w-[94%] md:grid-cols-2 md:gap-16'>
              <TypeAnimationLocalProducers />
              <div className='flex flex-col flex-wrap items-center space-y-4 sm:items-start'>
                <p className='mx-auto max-w-fit text-pretty text-sm text-primary-3 sm:text-xl'>
                  Platform for local producers and local consumers. Designed to
                  be as self-sustainable and low-maintenance as possible. Made
                  by volunteers who love the environment and sustainability.
                </p>
                <div className='flex flex-col items-center space-y-4 overflow-visible text-nowrap pb-2 pt-6 sm:flex-row sm:space-x-4 sm:space-y-0 sm:pb-0 sm:pt-0'>
                  <Link
                    className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,1)] transition-colors hover:bg-primary-3 focus:bg-primary-3/60 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50 sm:text-lg'
                    href='/list/prototype'
                  >
                    Prototype
                  </Link>
                  <a
                    className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,1)] transition-colors hover:bg-primary-3 focus:bg-primary-3/60 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50 sm:text-lg'
                    target='_blank'
                    href='https://forms.gle/5m1Tr4JXqT9Thb286'
                    rel='noopener noreferrer'
                  >
                    Create
                  </a>
                  <a
                    className='inline-flex items-center justify-center rounded-md bg-primary/75 px-4 py-2 text-sm font-bold text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] transition-colors hover:bg-primary-3/90 focus:bg-primary-3/60 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50 sm:text-lg'
                    target='_blank'
                    href='https://github.com/soobinrho/good-life-farms/blob/main/WHOAREWE.md'
                    rel='noopener noreferrer'
                  >
                    Who are we?
                  </a>
                </div>
              </div>
            </div>
            <img
              alt='Produces from Good Life Farms. '
              className='mx-auto mb-10 aspect-[3/1] max-h-[40vh] w-[85%] overflow-auto rounded-xl object-cover drop-shadow-[0_8px_8px_rgba(0,0,0,1)] sm:w-[94%]'
              src='/farm-produces.jpg'
            />
          </div>
        </section>

        <div className='isolate'>
          {/* Gradient background.
            Source:
              https://tailwindui.com/components/marketing/sections/heroes
        */}
          <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] overflow-hidden bg-gradient-to-tr from-[#B8B42D] to-[#FFFCF1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'></div>
          </div>
          <div className='mx-auto max-w-2xl overflow-hidden py-32 sm:py-48 lg:py-56'></div>
          <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
            <div className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 overflow-hidden bg-gradient-to-tr from-[#B8B42D] to-[#FFFCF1] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'></div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
