import React from 'react'
import img from '../assets/cover-Img.png'

const Hero = () => {
  return (
    <main className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-[#fafad2] bg-gradient-to-br from-[#fff7f2] via-white to-[#fafad2] shadow-[0_20px_60px_-20px_rgb(218,145,0)]">
        <div className="flex flex-col lg:flex-row items-center gap-8 p-6 sm:p-8 lg:p-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="inline-flex rounded-full bg-[#fafad2] px-3 py-1 text-sm font-semibold text-(--color-primary)">
              Luxury beauty, redefined
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#2f2a29]">
              Where <span className="text-(--color-primary)">glow</span> meets confidence.
            </h1>
            <p className="mt-4 text-lg text-[#5f5452] max-w-xl mx-auto lg:mx-0">
              Step into a calming space designed for radiant hair, flawless styling,
              and a self-care experience that feels effortless.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#services"
                className="rounded-full border border-(--color-primary) px-6 py-3 text-sm font-semibold text-(--color-primary) transition hover:bg-[#fafad2]"
              >
                Explore services
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                <p className="text-xl font-bold text-(--color-primary)">4.9/5</p>
                <p className="text-sm text-[#7d6e69]">Client love</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                <p className="text-xl font-bold text-(--color-primary)">15+</p>
                <p className="text-sm text-[#7d6e69]">Years styling</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm col-span-2 sm:col-span-1">
                <p className="text-xl font-bold text-(--color-primary)">7 days</p>
                <p className="text-sm text-[#7d6e69]">Open weekly</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto w-full max-w-120">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-(--color-primary) to-[#fafad2] blur-2xl opacity-70"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-2 shadow-xl">
                <img
                  src={img}
                  alt="Glow Beauty Salon"
                  className="h-[420px] sm:h-[500px] w-full object-cover rounded-[1.4rem]"
                />

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
