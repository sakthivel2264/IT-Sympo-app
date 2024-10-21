import React, { Suspense } from 'react';
import Loading from './ui/Loading';

const Video: React.FC = () => {
  return (
    <div className="flex justify-center items-center  rounded-xl w-full h-72">
      <Suspense fallback={<div className="flex justify-center items-center"><Loading /></div>}>
      <video
        loop
        muted
        playsInline
        autoPlay
        preload="auto" // This attribute ensures the video is loaded immediately
        className="border rounded-xl w-full"
      >
        <source src="/sympo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </Suspense>
    </div>
  );
};

export default Video;
