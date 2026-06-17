import React from 'react'
import Hero from "./pages/Hero"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Services />
    </div>
  )
}

export default App