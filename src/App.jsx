import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Hero from "./pages/Hero"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import Reviews from "./pages/Reviews"
import About from "./pages/About"

const App = () => {
  const whatsappLink = 'https://wa.me/03122725959?text=Hi%20I%20would%20like%20to%20book%20an%20appointment'

  return (
    <div className="relative">
      <Navbar />
      <Hero/>
      <Services />
      <Reviews />
      <About />

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-5 right-5 z-50 flex items-center justify-center overflow-hidden rounded-full bg-green-500 p-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-green-600 hover:px-4 hover:py-3 sm:p-4 sm:hover:px-5 sm:hover:py-4"
        aria-label="Chat on WhatsApp"
      >
        <span className="flex max-w-0 items-center gap-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[180px] group-hover:gap-2 group-hover:opacity-100 sm:group-hover:max-w-[200px]">
          <FaWhatsapp className="text-xl sm:text-2xl" />
          <span className="text-sm sm:text-base">Chat on WhatsApp</span>
        </span>   
        <span className="block transition-all duration-300 group-hover:opacity-0">
          <FaWhatsapp className="text-xl sm:text-2xl" />
        </span>
      </a>
    </div>
  )
}

export default App