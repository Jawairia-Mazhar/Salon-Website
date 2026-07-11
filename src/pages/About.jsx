import React from 'react'
import '../css/about.css'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

const About = () => {
  return (
    <>
<div className="responsive-container-block big-container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl" id="about">
  <div className="responsive-container-block container">
    <div className="responsive-container-block">
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 img-one">
        <img
          alt="golden-lines.png"
          className="image-block bg-image"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/golden%20lines.png"
          loading="lazy"
          decoding="async"
          width="600"
          height="400"
        />
      </div>
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 content-one">
        <p className="text-2xl sm:text-3xl font-bold text-center pb-6">
          About Glow Beauty Salon
        </p>
         <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-12">
      Glow Beauty Salon was founded with one simple goal — to make every client
      feel confident, comfortable, and cared for. What started as a passion for
      beauty and self-care has grown into a space where quality, hygiene, and
      personal attention always come first. Whether you're here for a quick
      touch-up or a full pampering session, we treat every visit like it matters.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
      <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
        <h4 className="text-[var(--color-primary)] font-semibold text-base sm:text-lg mb-2">Expert Team</h4>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          Our stylists and beauticians bring years of experience and genuine care to every service.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
        <h4 className="text-[var(--color-primary)] font-semibold text-base sm:text-lg mb-2">Premium Products</h4>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          We use only trusted, high-quality products — because your skin and hair deserve the best.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
        <h4 className="text-[var(--color-primary)] font-semibold text-base sm:text-lg mb-2">Relaxing Environment</h4>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          A clean, calm, and welcoming space designed to help you unwind while we take care of you.
        </p>
      </div>
    </div>

    <p className="italic text-[var(--color-primary)] font-medium text-sm sm:text-base">
      "We believe beauty care should feel like self-care — relaxing, personal, and never rushed."
    </p>
    <div className="flex gap-6 sm:gap-12 justify-center mt-8">
        <a href="https://www.instagram.com/glowbeautysalon/" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-[var(--color-primary)] transition">
          <FiInstagram />
        </a>
        <a href="https://www.facebook.com/glowbeautysalon/" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-[var(--color-primary)] transition">
          <FaFacebook />
        </a>
        <a href="https://www.google.com/maps/place/Glow+Beauty+Salon" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-[var(--color-primary)] transition">
          <IoLocationSharp />
        </a>
    </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default About