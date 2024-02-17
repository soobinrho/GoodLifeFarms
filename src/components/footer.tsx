'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <div className='absolute bottom-0 mx-3 my-4 font-extralight'>
      Made with ❤ by{' '}
      <a
        className='font-light hover:text-gray-100 active:text-gray-400'
        target='_blank'
        href='https://www.linkedin.com/in/kathy-do-1b035a242/'
        rel='noopener noreferrer'
      >
        Kathy
      </a>
      ,{' '}
      <a
        className='font-light hover:text-gray-100 active:text-gray-400'
        target='_blank'
        href='https://www.linkedin.com/in/oluwatobiloba-o-992772241/'
        rel='noopener noreferrer'
      >
        Tobi
      </a>
      , and{' '}
      <a
        className='font-light hover:text-gray-100 active:text-gray-400'
        target='_blank'
        href='https://www.linkedin.com/in/soobinrho/'
        rel='noopener noreferrer'
      >
        Soobin
      </a>
      .
    </div>
  );
}
