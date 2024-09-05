'use client';

import { useState } from 'react'
import { createClient } from '@utils/supabase/client';
import { getIPAddress } from '@auth/actions';

export default function FakeLogin() {

  const [ showFakeLogin, setShowFakeLogin ] = useState(false);
  const [ fakeLoginInfo, setFakeLoginInfo ] = useState({ email: null, password: null });
  
  const getFakeLogin = async(clientIP: string) => {
    const supabase = createClient();
    const { data, error } = await supabase.from('fake_login').select('*').eq('ip_address', clientIP);
  
    if (error) throw new Error("Error fetching tickets");
    return data || [];
  }

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

  const addIPAddress = async(clientIP: string) => {
    const supabase = createClient();
    const emptyIpEntry = await getEmptyIpRow();
    const { error } = await supabase
    .from('fake_login')
    .update({ ip_address: clientIP })
    .eq('email', emptyIpEntry.email);

    if (error) {  
      console.error("Error adding entry:", error);
    }
    return null;
  }

  const handleFakeLogin = async() => {
    const clientIP = await getIPAddress();
    console.log('handleFakeLogin clientIP:', clientIP);
    let fakeLogin = await getFakeLogin(clientIP);

    if (fakeLogin.length === 0) {
      console.log('fakeLogin is null');
      await addIPAddress(clientIP);
      fakeLogin = await getFakeLogin(clientIP);
    }
    setShowFakeLogin(true);
    setFakeLoginInfo({email: fakeLogin[0].email, password: fakeLogin[0].password});
  };

  return (
    <>
      <div className='flex flex-row items-center text-primary'>
        Or, generate a &nbsp;
        <button type="submit" className="btn-secondary small-btn" onClick={handleFakeLogin}>
          fake login
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
