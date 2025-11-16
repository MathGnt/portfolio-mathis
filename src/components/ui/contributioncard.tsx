'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Contribution } from '@/types'

interface ContributionCardProps {
  contribution: Contribution
  index: number
}

export default function ContributionCard({ contribution, index }: ContributionCardProps) {
  const isClickable = contribution.isClickable !== false && contribution.url

  const Component = isClickable ? motion.a : motion.div
  const componentProps = isClickable ? {
    href: contribution.url,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}

  return (
    <Component
      {...componentProps}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`block bg-white rounded-xl shadow-lg ${isClickable ? 'hover:shadow-2xl cursor-pointer' : ''} transition-all duration-300 border border-gray-200 overflow-hidden group`}
    >
      <div className="p-8 flex flex-col sm:flex-row items-center gap-6">
        {/* App Icon */}
        <div className="flex-shrink-0 relative">
          <Image
            src={contribution.icon}
            alt={`${contribution.appName} icon`}
            width={80}
            height={80}
            className="rounded-2xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="flex-grow text-center sm:text-left">
          <h3 className={`text-2xl font-bold text-gray-900 ${isClickable ? 'group-hover:text-blue-600' : ''} transition-colors mb-2`} style={{ fontFamily: 'var(--font-apple-display)' }}>
            {contribution.appName}
          </h3>
          {contribution.isTopApp && contribution.topBadge && (
            <span className="inline-block bg-white text-black text-xs font-semibold px-3 py-1 rounded-full border border-black mb-3">
              {contribution.topBadge}
            </span>
          )}
          <p className="text-gray-600 leading-relaxed">
            {contribution.description}
          </p>
        </div>

        {/* Arrow Icon */}
        {isClickable && (
          <motion.div
            whileHover={{ x: 5 }}
            className="text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </motion.div>
        )}
      </div>
    </Component>
  )
}
