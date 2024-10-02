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
        <DialogContent className="max-w-[400px] max-h-[450px] mr-4">
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
            <DialogDescription>
              Sympo Details
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

function ProfileForm() {
  return (
    <div className="flex flex-col">
      <ul className="bg-white dark:bg-black">
        <li>menu 1</li>
        <li>menu 2</li>
        <li>menu 3</li>
      </ul>
    </div>
  )
}

