'use client';

import { useState } from 'react'
import { createClient } from '@utils/supabase/client';
import { getIPAddress } from '@auth/actions';
import { fetchFakeLogin } from '@auth/_helperFunctions/fetchOptions';
import { LoadingIcon } from "@dashboard/_components/icons/LoadingIcon";

export default function FakeLogin() {
  const [ showFakeLogin, setShowFakeLogin ] = useState(false);
  const [ fakeLoginInfo, setFakeLoginInfo ] = useState({ email: null, password: null });
  const [ loadingFakeLogin, setLoadingFakeLogin ] = useState(false);

  const getEmptyIpRow = async() => {
    const supabase = createClient();
    const { data: emptyIpEntry, error: emptyIpEntryError } = await supabase
    .from('fake_login')
    .select('*')
    .is('ip_address', null)
    .limit(1);

    if (emptyIpEntryError) {
      console.error("Error fetching entry with null IP:", emptyIpEntryError);
      return null;
    }

    if (!emptyIpEntry || emptyIpEntry.length === 0) {
      console.log("No entries found with null IP.");
      return null;
    }

    return emptyIpEntry[0];
  };

  const addIPAddress = async(ip: string) => {
    const supabase = createClient();
    const emptyIpEntry = await getEmptyIpRow();
    const { error } = await supabase
    .from('fake_login')
    .update({ ip_address: ip })
    .eq('email', emptyIpEntry.email);

    if (error) {  
      console.error("Error adding entry:", error);
    }
    return null;
  };
  
  const handleFakeLogin = async() => {
    setLoadingFakeLogin(true);
    const ip = await getIPAddress();
    let fakeLogin = await fetchFakeLogin(ip);
    if (fakeLogin === null) {
      // If the response is empty, add the IP address to the fake_login table
      await addIPAddress(ip);
      fakeLogin = await fetchFakeLogin(ip);
    }
    setShowFakeLogin(true);
    setLoadingFakeLogin(false);
    setFakeLoginInfo({email: fakeLogin.email, password: fakeLogin.password});
  };

  return (
    <>
      <div className='flex flex-row items-center text-primary'>
        Or, generate a &nbsp;
        <button type="submit" className="btn-secondary small-btn" onClick={handleFakeLogin} disabled={loadingFakeLogin}>
        {loadingFakeLogin ? <LoadingIcon /> : 'fake login'}
      </button>
        &nbsp;
        to browse the application!
      </div>
      {showFakeLogin ? <div className='mt-3'>
        <p className='text-primary text-center'>{`Email: ${fakeLoginInfo.email}`}</p>
        <p className='text-primary text-center'>{`Password: ${fakeLoginInfo.password}`}</p>
      </div> : null}
    </>
  )
}
