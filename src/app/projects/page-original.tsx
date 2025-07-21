'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import ArchitectureModal from '@/components/ui/architecture-modal'

export default function Projects() {
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="px-6 py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-6 mb-8"
          >
            <Image
              src="/images/screenshots/logos/albedo.jpg"
              alt="Albedo App Icon"
              width={80}
              height={80}
              className="rounded-2xl shadow-lg"
            />
            <h1 className="text-6xl font-black text-gray-900 tracking-tight" 
                style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
              Albedo
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-light leading-relaxed max-w-3xl mx-auto"
            style={{ color: '#86868b' }}
          >
            Track satellites with precision. Get weather-based visibility predictions. 
            Experience the cosmos from your pocket.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <a 
              href="https://apps.apple.com/fr/app/albedo/id6744074239?l=en-GB"
              target="_blank"
              className="inline-block hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/images/screenshots/logos/DOTASUS.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="hover:opacity-90 transition-opacity duration-300"
              />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-left">
                Why I Built Albedo
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed text-left">
                I wanted to build a relatively advanced app right from the start. My goal was to dive
                deep into the code, explore Apple's documentation in detail, challenge myself by running 
                into bugs and learning to solve them, and develop disciplined, well-organized code.
                In terms of design, I aimed to keep the look and feel very native, drawing inspiration from the
                button styles used in Apple Maps.

                As for the app's focus, I'm passionate about astronomy. I often use the <span className="italic">Heavens Above</span> website to track
                satellites, and I wanted to create something just as precise; but with a polished and enjoyable mobile experience.
              
              </p>
            </div>
            
            <div className="bg-gray-200/60 rounded-2xl p-8 shadow-xl border-2 border-gray-300/40 max-w-xs h-[28rem] flex flex-col mx-auto">
              <div className="h-8"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center tracking-wide" 
                  style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
                Technical Challenge
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center font-light flex-1" 
                 style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
                The biggest challenge was implementing the complex physics calculations to determine 
                the exact minute when satellites enter and exit Earth's shadow, plus calculating 
                magnitude variations throughout each pass. Obviously the architecture wasn't simple, 
                I was at the beginning of my learning journey. I had to break and rebuild the app 
                several times until I truly understood SwiftUI architecture.
              </p>
              <div className="h-8"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Live Ground Tracks & Pass Prediction
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Watch real-time satellite ground tracks with MapKit integration. 
                See the next pass for your selected satellite and get precise visibility chances based on weather conditions.
              </p>
              <div className="mt-8">
                <img
                  src="/images/screenshots/groundtracks.png"
                  alt="Ground tracks implementation"
                  width={1205}
                  height={401}
                  className="rounded-xl shadow-lg scale-110 ml-6"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <p className="text-xs text-gray-400 mt-6 text-center font-mono italic ml-6">
                  Ground tracks calculation method: SGP4 for low Earth orbit satellites (90-minute revolutions), SDP4 for high orbit satellites.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src="/images/screenshots/screenshot1.png"
                alt="Weather integration in Albedo"
                width={300}
                height={600}
                className="drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:order-1"
            >
              <Image
                src="/images/screenshots/screenshot2.png"
                alt="Ground tracks visualization"
                width={300}
                height={600}
                className="drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Deep Dive into Pass Details
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Explore every aspect of a satellite pass across 7 days of visibility. Get rise and set times, 
                detailed weather conditions, satellite magnitude variations, and astronomical context.
              </p>
              <div className="mt-8">
                <img
                  src="/images/screenshots/weatherkit.png"
                  alt="WeatherKit integration"
                  width={955}
                  height={527}
                  className="rounded-xl shadow-lg scale-110 ml-6"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <p className="text-xs text-gray-400 mt-6 text-center font-mono italic ml-6">
                  Albedo powered by WeatherKit for pass forecasting, visibility probability calculations, and weather conditions analysis.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Visual Tracking & Navigation
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Swift Charts integration provides clear visual representations of satellite data. 
                An integrated compass helps you track exactly where the satellite will pass in the sky.
              </p>
              <div className="mt-8">
                <img
                  src="/images/screenshots/chartselection.png"
                  alt="Chart selection implementation"
                  width={1080}
                  height={380}
                  className="rounded-xl shadow-lg scale-110 ml-6"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <p className="text-xs text-gray-400 mt-6 text-center font-mono italic ml-6">
                  Chart selection method using chartXSelection to manage interactive data visualization.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:ml-8"
            >
              <Image
                src="/images/screenshots/screenshot3.png"
                alt="7-day satellite predictions"
                width={300}
                height={600}
                className="drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 text-center tracking-tight" style={{ fontFamily: 'var(--font-apple-display)' }}>
              What's under the hood
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Technologies and frameworks powering Albedo's precision
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-16 border border-gray-200"
          >
            <div className="mb-16">
              <h3 className="text-2xl font-light text-gray-900 mb-10 text-center tracking-wide" 
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                Apple Frameworks
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div className="text-center group">
                  <a 
                    href="https://developer.apple.com/documentation/mapkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    MapKit
                  </a>
                  <p className="text-sm text-gray-500 font-light">Ground tracks</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://developer.apple.com/documentation/weatherkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    WeatherKit
                  </a>
                  <p className="text-sm text-gray-500 font-light">Visibility forecasts</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://developer.apple.com/documentation/charts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    Swift Charts
                  </a>
                  <p className="text-sm text-gray-500 font-light">Data visualization</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://developer.apple.com/documentation/swiftdata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    SwiftData
                  </a>
                  <p className="text-sm text-gray-500 font-light">Local cache</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://developer.apple.com/documentation/corelocation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    CoreLocation
                  </a>
                  <p className="text-sm text-gray-500 font-light">Position tracking</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center my-16">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md"></div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 text-center tracking-wide" 
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                Custom Swift Packages
              </h3>
              <p className="text-base text-gray-600 leading-relaxed text-center mb-10 max-w-3xl mx-auto font-light">
                I initially created my own package (AlbedoKit) for magnitude calculations and Earth shadow computations and proposed integrating it into SatelliteKit. 
                The maintainer preferred to keep SatelliteKit focused on its core functionality, but suggested I contribute 
                to his other package (SatelliteUtilities) that specializes in satellite processing like ground tracks. I added my work to that project.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="border-2 border-gray-400 text-gray-600 px-6 py-3 rounded-full font-light mb-3 text-sm tracking-wide" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    AlbedoKit
                  </div>
                  <p className="text-sm text-gray-500 font-light">In-depth satellite analysis</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://github.com/gavineadie/SatelliteKit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    SatelliteKit
                  </a>
                  <p className="text-sm text-gray-500 font-light">TLE parsing & mechanics</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://github.com/mannylopez/TinyMoon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    TinyMoon
                  </a>
                  <p className="text-sm text-gray-500 font-light">Moon illumination</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://github.com/gavineadie/SatelliteUtilities/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    SatelliteUtilities
                  </a>
                  <p className="text-sm text-gray-500 font-light">Coordinate transforms</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      <div className="py-8 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
        </div>
      </div>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-6 mb-8"
          >
            <Image
              src="/images/screenshots/logos/bartinder.png"
              alt="BarTinder App Icon"
              width={80}
              height={80}
              className="rounded-2xl shadow-lg"
            />
            <h1 className="text-5xl font-black text-gray-900 tracking-tight" 
                style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
              BarTinder
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl font-light leading-relaxed max-w-3xl mx-auto mb-8"
            style={{ color: '#86868b' }}
          >
            Swipe through ingredients. Discover cocktails. Create your own recipes. 
            The modern way to explore mixology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-8"
          >
            <a 
              href="https://github.com/MathGnt/BarTinder"
              target="_blank"
              className="inline-flex items-center px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-colors duration-300 space-x-2"
            >
              <img src="/images/screenshots/logos/github-mark.png" alt="GitHub logo" className="w-5 h-5 invert" />
              <span>View on GitHub</span>
            </a>
          </motion.div>
        </div>
        </section>

      <section className="py-12 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-left">
                Why I Built BarTinder
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed text-left mb-6">
                Since Albedo is an app focused on REST APIs and physical calculations, I also wanted to
                create a simpler CRUD application that allows adding, updating and deleting items using Swift Data.
                I designed the app's architecture around persistent data, and used a local JSON file as a mock API to
                manage ingredients and cocktails.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed text-left mb-6">
                When iOS 26 beta dropped, I integrated the latest features like Foundation Models (Apple Intelligence)
                and Liquid Glass design elements, as well as the new settings for Xcode 26 (Default Actor Isolation and Approachable Concurrency) to stay current with Apple's newest developments.
                Since I don't have a formal UI/UX design background, I drew heavy inspiration from Apple's stock applications and design language. 
                I pay close attention to Apple's Human Interface Guidelines to ensure the app feels truly native.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed text-left">
                I also wanted to build BarTinder with a very clean architecture using use cases, repositories, 
                dependency injection, and proper separation of concerns. I wrote extensive tests using Swift Testing 
                to practice modern testing techniques and catch any breaking changes instantly.
                By focusing on the CRUD aspect, lists, scroll views and UI/UX, I was targeting a common application pattern
                that is widely used across many types of products.
              </p>
            </div>
            
            <div className="bg-gray-200/60 rounded-2xl p-8 shadow-xl border-2 border-gray-300/40 max-w-xs h-96 flex flex-col justify-center mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center tracking-wide" 
                  style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
                Technical Challenge
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center font-light" 
                 style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
                Managing relationships between cocktails, ingredients, and measurements was challenging with SwiftData. Apple encourages using \.modelContext directly in views, but I wanted cleaner architecture. My solution was centralizing data logic in a custom class and injecting it into the SwiftUI environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Swipe Your Taste
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Browse through ingredient cards with familiar swipe gestures. 
                Like vodka? Swipe right. Hate Campari? Swipe left.
              </p>
              <div className="mt-8">
                <img
                  src="/images/screenshots/swiping-code.png"
                  alt="Swipe gesture implementation"
                  width={980}
                  height={464}
                  className="rounded-xl shadow-lg scale-110 ml-6"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <p className="text-xs text-gray-400 mt-6 text-center font-mono italic ml-6">
                  Swipe gestures managed with threshold detection, offset calculations, and rotation animations for smooth card interactions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src="/images/screenshots/swiping-portrait.png"
                alt="Ingredient swiping interface"
                width={300}
                height={600}
                className="drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:order-1"
            >
              <Image
                src="/images/screenshots/yourcocktails-portrait.png"
                alt="Cocktail recommendations"
                width={300}
                height={600}
                className="drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Discover Perfect Matches
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Based on your ingredient preferences, BarTinder shows you cocktails 
                you can make right now with what you have. Sort them by name, glass type, 
                or difficulty, and add your favorites to the Bar for quick access.
              </p>
              <div className="mt-8">
                <img
                  src="/images/screenshots/possible-cocktails.png"
                  alt="Possible cocktails algorithm"
                  width={955}
                  height={296}
                  className="rounded-xl shadow-lg scale-110 ml-6"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <p className="text-xs text-gray-400 mt-6 text-center font-mono italic ml-6">
                  My first idea was to use Sets for easy ingredient comparison, and even deduce missing ingredients if needed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Create Your Signature
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Create custom cocktails with your own photos from the library, choose your ingredients, 
                quantities, glassware, and preparation steps. Edit or delete your creations anytime.
              </p>
              <div className="mt-12">
                <img
                  src="/images/screenshots/create-edit.png"
                  alt="Create and edit cocktail implementation"
                  width={1105}
                  height={653}
                  className="rounded-xl shadow-lg scale-125 ml-16"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <p className="text-xs text-gray-400 mt-12 text-center font-mono italic ml-24">
                  Since @Model uses @Observable under the hood, I can directly bind cocktail properties to UI components like TextFields and Pickers. This allows me to pass a @Bindable cocktail to the view and use the same view for both creating and editing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center gap-4 lg:ml-96 lg:scale-125"
            >
              <Image
                src="/images/screenshots/cocktailcreation-portrait.png"
                alt="Custom recipe creation"
                width={280}
                height={560}
                className="drop-shadow-2xl"
              />
              <Image
                src="/images/screenshots/ingredientscreation-portrait.png"
                alt="Ingredient creation"
                width={280}
                height={560}
                className="drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:order-1"
            >
              <Image
                src="/images/screenshots/cocktaildetail-portrait.png"
                alt="Cocktail detail view"
                width={300}
                height={600}
                className="drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Detailed Cocktail View
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Dive deep into each cocktail with comprehensive details: ingredients list, 
                glassware, and all characteristics. Add cocktails to your personal bar, edit recipes, 
                or customize them to your taste.
              </p>
              <div className="mt-2">
                <img
                  src="/images/screenshots/domain-entities.png"
                  alt="Domain entities structure"
                  width={830}
                  height={737}
                  className="rounded-xl shadow-lg scale-90 -ml-8"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <p className="text-xs text-gray-400 -mt-2 text-center font-mono italic -ml-8">
                  A cocktail has a lot to offer. It includes glassware, style, technique, and difficulty.<br />Plus ingredients with measurements and units.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 text-center tracking-tight" style={{ fontFamily: 'var(--font-apple-display)' }}>
              What's under the hood
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Technologies and frameworks powering BarTinder's cocktail experience
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 px-20 py-16 border border-gray-200"
          >
            <div className="mb-16">
              <h3 className="text-2xl font-light text-gray-900 mb-10 text-center tracking-wide" 
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                Apple Frameworks
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <div className="text-center group">
                  <a 
                    href="https://developer.apple.com/documentation/swiftdata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    SwiftData
                  </a>
                  <p className="text-sm text-gray-500 font-light">Local persistence</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://developer.apple.com/documentation/testing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    Swift Testing
                  </a>
                  <p className="text-sm text-gray-500 font-light">Unit testing</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://developer.apple.com/documentation/photokit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    PhotosUI
                  </a>
                  <p className="text-sm text-gray-500 font-light">Photo selection</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://developer.apple.com/documentation/FoundationModels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    FoundationModels
                  </a>
                  <p className="text-sm text-gray-500 font-light">Apple Intelligence</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center my-16">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md"></div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-10 text-center tracking-wide" 
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                Architecture & Design
              </h3>
              <div className="flex justify-center gap-8">
                <div className="text-center group">
                  <button 
                    onClick={() => setIsArchitectureModalOpen(true)}
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide cursor-pointer" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    Clean Architecture
                  </button>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    Liquid Glass
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      
      <ArchitectureModal 
        isOpen={isArchitectureModalOpen} 
        onClose={() => setIsArchitectureModalOpen(false)} 
      />
    </div>
  )
}