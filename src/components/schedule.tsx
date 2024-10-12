import React from 'react'

const Schedule = () => {
  return (
    <div>
      <h1>Symposium Agenda - October 19</h1>
      <p><strong>Venue:</strong> Department of IT</p>
      {/* <p><strong>Event Theme:</strong> Innovation in Technology</p> */}

      <hr />

      <h2>08:00 AM - 08:30 AM: Registration</h2>
      <p><strong>Venue:</strong> Near Principal Office</p>
      <p>Participants and guests check in, collect Tags, and symposium materials.</p>

      <hr />

      <h2>08:30 AM - 09:00 AM: Inauguration Ceremony</h2>
      <p><strong>Venue:</strong> Auditorium</p>
      <p><strong>Chief Guest:</strong> [Chief Guest&apos;s Name]</p>
      <p><strong>Keynote Speaker:</strong> [Keynote Speaker&apos;s Name]</p>
      <ul>
        <li>Welcome address by the symposium organizing team.</li>
        <li>Inaugural speech by the Chief Guest.</li>
        <li>Keynote address by the industry expert on &apos;Future of Technology in Engineering.&apos;</li>
        <li>Lighting of the lamp and formal opening of the symposium.</li>
      </ul>

      <hr />

      <h2>09:00 AM - 12:25 PM: Parallel Sessions (Technical and Non-Technical Events)</h2>

      <h3>Technical Events:</h3>
      <div>
        <h4>Paper Presentation</h4>
        <p><strong>Time:</strong> 09:00 AM - 10:30 AM</p>
        <p><strong>Venue:</strong> Seminar Hall</p>
        <p>Description: Participants present their research papers on various topics related to engineering and technology.</p>

        <h4>Brainstorm</h4>
        <p><strong>Time:</strong> 10:30 AM - 12:00 PM</p>
        <p><strong>Venue:</strong> Room 202</p>
        <p>Description: A debugging challenge where participants find and fix bugs in given code snippets.</p>

        <h4>Catch the Flag (Cybersecurity Event)</h4>
        <p><strong>Time:</strong> 09:00 AM - 10:30 AM</p>
        <p><strong>Venue:</strong> Room 203</p>
        <p>Description: A cybersecurity competition where participants solve challenges to capture virtual flags.</p>

        <h4>Guess Tech</h4>
        <p><strong>Time:</strong> 10:30 AM - 12:00 PM</p>
        <p><strong>Venue:</strong> Room 204</p>
        <p>Description: A tech quiz where participants guess technical terms based on visual clues.</p>
      </div>

      <h3>Non-Technical Events:</h3>
      <div>
        <h4>E-Sports (FreeFire)</h4>
        <p><strong>Time:</strong> 09:00 AM - 10:30 AM</p>
        <p><strong>Venue:</strong> Room 205</p>
        <p>Description: Teams compete in FreeFire battles.</p>

        <h4>Themed Pot Luck</h4>
        <p><strong>Time:</strong> 10:30 AM - 12:00 PM</p>
        <p><strong>Venue:</strong> Room 201</p>
        <p>Description: Participants compete in showcasing photography with a specific theme.</p>
      </div>

      <hr />

      <h2>12:25 PM - 01:10 PM: Lunch Break</h2>
      <p><strong>Venue:</strong> College Cafeteria</p>

      <hr />

      <h2>01:10 PM - 02:50 PM: Parallel Sessions (Continuation and Finals)</h2>

      <h3>Technical Events (Final Rounds):</h3>
      <div>
        <h4>Paper Presentation (Final Round)</h4>
        <p><strong>Time:</strong> 01:10 PM - 01:50 PM</p>
        <p><strong>Venue:</strong> Room 201</p>
        <p>Description: Selected participants present in the final round.</p>

        <h4>Brainstorm (Final Round)</h4>
        <p><strong>Time:</strong> 01:50 PM - 02:30 PM</p>
        <p><strong>Venue:</strong> Room 202</p>
        <p>Description: Top participants from the preliminary round will compete.</p>

        <h4>Catch the Flag (Final Round)</h4>
        <p><strong>Time:</strong> 01:10 PM - 02:00 PM</p>
        <p><strong>Venue:</strong> Room 203</p>
        <p>Description: The final challenge to capture the flag.</p>

        <h4>Guess Tech (Final Round)</h4>
        <p><strong>Time:</strong> 02:00 PM - 02:30 PM</p>
        <p><strong>Venue:</strong> Room 204</p>
        <p>Description: Final round of the tech quiz.</p>
      </div>

      <h3>Non-Technical Events (Final Rounds):</h3>
      <div>
        <h4>E-Sports (FreeFire Finals)</h4>
        <p><strong>Time:</strong> 01:10 PM - 02:00 PM</p>
        <p><strong>Venue:</strong> Room 205</p>
        <p>Description: Final round for FreeFire teams.</p>

        <h4>Themed Pot Luck (Final Judging)</h4>
        <p><strong>Time:</strong> 02:00 PM - 02:30 PM</p>
        <p><strong>Venue:</strong> Room 201</p>
        <p>Description: Final judging of the photography competition.</p>
      </div>

      <hr />

      <h2>02:30 PM - 02:50 PM: Prize Distribution Ceremony</h2>
      <p><strong>Venue:</strong> 202</p>
      <p>Description: Prizes awarded to winners of both technical and non-technical events.</p>
      <p>Closing remarks by the symposium organizing team.</p>
    </div>
  )
}

export default Schedule