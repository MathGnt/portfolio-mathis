'use client'

import { motion } from 'framer-motion'
// import Link from 'next/link' // Unused for now
import MediumSection from '@/components/ui/mediumsection'

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 bg-slate-100 text-gray-900 pt-20">
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
                  I committed to mastering Swift, SwiftUI, and Apple's frameworks, not just learning syntax, but understanding how things work under the hood. I've shipped Albedo to the App Store, built BarTinder as an open-source project with Apple Intelligence integration using Foundation Models, and write technical articles on topics like Swift Concurrency that have received 400+ engagements.
                </p>

                <p>
                  My audio engineering background taught me to dig deep into documentation and experiment relentlessly until I truly understand systems. I approach iOS development the same way: Clean Architecture, comprehensive testing with Swift Testing, and a focus on building apps that are both technically solid and delightful to use.
                </p>
                
                <div className="mt-8 text-center">
                  <a 
                    href="/cv-mathis-gaignet.pdf"
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-colors duration-300 space-x-2"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    <span>View my resume</span>
                  </a>
                </div>
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