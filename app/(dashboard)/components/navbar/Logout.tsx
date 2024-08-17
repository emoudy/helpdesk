import React from 'react'
import LogoutButton from './LogoutButton'

interface LogoutProps {
  user: {
    email?: string;
  };
}
export default function Logout({ user }: LogoutProps) {
  return (
    <div className="hidden row-start-3 row-span-2 md:flex flex-col justify-end items-center m-5">
      <LogoutButton aria-label="Logout button"/>
      <small className="text-primary">{user ? user.email : 'null'}</small>
    </div>
  )
}
