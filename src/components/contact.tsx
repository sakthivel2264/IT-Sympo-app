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
  { id: 1, name: "Jenifer (AssistantProfessor/IT)", phone: "9176266320", email: "jenifer.it@dmice.ac.in" },
  { id: 2, name: "Karthikeyan (OverAll Co-ordinator)", phone: "9345766900", email: "kartji005@gmail.com" },
  { id: 3, name: "Farvesh (Designer & Editor)", phone: "8940192908", email: "786farvesh@gmail.com" },
  { id: 4, name: "Gokul (Nexus of Idea)", phone: "8015960964", email: "gokulsuresh766@gmail.com" },
  { id: 5, name: "Abishek (Nexus of Idea)", phone: "9342037578", email: "abishekramanan1@gmail.com" },
  { id: 6, name: "Kumaraguru (Capture the Flag)", phone: "7092106018", email: "kumaragurudevilking@gmail.com" },
  { id: 7, name: "Annie (Capture the Flag)", phone: "8122874049", email: "rksanosano@gmail.com" },
  { id: 8, name: "Vidhun (Guezz Tech)", phone: "8807563108", email: "vidhuneyhere@gmail.com" },
  { id: 9, name: "Sakthivel (Guezz Tech)", phone: "6369358986", email: "sakthivelpandiyan2264@gmail.com" },
  { id: 10, name: "Gopinath (MindSpark)", phone: "8667825086", email: "gngopinath24@gmail.com" },
  { id: 11, name: "Venkatkumar (MindSpark)", phone: "6381775607", email: "venkatkumarkr2003@gmail.com" },
  { id: 12, name: "Sanjay (ARENA OF FIRE)", phone: "9025953879", email: "sanjaykalaivani30@gmail.com" },
  { id: 13, name: "Kathirvel (ARENA OF FIRE)", phone: "9345181208", email: "kathir28328@gmail.com" },
  { id: 14, name: "Kenith (The Fortune Bowl) ", phone: "6383055099", email: "kenithkenith155@gmail.com" },
  { id: 15, name: "Keerthana (Music Mania)", phone: "7305186947", email: "keerthanaloganathan02@gmail.com" },
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
