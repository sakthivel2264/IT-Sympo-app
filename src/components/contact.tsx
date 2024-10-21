'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Clipboard, Check } from "lucide-react"

type Contact = {
  id: number
  name: string
  phone: string
  email: string
  category: 'technical' | 'non-technical' | 'online-event' | 'overall'
}

const contacts: Contact[] = [
  { id: 1, name: "Karthikeyan (Overall Co-ordinator)", phone: "9345766900", email: "kartji005@gmail.com", category: 'overall' },
  { id: 2, name: "Jenifer (AssistantProfessor/IT)", phone: "9176266320", email: "jenifer.it@dmice.ac.in", category: 'overall' },
  { id: 3, name: "Gokul (Nexus of Idea)", phone: "8015960964", email: "gokulsuresh766@gmail.com", category: 'technical' },
  { id: 4, name: "Abishek (Nexus of Idea)", phone: "9342037578", email: "abishekramanan1@gmail.com", category: 'technical' },
  { id: 5, name: "Kumaraguru (Capture the Flag)", phone: "7092106018", email: "kumaragurudevilking@gmail.com", category: 'technical' },
  { id: 6, name: "Annie (Capture the Flag)", phone: "8122874049", email: "rksanosano@gmail.com", category: 'technical' },
  { id: 7, name: "Farvesh (Designer & Editor)", phone: "8940192908", email: "786farvesh@gmail.com", category: 'overall' },
  { id: 8, name: "Gopinath (MindSpark)", phone: "8667825086", email: "gngopinath24@gmail.com", category: 'technical' },
  { id: 9, name: "Venkatkumar (MindSpark)", phone: "6381775607", email: "venkatkumarkr2003@gmail.com",category: 'technical'},
  { id: 10, name: "Sanjay (ARENA OF FIRE)", phone: "9025953879", email: "sanjaykalaivani30@gmail.com", category: 'non-technical' },
  { id: 11, name: "Vignesh (Online Events)", phone: "6384271797", email: "Vignesh.chozhan@gmail.com", category: 'online-event' },
  { id: 12, name: "Harshavarthini (Online Events)", phone: "9840828509", email: "reethuharsha11@gmail.com", category: 'online-event' },
  { id: 13, name: "Vidhun (Guezz Tech)", phone: "8807563108", email: "vidhuneyhere@gmail.com",category: 'technical' },
  { id: 14, name: "Sakthivel (Guezz Tech)", phone: "6369358986", email: "sakthivelpandiyan2264@gmail.com",category: 'technical' },
  { id: 15, name: "Kathirvel (ARENA OF FIRE)", phone: "9345181208", email: "kathir28328@gmail.com",category: 'non-technical' },
  { id: 16, name: "Kenith (The Fortune Bowl) ", phone: "6383055099", email: "kenithkenith155@gmail.com", category: 'non-technical' },
  { id: 17, name: "Keerthana (Music Mania)", phone: "7305186947", email: "keerthanaloganathan02@gmail.com", category: 'non-technical' },
]

export default function ContactsList() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({})
  const [expandedCategory, setExpandedCategory] = useState<null | 'technical' | 'non-technical' | 'online-event' | 'overall'>(null)

  const copyToClipboard = (text: string, type: string, contactId: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates({ ...copiedStates, [`${contactId}-${type}`]: true })
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [`${contactId}-${type}`]: false })
      }, 2000)
    })
  }

  // Function to render contact lists based on the category
  const renderContacts = (category: 'technical' | 'non-technical' | 'online-event' |'overall' ) => {
    return contacts
      .filter(contact => contact.category === category)
      .map(contact => (
        <li key={contact.id} className="backdrop-blur-sm bg-white/0 text-card-foreground rounded-lg shadow p-4 border border-white/50">
          <h2 className="text-xl font-semibold mb-2">{contact.name}</h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{contact.phone}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(contact.phone, 'phone', contact.id)}
                className="h-8 w-8 hover:bg-transparent/15"
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
                className="h-8 w-8 hover:bg-transparent/15"
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
      ))
  }

  return (
    <div className="mx-auto p-4 bg-black/15 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Contacts List</h1>

      

      {/* Display the four main categories */}
      <div className="mb-6 pt-8">
        <div className="mb-4">
          <button
            className="backdrop-blur-sm bg-white/0 text-card-foreground  shadow p-4 border border-white/50 w-full rounded-lg"
            onClick={() => setExpandedCategory(expandedCategory === 'overall' ? null : 'overall')}
          >
            Overall Co-ordinator Contacts List
          </button>
          {expandedCategory === 'overall' && (
            <ul className="mt-4 space-y-4">{renderContacts('overall')}</ul>
          )}
        </div>

        <div className="mb-4">
          <button
            className="backdrop-blur-sm bg-white/0 text-card-foreground  shadow p-4 border border-white/50 w-full rounded-lg"
            onClick={() => setExpandedCategory(expandedCategory === 'technical' ? null : 'technical')}
          >
            Technical Events Contacts List
          </button>
          {expandedCategory === 'technical' && (
            <ul className="mt-4 space-y-4">{renderContacts('technical')}</ul>
          )}
        </div>

        <div className="mb-4">
          <button
            className="backdrop-blur-sm bg-white/0 text-card-foreground  shadow p-4 border border-white/50 w-full rounded-lg"
            onClick={() => setExpandedCategory(expandedCategory === 'non-technical' ? null : 'non-technical')}
          >
            Non-Technical Events Contacts List
          </button>
          {expandedCategory === 'non-technical' && (
            <ul className="mt-4 space-y-4">{renderContacts('non-technical')}</ul>
          )}
        </div>

        <div className="mb-4">
          <button
            className="backdrop-blur-sm bg-white/0 text-card-foreground  shadow p-4 border border-white/50 w-full rounded-lg"
            onClick={() => setExpandedCategory(expandedCategory === 'online-event' ? null : 'online-event')}
          >
            Online Events Contacts List
          </button>
          {expandedCategory === 'online-event' && (
            <ul className="mt-4 space-y-4">{renderContacts('online-event')}</ul>
          )}
        </div>
      </div>
    </div>
  )
}
