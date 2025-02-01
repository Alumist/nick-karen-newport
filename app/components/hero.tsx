import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import getImages from '../listofimgs';

export default function Hero() {
  return (
    <>
      <div className='grid grid-cols-3'>
        {getImages().map((img) => (
          <Image
            src={`/images/adelynsphotos/${img}`}
            alt="Adelyn's Photos"
            width={300}
            height={300}
          />
        ))}
      </div>
    </>
  );
}
