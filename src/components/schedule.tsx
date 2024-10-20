"use client"

import React from 'react'

const Schedule = () => {
  return (
    <div>
      <h1>Symposium Agenda - October 25</h1>
      <p><strong>Venue:</strong> Department of IT</p>
      {/* <p><strong>Event Theme:</strong> Innovation in Technology</p> */}
      <br/>
      <hr />
      <br/>
      <h2>08:00 AM - 08:30 AM: Registration</h2>
      <p><strong>Venue:</strong> Near Principal Office</p>
      <p>Participants and guests check in, collect Tags, and symposium materials.</p>
      <br/>
      <hr />
      <br/>
      <h2>08:30 AM - 09:00 AM: Inauguration Ceremony</h2>
      <p><strong>Venue:</strong> Auditorium</p>
      <p><strong>Chief Guest:</strong> [Chief Guest&apos;s Name]</p>
      <p><strong>Keynote Speaker:</strong> [Keynote Speaker&apos;s Name]</p>
      <br/>
      <ul>
        <li>Welcome address by the symposium organizing team.</li>
        <li>Inaugural speech by the Chief Guest.</li>
        <li>Keynote address by the industry expert on &apos;Future of Technology in Engineering.&apos;</li>
        <li>Lighting of the lamp and formal opening of the symposium.</li>
      </ul>
      <br/>

      <hr />
      <br/>
      <h2>09:00 AM - 12:25 PM: Parallel Sessions (Technical and Non-Technical Events)</h2>
      <br/>
      <strong className='underline'>Technical Events:</strong>
      <div>
      <br/>
        <h4 className='underline'>Professional Presenter</h4>
        {/* <p><strong>Time:</strong> 09:00 AM - 10:30 AM</p> */}
        <p><strong>Venue:</strong> Seminar Hall</p>
        <p>Description: Participants present their research papers on various topics related to engineering and technology.</p>
        <br/>
        <h4 className='underline'>Mind Spark</h4>
        {/* <p><strong>Time:</strong> 10:30 AM - 12:00 PM</p> */}
        <p><strong>Room:</strong> MB204</p>
        <p>Description: A debugging challenge where participants find and fix bugs in given code snippets.</p>
        <br/>
        <h4 className='underline'>CTF (Capture the Flag)</h4>
        {/* <p><strong>Time:</strong> 09:00 AM - 10:30 AM</p> */}
        <p><strong>Venue:</strong> IT Lab</p>
        <p>Description: A cybersecurity competition where participants solve challenges to capture virtual flags.</p>
        <br/>
        <h4 className='underline'>Guezz Tech</h4>
        {/* <p><strong>Time:</strong> 10:30 AM - 12:00 PM</p> */}
        <p><strong>Room:</strong> MB206</p>
        <p>Description: A tech quiz where participants guess technical terms based on visual clues.</p>
      </div>
      <br/>
      <h3 className='underline'>Non-Technical Events:</h3>
      <br/>
      <div>
        <h4 className='underline'>Arena of Fire(FreeFire)</h4>
        {/* <p><strong>Time:</strong> 09:00 AM - 10:30 AM</p> */}
        <p><strong>Room:</strong> MB204</p>
        <p>Description: Teams compete in FreeFire battles.</p>
        <br/>
        <h4 className='underline'>The Fortune Bowl</h4>
        {/* <p><strong>Time:</strong> 10:30 AM - 12:00 PM</p> */}
        <p><strong>Room:</strong> IT Seminar Hall</p>
        <p>Description: Participants compete with a fun Based Competitions.</p>
        <br/>
        <h4 className='underline'>Music Mania</h4>
        {/* <p><strong>Time:</strong> 10:30 AM - 12:00 PM</p> */}
        <p><strong>Room:</strong> MB207</p>
        <p>Description: Participants compete with a Music Based Competitions.</p>
        <br/>
        <h4 className='underline'>The Fortune Bowl</h4>
        {/* <p><strong>Time:</strong> 10:30 AM - 12:00 PM</p> */}
        <p><strong>Room:</strong>IT Seminar Hall</p>
        <p>Description: Participants compete with a fun Based Competitions.</p>
      </div>
      <br/>
      <hr />
      <br/>
      <h2>1:15 PM - 02:00 PM: Lunch Break</h2>
      {/* <p><strong>Venue:</strong> College Canteen</p> */}
      <br/>
      <hr />
      <br/>
      <h2>02:00 PM - 02:50 PM: Prize Distribution Ceremony</h2>
      <p><strong>Room:</strong> MB202</p>
      <p>Description: Prizes awarded to winners of both technical, non-technical and Online SocialMedia events.</p>
      <p>Closing remarks by the symposium organizing team.</p>
    </div>
  )
}

export default Schedule