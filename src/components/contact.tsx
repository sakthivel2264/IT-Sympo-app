'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Clipboard, Check } from "lucide-react"

type Contact = {
  id: number
  name: string
  phone: string
  email: string
}

const contacts: Contact[] = [
  { id: 1, name: "Karthikeyan (OverAll Co-ordinator)", phone: "9345766900", email: "kartji005@gmail.com" },
  { id: 2, name: "Gokul (Nexus of Idea)", phone: "80159 60964", email: "gokulsuresh766@gmail.com" },
  { id: 3, name: "Abhishek (Nexus of Idea)", phone: "93420 37578", email: "abishekramanan1@gmail.com" },
  { id: 4, name: "Kumaraguru (Capture the flag)", phone: "70921 06018", email: "dmice.ctf@gmail.com" },
  { id: 5, name: "Vidhun (Guezz Tech)", phone: "93603 52925", email: "vidhuneyhere@gmail.com" },
  { id: 6, name: "Sakthivel (Guezz Tech)", phone: "63693 58986", email: "sakthivelpandiyan2264@gmail.com" },
  { id: 7, name: "Gopinath (BrainStorm)", phone: "86678 25086", email: "gngopinath24@gmail.com" },
  { id: 8, name: "Sanjay (ESports)", phone: "90259 53879", email: "sanjaykalaivani30@gmail.com" },
  { id: 9, name: "Kathirvel (ESports)", phone: "93451 81208", email: "kathir28328@gmail.com" },
  { id: 10, name: "Kenith (The Fortune Bowl) ", phone: "63830 55099", email: "kenithkenith155@gmail.com" },
  // { id: 11, name: "", phone: "", email: "" },
]

export default function ContactsList() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({})

  const copyToClipboard = (text: string, type: string, contactId: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates({ ...copiedStates, [`${contactId}-${type}`]: true })
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [`${contactId}-${type}`]: false })
      }, 2000)
    })
  }

  return (
    <div className=" mx-auto p-4 bg-black/15 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Contacts List</h1>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li key={contact.id} className="backdrop-blur-sm bg-white/0 text-card-foreground rounded-lg shadow p-4 border border-white/50">
            <h2 className="text-xl font-semibold mb-2">{contact.name}</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">{contact.phone}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(contact.phone, 'phone', contact.id)}
                  className="h-8 w-8"
                >
                  {copiedStates[`${contact.id}-phone`] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Clipboard className="h-4 w-4" />
                  )}
                  <span className="sr-only">Copy phone number</span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">{contact.email}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(contact.email, 'email', contact.id)}
                  className="h-8 w-8"
                >
                  {copiedStates[`${contact.id}-email`] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Clipboard className="h-4 w-4" />
                  )}
                  <span className="sr-only">Copy email address</span>
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}