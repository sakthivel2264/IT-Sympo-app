"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useRef } from 'react'
import { CalendarDays, MapPin, Users } from "lucide-react"
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from 'next/link';
import Schedule from './schedule';
import Loading from './ui/Loading';
import Video from './Video';

const HeroSection = () => {
  const [open, setOpen] = React.useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="w-full min-h-screen bg-black/15 flex items-center justify-center px-8 pt-4">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Infowitz2024 : IT Symposium
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl mx-auto lg:mx-0">
                Join us for a week of groundbreaking ideas, inspiring speakers, and collaborative workshops. Expand your horizons and connect with brilliant minds.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link href="https://forms.gle/kLZbivTB3MsPKD1z6">
              <Button className="bg-white text-blue-600 hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 w-64" size="sm">
                Register Now
              </Button>
              </Link>
              
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 w-64 transition-all duration-300" size="sm">
                View Schedule
              </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[430px] max-h-[75vh] mr-4 bg-transparent/85 border rounded-lg overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Schedule</DialogTitle>
                    <DialogDescription>
                      Agenda
                    </DialogDescription>
                  </DialogHeader>
                  <Schedule/>
                </DialogContent>
              </Dialog>
              <Link href="/events">
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 w-64 transition-all duration-300" size="sm">
                  View Events
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-white">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                <span>Oct 25, 2024</span>
              </div>
              <a href='https://maps.app.goo.gl/1TQjjhNmLozL5RJGA' className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>DMI College of Engineering</span>
              </a>
              {/* <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>50+ Attendees</span>
              </div> */}
            </div>
            <Video/>
          </div>
        </div>
      </div>
    </section>
  )
}


export default HeroSection