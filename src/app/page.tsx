"use client"

import ChatBot from "@/components/chatbot";
import ContactsList from "@/components/contact";
import Events from "@/components/events";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ChatBot/>
      <Events/>
      <ContactsList/>
      <Footer/>
    </div>
  );
}
