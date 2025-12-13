'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Contribution } from '@/types'
import { DESIGN_TOKENS } from '@/constants'

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
      className={`block bg-white ${DESIGN_TOKENS.borderRadius.card} ${isClickable ? 'hover:shadow-sm cursor-pointer' : ''} transition-all duration-300 overflow-hidden group h-full`}
    >
      <div className="p-8 flex flex-col items-center text-center h-full">
        {/* Titre en premier - cliquable si URL */}
        {isClickable ? (
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3" style={{ fontFamily: 'var(--font-apple-display)' }}>
            {contribution.appName}
          </h3>
        ) : (
          <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-apple-display)' }}>
            {contribution.appName}
          </h3>
        )}

        {/* Description en deuxième */}
        <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-grow">
          {contribution.description}
        </p>

        {/* App Icon en troisième */}
        <div className="mb-4">
          <Image
            src={contribution.icon}
            alt={`${contribution.appName} icon`}
            width={contribution.appName === 'SatelliteKit' ? 120 : 100}
            height={contribution.appName === 'SatelliteKit' ? 120 : 100}
            className="rounded-3xl"
          />
        </div>

        {/* Top Badge en bas si présent */}
        {contribution.isTopApp && contribution.topBadge && (
          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">
            {contribution.topBadge}
          </span>
        )}
      </div>
    </Component>
  )
}
