'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { IconCloudDemo } from './iconcloud'

type Event = {
  id: string
  name: string
  description: string
  rules: string[]
  coordinators: string[]
}

type Category = {
  id: string
  name: string
  events: Event[]
}

const categories: Category[] = [
  {
    id: 'technical',
    name: 'Technical',
    events: [
      {
        id: 'tech1',
        name: 'Professional Presenter',
        description: 'Present your innovative research or ideas on a technical topic.',
        rules: [
          'Teams of 2-4 members',
          '10 minutes for presentation followed by 5 minutes of Q&A',
          'Participants must Submit PPT before 30mins of event starts'
        ],
        coordinators:[
          "Gokul: 8015960964",
          "Abishek: 9342037578"
        ]
      },
      {
        id: 'tech2',
        name: 'MindSpark ',
        description: 'Engage in a quiz-style event to brainstorm and solve challenging technical problems.',
        rules: [
          'Teams of Maximum 2 members',
          'Participant should bring their own laptop',
          'Solution ideas should satisfies the given problem criteria; no negative marking',
          'participant should submit as proof of concept.',
          'Based on Criteria choose winners'
        ],
        coordinators:[
          "Gopinath: 8667825086",
          "VenkatKumar: 6381775607"
        ]
      },
      {
        id: 'tech3',
        name: 'Guezz Tech',
        description: 'Identify the technical terms or tools based on visual clues.',
        rules: [
          'Teams of Maximum 2 members',
          'Total 3 rounds',
          'competitive Rounds, The team with the most Correct Guesses wins'
        ],
        coordinators:[
          "Vidhun: 8807563108",
          "Sakthivel: 6369358986"
        ]
      },
      {
        id: 'tech4',
        name: 'Capture The Flag (CTF)',
        description: 'A cybersecurity challenge where participants solve security puzzles and capture digital flags.',
        rules: [
          'Teams of 2 members',
          'Laptops Are Mandatory For The event. No Devices Will Be provided',
          'Players Need an Pico Ctf Account If not, Create an Account before event!.',
          ' It Contains Three Rounds. It could be An Web , Reverse Engineering, Forensics, Crypto Etc.',
          'The team with the Three flags captured wins',
          'Its Purely First Finish First Price Event'
        ],
        coordinators:[
          "Kumaraguru: 7092106018",
          "Annie: 8122874049"
        ]
      }
    ]
  },
  {
    id: 'non-technical',
    name: 'Non-Technical',
    events: [
      {
        id: 'nontech1',
        name: 'ESports',
        description: 'Compete in a Free Fire battle royale tournament and be the last team standing.',
        rules: [
          'Teams of 4 members',
          'Standard Free Fire game rules apply',
          'No VPN should be Used, PC Players are not allowed.',
          'If any participants gets caught using game bugs or hacks, whole team will be disqualified.',
          'Every Custom Lobby will be host by the tournament Officials.',
          'Guns Property will remains of, Full map (BERMUDA) matches will be same as the BR RANK mode.',
          'Team-up is Not allowed in the Full map matches, Every team should join in the lobby with their registered players only.',
          'After 2nd Round the matches will be of CLASH SQUAD(Unlimitted Ammo).',
          'Character Skills and Guns Property will remains off in CS mode, Granades, Spray bombs and Flash bombs are not allowed in CS matches.',
          'Double Vectors are not allowed in CS, Breaking of Gloo Walls are allowed.',
          'All the Teams should be there within 5 min after getting the Custom ID and Passward,No teams will be considered if they gets late. Be on time everyone. ',
          'The team with the highest score across multiple rounds wins'
        ],
        coordinators:[
          "Sanjay: 9025953879",
          "Kathir: 9345181208"
        ]
      },
      {
        id: 'nontech2',
        name: 'The Fortune Bowl',
        description: 'Participate in a fun, themed event!',
        rules: [
          'Teams of 2 members',
          'Players take turns drawing one slip from the bowl containing various activities or task.',
          'Each player has a time limit (30 seconds)',
          'Successful completion earns points: 1 point for simple tasks and 2 points for challenging ones.',
          'If a player cannot complete the activity, they receive no points, and the turn passes.',
          'The game continues by rounds.',
          'The player with the most points at the end wins!'
        ],
        coordinators:[
          "Kenith: 6383055099",
          ""
        ]
      },
      {
        id: 'nontech3',
        name: 'Music Mania',
        description: 'Participate in a fun, Music Event! Identify the background music (BGM) from a clip.',
        rules: [
          " Each team listens to a BGM snippet.",
        " If they identify the music correctly, a team member must pick a flag to confirm their answer.",
" Correct answers earn a flag.",
" At the end of this round, only the top-performing teams (based on earned flags) proceed to Round 2",
"Round 2: Find the Song by Lines",
"Objective: Identify the song from a given lyric line.",
"Rules:",
" The quizmaster reads a lyric line aloud.",
" If a team recognizes the song, they must complete two tasks:",
   "- Task 1: One member blows up a balloon and pops it.",
   "- Task 2: After the balloon pops, another teammate picks a flag and announces the song title.",
" Only the teams who complete the tasks and answer correctly advance to Round 3.",
"Round 3: Guess the Lyrics",
"Objective: Identify the missing or next line of lyrics from a popular song.",
"Rules:",
" Teams are given part of a song’s lyrics, and they must guess the next line correctly.",
" Before answering, one team member must successfully flip a bottle.",
" The team with the most correct answers and completed tasks wins the event."
        ],
        coordinators:[
          "Keerthana: 73051 86947",
          ""
        ]
      }
    ]
  },{
    id: 'online events',
    name: 'Online',
    events: [
      {
        id: 'online events1',
        name: 'SHOW KAATU',
        description: 'This is an Social Media Event',
        rules: [
            "Contest is open to individuals aged 18 and older.",
            "The contest begins on [18.10.24] and ends on [24.10.24].",
            "Entries submitted after the deadline will not be considered",
            "Participants must submit high-quality photographs to our Instagram account @infowitz_24",
            "Photos must be original",
            "Your wish to submit picture or video",
            "Entries will be judged based on peoples voting using likes",
            "Participants must come to the event day and the results will be announced on Oct 25",
            "⚠Any fraudulent activity will result is immediate disqualification.",],
        coordinators:[
          "Vignesh: 6384271797",
          "Harshavarthini: 9840828509"
        ]
      },
      {
        id: 'online events2',
        name: 'THUG COMMENTS',
        description: 'Compete in a Free Fire battle royale tournament and be the last team standing.',
        rules: [
          "We will post some pictures, and you can drop your best and most relevant comments.",
          "The contest begins on [18.10.24] and ends on [24.10.24].",
          "Late entries will not be accepted",
          "Comments must be original and not violate any copyright",
          "Entries will be judged based on peoples voted help of likes",
          "Participants must come to the event day and the results will be announced on Oct 25",
          "⚠Any fraudulent activity will result in immediate disqualification",
          "⚠Don't do violence, hate or exploitation comments",
        ],
        coordinators:[
          "Vignesh: 6384271797",
          "Harshavarthini: 9840828509"
        ]
      },
    ]
  }
];


