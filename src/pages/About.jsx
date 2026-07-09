import React from 'react'
import '../css/about.css'

const About = () => {
  return (
    <>
<div className="responsive-container-block big-container mx-auto px-4 py-8" id="about">
  <div className="responsive-container-block container">
    <div className="responsive-container-block">
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 img-one">
        <img alt="golden-lines.png" className="image-block bg-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/golden%20lines.png" />
      </div>
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 content-one">
        <p className="text-3xl font-bold text-center pb-6">
          About Glow Beauty Salon
        </p>
         <p className="text-gray-600 leading-relaxed mb-12">
      Glow Beauty Salon was founded with one simple goal — to make every client
      feel confident, comfortable, and cared for. What started as a passion for
      beauty and self-care has grown into a space where quality, hygiene, and
      personal attention always come first. Whether you're here for a quick
      touch-up or a full pampering session, we treat every visit like it matters.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h4 className="text-(--color-primary) font-semibold text-lg mb-2">Expert Team</h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          Our stylists and beauticians bring years of experience and genuine care to every service.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h4 className="text-(--color-primary) font-semibold text-lg mb-2">Premium Products</h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          We use only trusted, high-quality products — because your skin and hair deserve the best.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h4 className="text-(--color-primary) font-semibold text-lg mb-2">Relaxing Environment</h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          A clean, calm, and welcoming space designed to help you unwind while we take care of you.
        </p>
      </div>
    </div>

    <p className="italic text-(--color-primary) font-medium">
      "We believe beauty care should feel like self-care — relaxing, personal, and never rushed."
    </p>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default About