'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/beyond', label: 'Beyond Code' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 bg-slate-100/80 backdrop-blur-lg border-b border-slate-200/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="hidden sm:block">
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-serif italic text-gray-900 tracking-wide transform -rotate-1">
                <span className="relative">
                  Mathis
                  <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0,4 Q25,1 50,4 T100,4" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" fill="none" 
                          className="group-hover:stroke-yellow-400 transition-colors duration-300"/>
                  </svg>
                </span>
              </div>
            </motion.div>
          </Link>
          
          <div className="flex-1 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 px-2 sm:px-0">
            <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-yellow-100/60 w-full sm:w-auto justify-center">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    className={`relative px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      pathname === link.href
                        ? 'text-gray-900 bg-yellow-400 shadow-lg'
                        : 'text-yellow-700 hover:text-yellow-800 hover:bg-yellow-50'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden sm:block w-24"></div>
        </div>
      </nav>
    </motion.header>
  )
}