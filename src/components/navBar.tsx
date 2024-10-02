"use client";

import React, { ReactNode, useRef, useState } from 'react';
import { ModeToggle } from './mode-toggle';
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
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <Loader/>
        </div>
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -z-10 transform -translate-x-1/2 -translate-y-1/2 object-cover filter brightness-50 mt-16"
        onLoadedData={handleLoadedData}
      >
        <source src="/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className='flex flex-row justify-between border p-2'>
        <div className='flex flex-col justify-center m-2 cursor-pointer'>
          <Menu />
        </div>
        <div className='flex  justify-center items-center m-2'>
        <h2>IT</h2>
        </div>
        <div className='flex flex-row justify-center m-2 cursor-pointer'>
          <div
            onClick={toggleMute}
            className={"cursor-pointer bg-background flex justify-center items-center mx-2"}
          >
            {isMuted ? <Volume2 /> : <VolumeOff />}
          </div>
          <div className='flex justify-center items-center'>
            <ModeToggle />
          </div>
         
        </div>
      </header>
      {children}
    </div>
  );
};

export default NavBar;
