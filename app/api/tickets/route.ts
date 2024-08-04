import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '../../../utils/supabase/server';

/**
 * This forces all the route handlers to be dynamic.  They are static by default.
 * By setting this to "force-dynamic", they will be dynamic and fetch anytime a request is made.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = createClient();
  const { data, error } = await supabase.from('Tickets')
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const newTicketInfo = await request.json();
  const supabase = createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError) {
    console.error("Error fetching user:", userError?.message || "User not found");
    return NextResponse.json({ error: userError?.message || "User not found" }, { status: 401 });
  }

  const { data, error } = await supabase.from('Tickets').insert({
    ...newTicketInfo,
    user_email: user.email,
  }).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}