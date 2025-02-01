

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import  getImages  from '../listofimgs';

export default function Hero() {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {getImages().map((img: any) => {
          return (
            <Image
              src={`/images/adelynsphotos/${img}`}
              alt='photos-by-adelyn'
              height={300}
              width={300}
            />
          );
        })}
      </div>
    </>
  );
}
