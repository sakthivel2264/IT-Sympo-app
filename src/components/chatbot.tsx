"use client"

import React, { useState } from 'react'
import { BotIcon, X } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <div className="relative">
        <button
          className="bg-green-500 text-black/70 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X/> : <BotIcon className="size-8" />}
        </button>
        <div
          className={`absolute bottom-full right-0 mb-4 w-[22rem] h-[30rem] bg-white dark:bg-slate-950 border dark:border-gray-950 border-gray-300 rounded-xl shadow-lg ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <iframe className="w-full h-full rounded-xl" src="https://app.fastbots.ai/embed/cm2hqmrgg3j2wn8bkqw5xdvfk"></iframe>
        </div>
      </div>
    </div>
  )
}

export default ChatBot