import React from 'react'
import Hero from "./pages/Hero"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import Reviews from "./pages/Reviews"
import About from "./pages/About"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Services />
      <Reviews />
      <About />
    </div>
  )
}

export default App