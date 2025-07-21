'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import MediumSection from '@/components/ui/mediumsection'

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 bg-slate-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="text-yellow-700 text-sm tracking-wider uppercase">
                  Hey there! 👋
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-8 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-apple-display)' }}>
                I'm Mathis
              </h1>
              
              <div className="space-y-5 text-xl text-gray-800 leading-relaxed max-w-4xl">
                <p>
                  A French iOS developer. I first noticed Apple's ecosystem back in 2010. Something about it caught my attention, but I ended up pursuing audio instead. Years later, that curiosity came back stronger than ever, so I decided to dive in.
                </p>

                <p>
                  I committed to spending many hours every day for 8 months learning Swift, SwiftUI, and Apple's frameworks. My goal was to really master the fundamentals. There's still so much I want to learn, and honestly, I can't wait to keep growing! But that drive and persistence is what pushes me forward every day.
                </p>
                
                <p>
                  I've shipped one app to the App Store, built another open-source project, and I'm currently working on a third app to explore and master modular architecture in SwiftUI. My audio background taught me to dig deep into documentation and experiment relentlessly until I truly understand how things work. Now I'm looking to bring that same curiosity and persistence to a junior SwiftUI developer role.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
                  <div className="w-72 h-72 bg-yellow-100 rounded-2xl overflow-hidden">
                    <img 
                      src="/mathis-profile.png" 
                      alt="Mathis Gaignet" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>

      <MediumSection />
    </>
  )
}