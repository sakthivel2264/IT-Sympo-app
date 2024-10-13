"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Facebook, Instagram, Linkedin, Twitter, Link,MoveUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Schedule from "./schedule"
import React from "react"

export default function Footer() {
  const [open, setOpen] = React.useState(false)

  return (
    <footer className="text-white border-t">
      <div className="backdrop-blur-sm bg-white/0">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">IT Sympo 2024</h2>
              <p className="mb-4 opacity-90">Exploring the future of technology together.</p>
              <div className="flex space-x-4">
                <a href="https://dmice.ac.in/" className="hover:text-purple-200 transition-colors"><Link size={24} /></a>
                <a href="https://www.facebook.com/DMIengineers/" className="hover:text-purple-200 transition-colors"><Facebook size={24} /></a>
                <a href="https://www.instagram.com/infowitz_24/" className="hover:text-purple-200 transition-colors"><Instagram size={24} /></a>
                <a href="https://www.linkedin.com/school/dmi-college-of-engineering/" className="hover:text-purple-200 transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 opacity-90">
                <li><a href="/" className="hover:text-purple-200 transition-colors">Home</a></li>
                <li><a href="/events" className="hover:text-purple-200 transition-colors">Events</a></li>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <li><a className="hover:text-purple-200 transition-colors cursor-pointer">
                    Schedule
                    </a></li>
                  </DialogTrigger>
                <DialogContent className="max-w-[400px] max-h-[70vh] mr-4 bg-transparent/85 border rounded-lg overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Schedule</DialogTitle>
                    <DialogDescription>
                      Agenda
                    </DialogDescription>
                  </DialogHeader>
                    <Schedule/>
                  </DialogContent>
                </Dialog>
                <li><a href="/contact" className="hover:text-purple-200 transition-colors">Contact</a></li>
              </ul>
            </div>
            <a href="#" className="flex flex-row-reverse">
              <Button className="w-10 p-0 h-12" size="sm"><MoveUp/></Button>
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-sm text-center opacity-90">
            <p>&copy; {new Date().getFullYear()} IT Sympo. All rights reserved.</p>
            <p className="mt-2">
              <a  className="hover:text-purple-200 transition-colors">Privacy Policy</a> | 
              <a  className="hover:text-purple-200 transition-colors ml-2">Terms of Service</a>
            </p>
            <p className="mt-4">Designed By <a href="https://www.linkedin.com/in/sakthivel-pandiyan-625289270" className="underline cursor-pointer">Sakthi</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}