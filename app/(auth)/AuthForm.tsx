'use client';

import { login, signup } from '@auth/actions';
import InputItem from '@auth/_components/InputItem';

export default function AuthForm() {
  return ( 
    <form id="formElem" className='flex flex-col items-center justify-center'>
      <section className='flex flex-col justify-center'>
        <InputItem inputLabel="Email" inputType="email" useIcon />
        <InputItem inputLabel="Password" inputType={"password"} useIcon usePassword />
      </section>
      <section className='flex flex-col justify-center my-5'>
        <button type="submit" className="btn-primary_alt" formAction={login}>
          Login
        </button>
        <div className='flex flex-row items-center text-primary mt-10'>
          Or, &nbsp;
          <button type="submit" className="btn-secondary small-btn" formAction={signup}>
            Sign Up
          </button>
          &nbsp;
          to make an account!
        </div>
      </section>
    </form>
  );
}
