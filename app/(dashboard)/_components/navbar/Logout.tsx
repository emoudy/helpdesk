import React from 'react'
import LogoutButton from './LogoutButton'

interface LogoutProps {
  user: {
    email?: string;
  };
}
export default function Logout({ user }: LogoutProps) {
  return (
    <>
      <LogoutButton aria-label="Logout button"/>
      <small className="text-primary">{user ? user.email : null}</small>
    </>
  )
}
