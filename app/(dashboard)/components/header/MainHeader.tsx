import Image from 'next/image';
import React from 'react'
import picture from '@public/sun_small.png';
import LogoutButton from '../navbar/LogoutButton';

interface MainHeaderProps {
  user: { email: string };
}

export default function MainHeader({ user }: MainHeaderProps) {
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
      <section className="flex flex-col justify-end items-center">
        <LogoutButton />
        <small className="text-white">{user ? user.email : 'null'}</small>
      </section>
    </>
  )
}
