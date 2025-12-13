'use client'

import { motion } from 'framer-motion'
import ContributionCard from './contributioncard'
import { CONTRIBUTIONS, DESIGN_TOKENS } from '@/constants'

export default function ContributionsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: DESIGN_TOKENS.fonts.apple }}>
            Contributions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Contributing to iOS apps by improving existing projects with technical expertise in Swift, frameworks integration, and CI/CD automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {CONTRIBUTIONS.map((contribution, index) => (
            <ContributionCard key={index} contribution={contribution} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
