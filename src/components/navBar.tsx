/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { ReactNode, useRef, useState } from 'react';
// import { ModeToggle } from './mode-toggle';
import { Menu } from './menu';
import { Volume2, VolumeOff } from 'lucide-react';
import Loader from './loader';

interface NavBarProps {
  children: ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!videoRef.current.muted);
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false); 
  };

  return (
    <div>
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 z-10">
          <Loader/>
        </div>
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1] filter brightness-70"
        onLoadedData={handleLoadedData}
      >
        <source src="/bgV.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className='flex flex-row justify-between border p-2 bg-transparent/85'>
        <div className='flex flex-col justify-center m-2 cursor-pointer'>
          <Menu />
        </div>
        <div className='flex  justify-center items-center m-2'>
        <a href='/'>IT Sympo</a>
        </div>
        <div className='flex flex-row justify-center m-2 cursor-pointer'>
          {/* <div
            onClick={toggleMute}
            className={"cursor-pointer bg-background flex justify-center items-center mx-2"}
          >
            {isMuted ? <Volume2 /> : <VolumeOff />}
          </div> */}
          {/* <div className='flex justify-center items-center'>
            <ModeToggle />
          </div> */}
         
        </div>
      </header>
      {children}
    </div>
  );
};

export default NavBar;
