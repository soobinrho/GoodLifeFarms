'use client';

import Link from 'next/link';

export default function HeaderList() {
  return (
    <div className='absolute left-[50%] z-30 mt-4 flex translate-x-[-50%] gap-2 text-center'>
      <Link href='/list'>
        <svg
          className='fill-current hover:text-primary-3/70 active:text-black/70'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z' />
        </svg>
      </Link>
      <Link href='/list'>
        <span className='text-nowrap font-extralight hover:text-primary-3/70 active:text-black/70'>
          List
        </span>
      </Link>
    </div>
  );
}
