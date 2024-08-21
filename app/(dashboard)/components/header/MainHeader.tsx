import Image from 'next/image';
import React from 'react'
import smPicture from '@public/sun_small.png';
import lgPicture from '@public/sun.png';
import LogoutIcon from '../navbar/LogoutIcon';

interface MainHeaderProps {
  small?: boolean;
};

export default function MainHeader({ small }: MainHeaderProps) {
  const logoSize = {
    width: small ? 70 : 170,
    pic: small ? smPicture : lgPicture,
    textSize: small ? 'null' : 'text-4xl',
    textColor: small ? 'text-white' : 'text-primary',
  }

  return (
    <div className="flex justify-center items-center p-5">
      <section className="flex flex-col justify-center items-center">
        <Image
          src={logoSize.pic}
          alt="HelpDesk logo"
          width={logoSize.width}
          quality={100} 
          placeholder="blur"
        />
        <h3 className={`${logoSize.textColor} ${logoSize.textSize}`}>
          HelpDesk
        </h3>
      </section>
      <section className='absolute top-1 right-1 '>
        <LogoutIcon />
      </section>
    </div>
  )
}
