import Link from 'next/link';

export default function PrototypePage() {
  return (
    <div className='min-h-screen overflow-y-auto overflow-x-hidden bg-background'>
      <div className='isolate'>
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
