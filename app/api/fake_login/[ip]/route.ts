import { NextResponse } from 'next/server';
import { createClient } from '@utils/supabase/server';

/**
 * This forces all the route handlers to be dynamic.  They are static by default.
 * By setting this to "force-dynamic", they will be dynamic and fetch anytime a request is made.
 */
export const dynamic = "force-dynamic";

export async function GET(_, { params }:{ params: { ip: string } }) {
  const ip = params.ip;
  const supabase = createClient();
  const { data } = await supabase.from('fake_login').select('*').eq('ip_address', ip).single();
  return NextResponse.json({ data });
}