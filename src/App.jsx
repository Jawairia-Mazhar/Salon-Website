import React from 'react'
import Hero from "./pages/Hero"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import Reviews from "./pages/Reviews"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Services />
      <Reviews />
    </div>
  )
}

export default App