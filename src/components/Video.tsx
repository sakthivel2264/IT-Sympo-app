import React, { useRef, useState, useEffect, Suspense } from 'react';
import Loading from './ui/Loading'; // Assuming you have a Loading component

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  // Delay the video loading by 3 seconds (3000 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000); // Set delay time here (in ms)

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center m-4  rounded-xl w-full h-72">
      <Suspense fallback={<div className="flex justify-center items-center"><Loading /></div>}>
        {showVideo ? (
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            autoPlay
            className="border rounded-xl w-full"
          >
            <source src="/sympo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Loading /> // Display loading until the video is shown
        )}
      </Suspense>
    </div>
  );
};

export default Video;
