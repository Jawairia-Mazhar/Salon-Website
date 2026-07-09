import React from 'react'
import logo from '../assets/Salon-logo.png'

const Navbar = () => {
  return (
    <div className="w-full h-14 flex justify-center items-center gap-10 px-4 mt-1">
          <a href="#" className="text-lg text-gray-800 hover:text-orange-400">Home</a>
          <a href="#services" className="text-lg text-gray-800 hover:text-orange-400">Services</a>

        <img src={logo} alt="Salon logo" className="h-full w-auto object-contain" />

        {/* <div className="flex gap-2"> */}
          <a href="#reviews" className="text-lg text-gray-800 hover:text-orange-400">Reviews</a>
          <a href="#about" className="text-lg text-gray-800 hover:text-orange-400">About</a>
        {/* </div> */}

    </div>
  )
}

export default Navbar 