export default function EventShowcase() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  

  const resetSelection = () => {
    setSelectedEvent(null)
    setSelectedCategory(null)
  }

  const Home = () =>{
    router.push('/');
  }

  const CategorySelection = () => (
    <div>
      <Button variant="ghost" onClick={Home} className="mb-4 hover:bg-white/10">
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
      </Button>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {categories.map((category) => (
        <Card key={category.id} className="cursor-pointer hover:bg-white/10 backdrop-blur-sm bg-white/0 border-white/50" onClick={() => setSelectedCategory(category)}>
          <CardHeader>
            <CardTitle>{category.name}</CardTitle>
            <CardDescription>Click to view events</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
      <Link href="/googleform" className='mt-6 flex justify-center'>
        <Button className="bg-white text-blue-600 hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 w-64" size="sm">
            Register Now
        </Button>
      </Link>
      <div className='flex justify-center'>
        <IconCloudDemo/>
      </div>
      
    </div>
  )

  const EventList = () => (
    <div className="space-y-4">
      <Button variant="ghost" onClick={resetSelection} className="mb-4 hover:bg-white/10">
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Categories
      </Button>
      <h2 className="text-2xl font-bold mb-4">{selectedCategory?.name} Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectedCategory?.events.map((event) => (
          <Card key={event.id} className="cursor-pointer hover:bg-white/10 backdrop-blur-sm bg-white/0 border-white/50" onClick={() => setSelectedEvent(event)}>
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
              <CardDescription>Click for details</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )

  const EventDetails = () => (
    <div className="space-y-4">
      <Button variant="ghost" onClick={() => setSelectedEvent(null)} className="mb-4 hover:bg-white/10">
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Events
      </Button>
      <Card className='backdrop-blur-sm bg-white/0 border-white/50'>
        <CardHeader>
          <CardTitle>{selectedEvent?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{selectedEvent?.description}</p>
          <h3 className="text-lg font-semibold mb-2">Rules:</h3>
          <ul className="">
            {selectedEvent?.rules.map((rule, index) => (
              <li key={index}>📌{rule}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2 mt-4">Co-ordinators:</h3>
          <ul className="pl-5">
            {selectedEvent?.coordinators.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Link href="/googleform" className='flex justify-center'>
      <Button className="bg-white text-blue-600 hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 w-64" size="sm">
       Register Now
      </Button>
      </Link>
    </div>
  )

  return (
    <div className="min-w-full mx-auto p-4 bg-black/15 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      {!selectedCategory && <CategorySelection />}
      {selectedCategory && !selectedEvent && <EventList />}
      {selectedEvent && <EventDetails />}
    </div>
  )
}
