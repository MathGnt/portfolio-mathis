'use client'

import { motion } from 'framer-motion'
import MediumCard from './mediumcard'
import { MEDIUM_ARTICLES, EXTERNAL_URLS, DESIGN_TOKENS } from '@/constants'

export default function MediumSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-100 via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: DESIGN_TOKENS.fonts.apple }}>
            I also enjoy writing about iOS development
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            When I dive deep into something and truly understand it, I like to share what I've learned. Here are my first articles sharing insights on Swift development. More articles are coming soon as I continue exploring new topics.
          </p>
        </motion.div>

        {/* Divider supérieur */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {MEDIUM_ARTICLES.map((article, index) => (
            <MediumCard key={index} article={article} index={index} />
          ))}
        </div>

        {/* Divider inférieur */}
        <div className="w-full h-px bg-gray-300 mt-12"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href={EXTERNAL_URLS.MEDIUM}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span>Follow for more articles</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}