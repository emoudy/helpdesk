'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@utils/supabase/server';
import { headers } from 'next/headers'

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error('login error:', error.message);
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error('signup error:', error.message);
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/verify');
}

export const getIPAddress = async() => {
  const FALLBACK_IP_ADDRESS = '0.0.0.0';
  const forwardedFor = headers().get('x-forwarded-for');
  let ipAddress = "";
  console.log("Forwarded for: ", forwardedFor);

  if (forwardedFor) {
    ipAddress = forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
  } else {
    ipAddress =  headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
  }

  return ipAddress.replace(/^::ffff:/, '');
};