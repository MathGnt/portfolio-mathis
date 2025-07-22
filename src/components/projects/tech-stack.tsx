'use client'

import { motion } from 'framer-motion'
import { TechStack } from '@/types/projects'

interface TechStackProps {
  techStack: TechStack
  onArchitectureClick?: () => void
}

export default function TechStackComponent({ techStack, onArchitectureClick }: TechStackProps) {
  return (
    <section className="py-24 px-6 bg-slate-100">
      <div className={techStack.customPackages ? "max-w-5xl mx-auto" : "max-w-6xl mx-auto"}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 text-center tracking-tight" style={{ fontFamily: 'var(--font-apple-display)' }}>
            {techStack.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            {techStack.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`bg-gray-50 ${techStack.customPackages ? 'p-16' : 'px-20 py-16'} border border-gray-200`}
        >
          <div className="mb-16">
            <h3 className="text-2xl font-light text-gray-900 mb-10 text-center tracking-wide" 
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
              Apple Frameworks
            </h3>
            <div className={`grid ${
              techStack.customPackages ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'
            }`}>
              {techStack.frameworks.map((framework) => (
                <div key={framework.name} className="text-center group">
                  <a 
                    href={framework.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                              hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    {framework.name}
                  </a>
                  <p className="text-sm text-gray-500 font-light">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>

          {techStack.customPackages && (
            <>
              <div className="flex items-center justify-center my-16">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md"></div>
              </div>

              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6 text-center tracking-wide" 
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                  Other Packages
                </h3>
                <p className="text-base text-gray-600 leading-relaxed text-center mb-10 max-w-3xl mx-auto font-light">
                  I initially created my own package (AlbedoKit) for magnitude calculations and Earth shadow computations and proposed integrating it into SatelliteKit. 
                  The maintainer preferred to keep SatelliteKit focused on its core functionality, but suggested I contribute 
                  to his other package (SatelliteUtilities) that specializes in satellite processing like ground tracks. I added my work to that project. 
                  I also built a custom backend with Vapor to implement intelligent caching, allowing users to share cached API data and reducing redundant API calls.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {techStack.customPackages.map((pkg) => (
                    <div key={pkg.name} className="text-center group">
                      {pkg.link ? (
                        <a 
                          href={pkg.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-light mb-3 
                                    hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-block" 
                                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                          {pkg.name}
                        </a>
                      ) : (
                        <div className="border-2 border-gray-400 text-gray-600 px-6 py-3 rounded-full font-light mb-3 text-sm tracking-wide" 
                                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                          {pkg.name}
                        </div>
                      )}
                      <p className="text-sm text-gray-500 font-light">{pkg.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {!techStack.customPackages && onArchitectureClick && (
            <>
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
                      onClick={onArchitectureClick}
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
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}