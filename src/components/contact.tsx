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
  { id: 1, name: "Sakthivel(Tech Event Co-ordinator)", phone: "6369358986", email: "sakthivelpandiyan2264@gmail.com" },
  { id: 2, name: "Name2", phone: "", email: "" },
  { id: 3, name: "Name3", phone: "", email: "" },
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