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
        name: 'Nexus of ideas',
        description: 'Present your innovative research or ideas on a technical topic to a panel of judges.',
        rules: [
          'Teams of 2-4 members',
          '10 minutes for presentation followed by 5 minutes of Q&A',
          'Participants must bring a printed copy of their paper'
        ],
        coordinators:[
          "Gokul: 8015960964",
          "Abishek: 9342037578"
        ]
      },
      {
        id: 'tech2',
        name: 'BrainStorm',
        description: 'Engage in a quiz-style event to brainstorm and solve challenging technical problems.',
        rules: [
          'Individual participation',
          'Limited time for each question',
          'Points awarded for correct answers; no negative marking'
        ],
        coordinators:[
          "Gopinath: 8667825086",
          ""
        ]
      },
      {
        id: 'tech3',
        name: 'Guezz Tech',
        description: 'Identify the technical terms or tools based on visual clues.',
        rules: [
          'Teams of 2 members',
          'Time-limited rounds',
          'competitive Rounds, Totally 3 Rounds'
        ],
        coordinators:[
          "Vidhun: 8807563108",
          "Sakthivel: 6369358986"
        ]
      },
      {
        id: 'tech4',
        name: 'Catch The Flag (CTF)',
        description: 'A cybersecurity challenge where participants solve security puzzles and capture digital flags.',
        rules: [
          'Teams of 2-4 members',
          'No external tools allowed except those provided by organizers',
          'The team with the most flags captured wins'
        ],
        coordinators:[
          "Kumaraguru: 7092106018",
          ""
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
          'Teams of 3-5 members',
          'Standard Free Fire game rules apply',
          'The team with the highest score across multiple rounds wins'
        ],
        coordinators:[
          "Sanjay: 9025953879",
          "Kathir: 9345181208"
        ]
      },
      {
        id: 'nontech2',
        name: 'Themed Pot Luck',
        description: 'Participate in a fun, themed event where each dish or contribution fits a pre-determined theme.',
        rules: [
          'Teams of 2-4 members',
          'Dishes must be homemade and align with the given theme',
          'Judging based on creativity, presentation, and taste'
        ],
        coordinators:[
          "Kenith: 6383055099",
          ""
        ]
      }
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
          <ul className="list-disc pl-5">
            {selectedEvent?.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
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