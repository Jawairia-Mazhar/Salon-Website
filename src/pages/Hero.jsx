import React from 'react'
import img from '../assets/cover-Img.jpg'

const Hero = () => {
  return (
    <main className="mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Welcome to Glow Beauty Salon</h1>
        <span className="text-lg block">Step into a world where every detail is designed to make you feel radiant.</span>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={img}
          alt="Glow Beauty Salon"
          className="w-full max-w-[420px] h-[400px] sm:h-[380px] md:h-[460px] object-cover rounded-md"
        />
      </div>
    </main>
  )
}

export default Hero
