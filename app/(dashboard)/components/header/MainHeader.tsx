import Image from 'next/image';
import React from 'react'
import picture from '@public/sun_small.png';
import LogoutIcon from '../navbar/LogoutIcon';

export default function MainHeader() {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <Image
          src={picture}
          alt="HelpDesk logo"
          width={70}
          quality={100} 
          placeholder="blur"
        />
        <h3 className="text-white">
          HelpDesk
        </h3>
      </section>
      <section>
        <LogoutIcon />
      </section>
    </>
  )
}
