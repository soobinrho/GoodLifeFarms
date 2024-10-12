'use client';

import Link from 'next/link';
import React from 'react';

export default function HeaderLogo() {
  return (
    <>
      <Link
        className='absolute start-0 z-30 ml-4 mt-3 w-20 overflow-visible sm:ml-5 sm:mt-3 sm:w-36'
        href='/'
      >
        <img
          alt='Logo of Good Life Farms. Orange Puppy.'
          src='/2024-10-11_logo.svg'
        />
      </Link>
    </>
  );
}
