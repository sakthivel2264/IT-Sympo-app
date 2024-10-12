"use client";

import React from "react";

const BackgroundVideo = () => {

  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1] filter brightness-70"
      >
        <source src="/bgV.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
