'use client';

import Link from 'next/link';
import React from 'react';

export default function HeaderLogo() {
  return (
    <>
      <Link
        className='invisible absolute start-0 z-30 ml-5 mt-3 w-36 overflow-visible sm:visible'
        href='/'
      >
        <img
          alt='Logo of Good Life Farms. Orange Puppy.'
          src='/2024-10-11_logo.svg'
        />
      </Link>
      <Link
        className='visible absolute start-0 z-30 ml-4 mt-2 w-14 overflow-visible sm:invisible'
        href='/'
      >
        <img
          alt='Logo of Good Life Farms. Orange Puppy.'
          src='/2024-10-11_orange_puppy.svg'
        />
      </Link>
    </>
  );
}
