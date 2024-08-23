import Image from 'next/image';
import React from 'react'
import smPicture from '@public/sun_small.png';
import lgPicture from '@public/sun.png';
import LogoutIcon from '@dashboard/_components/navbar/LogoutIcon';
import { sizes } from '@/constants';

interface MainHeaderProps {
  size: string;
};

export default function MainHeader({ size }: MainHeaderProps) {
  const { small, large } = sizes;
  
  const logoSize = {
    [small]: {
      width: 70,
      pic: smPicture,
      textSize: 'text-lg',
      textColor: 'text-white',
    },
    [large]: {
      width: 170,
      pic: lgPicture,
      textSize: 'text-4xl',
      textColor: 'text-primary',
    },
  };

  return (
    <div className="flex justify-center items-center p-5">
      <figure className="flex flex-col justify-center items-center">
        <Image
          src={logoSize[size].pic}
          alt="HelpDesk logo"
          width={logoSize[size].width}
          quality={100} 
          placeholder="blur"
        />
        <figcaption className={`font-bold ${logoSize[size].textColor} ${logoSize[size].textSize}`}>HelpDesk</figcaption>
      </figure>
      <section className='absolute top-1 right-1 '>
        <LogoutIcon />
      </section>
    </div>
  )
}
