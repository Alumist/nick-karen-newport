'use client';

import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HeroProps {
  images: string[];
}

const Hero: React.FC<HeroProps> = ({ images }) => {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.from(ref.current, {
      x: -300,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: '+=100%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
  }, [ref]);

  return (
    <>
      <div className='grid grid-cols-3 justify-center items-center justify-self-center gap-4'>
        {images.map((img) => (
          <Image
            key={img}
            src={`/images/adelynsphotos/${img}`}
            alt="Adelyn's Photos"
            width={300}
            height={300}
            ref={ref}
          />
        ))}
      </div>
    </>
  );
};

export default Hero;
