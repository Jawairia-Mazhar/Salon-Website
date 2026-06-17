import React from 'react'
import logo from '../assets/Salon-logo.png'

const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-center items-center gap-10 px-4 border-b-2">
          <a href="#" className="text-md text-gray-800 hover:text-orange-400">Home</a>
          <a href="#" className="text-md text-gray-800 hover:text-orange-400">Services</a>

        <img src={logo} alt="Salon logo" className="h-full w-auto object-contain" />

        {/* <div className="flex gap-2"> */}
          <a href="#" className="text-md text-gray-800 hover:text-orange-400">Reviews</a>
          <a href="#" className="text-md text-gray-800 hover:text-orange-400">Contact</a>
        {/* </div> */}

    </div>
  )
}

export default Navbar 