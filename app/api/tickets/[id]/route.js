import { NextResponse } from "next/server";
import { createClient } from "utils/supabase/server";

/**
 * This forces all the route handlers to be dynamic.  They are static by default.
 * By setting this to "force-dynamic", they will be dynamic and fetch anytime a request is made.
 */
// export const dynamic = "force-dynamic";


export async function DELETE(_, { params }) {
  const id = params.id;
  const supabase = createClient();
  const { error } = await supabase.from('Tickets').delete().eq('id', id);

  return NextResponse.json({ error });
} 
