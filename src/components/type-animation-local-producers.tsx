'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function TypeAnimationLocalProducers() {
  return (
    <>
      <div>
        <h1 className='lg:leading-tighter text-pretty text-start text-xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
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
    </>
  );
}
