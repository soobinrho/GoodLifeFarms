'use client';

import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function LandingPage() {
  return (
    <div className='min-h-screen overflow-y-auto overflow-x-hidden bg-background'>
      <div className='isolate'>
        {/* Who we are */}
        <section className='absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%]'>
          <div className='container w-screen space-y-10 xl:space-y-16'>
            <div className='grid place-items-center gap-4 px-10 md:grid-cols-2 md:gap-16'>
              <div>
                <h1 className='lg:leading-tighter text-start text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                  Self-sustainable web app for{' '}
                  <TypeAnimation
                    className='text-primary/80 drop-shadow-[0_8px_8px_rgba(0,0,0,1)]'
                    sequence={[
                      'local farms',
                      2000,
                      'beekeepers',
                      2000,
                      'florists',
                      2000,
                      'local producers',
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
              <div className='flex flex-col items-start space-y-4'>
                <p className='mx-auto max-w-[700px] text-cyan-200 md:text-xl'>
                  Open-source web app designed for local farms. We are trying to
                  create zero-maintenance, self-sustainable platform for local
                  farmers.
                </p>
                <div className='space-x-4'>
                  <Link
                    className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-lg font-bold text-primary-3 drop-shadow-[0_8px_8px_rgba(0,0,0,1)] transition-colors hover:bg-gray-300 hover:drop-shadow-2xl focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50'
                    href='#'
                  >
                    Prototype
                  </Link>
                  <a
                    className='inline-flex items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-lg font-medium text-cyan-600 drop-shadow-[0_8px_8px_rgba(0,0,0,1)] transition-colors hover:bg-gray-300 hover:text-primary-3 hover:drop-shadow-2xl focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50'
                    target='_blank'
                    href='https://github.com/soobinrho/good-life-farms/blob/main/DEVLOG.md#who-are-we'
                    rel='noopener noreferrer'
                  >
                    Who are we?
                  </a>
                </div>
              </div>
            </div>
            <img
              alt='Produces from Good Life Farms. '
              className='mx-auto aspect-[3/1] max-w-[90vw] overflow-hidden rounded-xl object-cover drop-shadow-[0_8px_8px_rgba(0,0,0,1)] sm:max-w-[65vw]'
              height='300'
              src='/farm-produces.jpg'
              width='1270'
            />
          </div>
        </section>
        {/* Gradient background.
            Source:
              https://tailwindui.com/components/marketing/sections/heroes
        */}
        <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1B1A55] to-[#535C91] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'></div>
        </div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'></div>
        <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
          <div className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1B1A55] to-[#535C91] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'></div>
        </div>
      </div>
    </div>
  );
}
