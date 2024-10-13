"use client";

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MenuIcon } from "lucide-react";

export function Menu() {
  const [open, setOpen] = React.useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div><MenuIcon/></div>
        </DialogTrigger>
        <DialogContent className=" bg-transparent/85 max-w-[400px] max-h-[550px] mr-4">
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
            <DialogDescription>
              {/* Sympo Details */}
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

function ProfileForm() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="">
        <a href="/">
        <li>Home</li>
        </a>
        <a href="/events">
        <li>Events</li>
        </a>
        
        <a href="/aboutus">
        <li>About Us</li>
        </a>
        <a href="/contact">
        <li>Contact Us</li>
        </a>
        
      </ul>
    </div>
  )
}

