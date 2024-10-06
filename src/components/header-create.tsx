'use client';

export default function HeaderCreate() {
  return (
    <div className='absolute left-[50%] z-30 mt-4 flex translate-x-[-50%] gap-2 text-center'>
      <a
        target='_blank'
        href='https://forms.gle/5m1Tr4JXqT9Thb286'
        rel='noopener noreferrer'
      >
        <svg
          className='fill-current hover:text-primary-3/70 active:text-black/70'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='m11.239 15.533c-1.045 3.004-1.238 3.451-1.238 3.84 0 .441.385.627.627.627.272 0 1.108-.301 3.829-1.249zm.888-.888 3.22 3.22 6.408-6.401c.163-.163.245-.376.245-.591 0-.213-.082-.427-.245-.591-.58-.579-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245zm-3.127-.895c0-.402-.356-.75-.75-.75-2.561 0-2.939 0-5.5 0-.394 0-.75.348-.75.75s.356.75.75.75h5.5c.394 0 .75-.348.75-.75zm5-3c0-.402-.356-.75-.75-.75-2.561 0-7.939 0-10.5 0-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75zm0-3c0-.402-.356-.75-.75-.75-2.561 0-7.939 0-10.5 0-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75zm0-3c0-.402-.356-.75-.75-.75-2.561 0-7.939 0-10.5 0-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75z' />
        </svg>
      </a>
      <a
        target='_blank'
        href='https://forms.gle/5m1Tr4JXqT9Thb286'
        rel='noopener noreferrer'
      >
        <span className='text-nowrap font-extralight hover:text-primary-3/70 active:text-black/70'>
          Create
        </span>
      </a>
    </div>
  );
}