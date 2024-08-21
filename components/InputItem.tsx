'use client';

import { useState } from 'react';

interface InputItemProps {
  inputLabel: string;
  inputType: string;
  useIcon?: boolean;
  usePassword?: boolean;
}

export default function InputItem({ inputLabel, inputType, useIcon, usePassword }: InputItemProps) {
  const [type, setType] = useState(inputType);
  const setIconCSS = ""; // 'h-20 w-20 text-primary text-opacity-50';
  
  // className={`${setIconCSS} pointer-events-none text-red-800`}

  const onClick = () => {
    if (type === "password") setType("text");
    else setType("password");
  }
 // left: 0, inset: "0 3", position: "absolute", height: "24px", width: "24px"
  const emailIcon =
    <svg xmlns="http://www.w3.org/2000/svg" fill="indigo" fill-opacity=".25" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5} className="icon-left size-6 text-primary">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>

  const passwordIcon =
    <svg xmlns="http://www.w3.org/2000/svg" fill="indigo" fill-opacity=".25" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="icon-left size-6" style={{}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>

  const eyeOpenIcon = 
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill-opacity=".25" fill="indigo" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="icon-right size-6" style={{}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>

  const eyeClosedIcon =
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill-opacity=".25" fill="indigo" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="icon-right size-6" style={{ right: 0}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>

  const icons = {
    email: emailIcon,
    password: passwordIcon,
  }

  const eyeIcon =   
    type === "password"
    ? eyeOpenIcon
    : eyeClosedIcon;
  
  // TODO: Remove the style={{}} in the components and use TailwindCSS classes instead
  // NOTE: The properties inside of style={{}} were not working in tailwindcss when this was done.
  return (
    <div className="mb-5">
      <label htmlFor={inputType} className='text-primary'>{inputLabel}</label>
      <div className="relative flex flex-col justify-center items-center w-full" style={{ position: "relative" }}>
        {useIcon && <div className="absolute" style={{ left: 0, marginLeft: "6px" }}>{icons[inputType]}</div>}
        {(useIcon && usePassword) && <div className="absolute" style={{ right: 0, marginRight: "6px" }}>{eyeIcon}</div>}

        <input
          id={inputType}
          type={type}
          className={`bg-primary bg-opacity-10 ${useIcon ? "useIcon" : ""}`}
          name={inputType}
          required
        />

      </div>
    </div>
  )
}
