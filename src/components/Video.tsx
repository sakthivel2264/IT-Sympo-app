import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="flex justify-center items-center  rounded-xl w-full h-72">
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
    </div>
  );
};

export default Video;
