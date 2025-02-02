'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function Intro() {
  const img = useRef(null);
  const intro = useRef(null);
  const hero = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.relative',
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: true,
        },
      })
      .to(img.current, {
        scale: 12,
        ease: 'ease',
        transformOrigin: 'center center',
      })
      .to(intro.current, {
        scale: 0.5,
        y: '-100%',
        ease: 'ease',
      });
  });
  return (
    <>
      <div className='relative h-screen '>
        <div
          className='absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center font-lobster text-white overflow-hidden '
          ref={intro}
        >
          <span className='h-screen w-screen absolute z-30 bg-stone-800 opacity-65'></span>
          <Image
            src='/images/tree.png'
            alt='bg-tree'
            layout='fill'
            objectFit='cover'
            className='absolute brightness-0 z-50 scale-150'
            ref={img}
          />
          <Image
            src='/images/adelynsphotos/097A7889.jpg'
            alt='bg-forest'
            layout='fill'
            objectFit='cover'
            className='object-bottom z-20 '
          />
          <h1 className='z-30 text-6xl'>Nick & Karen's</h1>
          <p className='z-30 text-3xl'>Engagment Photo's</p>
          <p className='z-30 text-4xl animate-bounce mt-6'>Scroll Below</p>
        </div>
      </div>
    </>
  );
}
