/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { ReactNode, useRef } from 'react';
import { Menu } from './menu';

interface NavBarProps {
  children: ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div>
      <header className='flex flex-row justify-between border p-2 bg-transparent/50'>
        <div className='flex flex-col justify-center m-2 cursor-pointer'>
          <Menu />
        </div>
        <div className='flex  justify-center items-center m-2'>
        <a href='/'>INFOWITZ2024</a>
        </div>
        <div className='flex flex-row justify-center m-2 cursor-pointer'>
         
        </div>
      </header>
      {children}
    </div>
  );
};

export default NavBar;
