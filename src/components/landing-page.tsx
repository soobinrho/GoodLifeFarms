'use client';

import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function LandingPage() {
  return (
    <>
      <div className='relative h-max min-h-screen overflow-y-hidden bg-background'>
        {/* Who we are */}
        <section className='absolute left-[50%] top-[40%] z-10 translate-x-[-50%] translate-y-[-40%] sm:top-[50%] sm:translate-y-[-50%]'>
          <div className='container w-screen space-y-10 xl:space-y-16'>
            <div className='grid place-items-center gap-4 px-10 sm:w-[94%] md:grid-cols-2 md:gap-16'>
              <div>
                <h1 className='lg:leading-tighter text-pretty text-start text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                  Self-sustainable selling platform for{' '}
                  <TypeAnimation
                    className='font-extrabold text-primary/70'
                    sequence={[
                      'local farmers',
                      2000,
                      'beekeepers',
                      2000,
                      'florists',
                      2000,
                      'local producers.',
                      8000,
                      'florists',
                      2000,
                    ]}
                    wrapper='span'
                    cursor={true}
                    speed={{ type: 'keyStrokeDelayInMs', value: 160 }}
                    deletionSpeed={50}
                    repeat={Infinity}
                  />
                </h1>
              </div>
              <div className='flex flex-col flex-wrap items-center space-y-4 sm:items-start'>
                <p className='mx-auto max-w-fit text-pretty text-primary-3 md:text-xl'>
                  Platform for local producers and local consumers. Designed to
                  be as self-sustainable and low-maintenance as possible. Made
                  by volunteers who love the environment and sustainability.
                </p>
                <div className='flex flex-col items-center space-y-4 overflow-visible text-nowrap sm:flex-row sm:space-x-4 sm:space-y-0'>
                  <Link
                    className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-lg font-bold text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,1)] transition-colors hover:bg-primary-3 focus:bg-primary-3/60 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50'
                    href='/prototype'
                  >
                    Prototype
                  </Link>
                  <a
                    className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-lg font-bold text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,1)] transition-colors hover:bg-primary-3 focus:bg-primary-3/60 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50'
                    target='_blank'
                    href='https://forms.gle/5m1Tr4JXqT9Thb286'
                    rel='noopener noreferrer'
                  >
                    Create
                  </a>
                  <a
                    className='inline-flex items-center justify-center rounded-md bg-primary/75 px-4 py-2 text-lg font-bold text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] transition-colors hover:bg-primary-3/90 focus:bg-primary-3/60 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50'
                    target='_blank'
                    href='https://github.com/soobinrho/good-life-farms/blob/main/DEVLOG.md'
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
      </div>
    </>
  );
}
