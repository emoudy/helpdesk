import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // TODO: findout why this is not getting the user
  // const {
  //   data: { user }, error: userError
  // } = await supabase.auth.getUser()

  // if (userError) {
  //   console.error("Error fetching user:", userError.message);
  //   const errorURL = new URL("/error", request.nextUrl);
  //   return NextResponse.redirect(errorURL.toString());
  // }

  const user = {
    "instance_id": "00000000-0000-0000-0000-000000000000",
    "id": "cf121c2b-1d3b-45a5-bde3-d9309c73adcb",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "elda@moudy.net",
    "encrypted_password": "$2a$10$Qu8bkXH2QlI9leiesQY.Y.gNjnsbyQ/P.dZACmU8EqLFtRA3VOsT.",
    "email_confirmed_at": "2024-08-01 15:24:45.838703+00",
    "invited_at": null,
    "confirmation_token": "",
    "confirmation_sent_at": null,
    "recovery_token": "",
    "recovery_sent_at": null,
    "email_change_token_new": "",
    "email_change": "",
    "email_change_sent_at": null,
    "last_sign_in_at": "2024-08-04 15:29:33.932087+00",
    "raw_app_meta_data": {
      "provider": "email",
      "providers": [
        "email"
      ]
    },
    "raw_user_meta_data": {},
    "is_super_admin": null,
    "created_at": "2024-08-01 15:24:45.832652+00",
    "updated_at": "2024-08-04 15:29:33.943683+00",
    "phone": null,
    "phone_confirmed_at": null,
    "phone_change": "",
    "phone_change_token": "",
    "phone_change_sent_at": null,
    "confirmed_at": "2024-08-01 15:24:45.838703+00",
    "email_change_token_current": "",
    "email_change_confirm_status": 0,
    "banned_until": null,
    "reauthentication_token": "",
    "reauthentication_sent_at": null,
    "is_sso_user": false,
    "deleted_at": null,
    "is_anonymous": false
  };

  if (
    !user &&
    !request.nextUrl.pathname.startsWith('/login') &&
    !request.nextUrl.pathname.startsWith('/error') &&
    !request.nextUrl.pathname.startsWith('/verify') &&
    !request.nextUrl.pathname.startsWith('/confirm')
  ) {

    // if no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
  // creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse
};