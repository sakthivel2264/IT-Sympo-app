"use client"

import React from 'react';

const Form = () => {
  return (
    <div className='flex justify-center'>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSeDWabL9LiTcyPv0u_p9yr1E0kbDnKZlUuFUGqKquSRIup5eg/viewform?embedded=true"  
        frameBorder="0" 
        style={{ margin: 0 }}
        scrolling="yes"
        title="Google Form"
        className='h-[730px] w-[480px] rounded-lg'
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Form;
