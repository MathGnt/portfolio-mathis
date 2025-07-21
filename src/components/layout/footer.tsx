'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      className="border-t border-gray-200 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm mb-2">
              © 2025 Mathis Gaignet
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-3 text-lg">
              <span title="Guitare" className="hover:scale-110 transition-transform duration-300 opacity-70 hover:opacity-100">🎸</span>
              <span title="Astronomie" className="hover:scale-110 transition-transform duration-300 opacity-70 hover:opacity-100">🌌</span>
              <span title="Musique" className="hover:scale-110 transition-transform duration-300 opacity-70 hover:opacity-100">🎵</span>
              <span title="iOS Development" className="hover:scale-110 transition-transform duration-300 opacity-70 hover:opacity-100">📱</span>
              <span title="Code" className="hover:scale-110 transition-transform duration-300 opacity-70 hover:opacity-100">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}