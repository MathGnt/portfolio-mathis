'use client'

import { motion } from 'framer-motion'
import { TechSection } from '@/types'
import { DESIGN_TOKENS } from '@/constants'

interface TechStackProps {
  title: string
  subtitle: string
  sections: TechSection[]
  packageDescription?: string
}

interface FrameworkButtonProps {
  name: string
  description: string
  url?: string
  isClickable?: boolean
  index: number
}

const FrameworkButton = ({ name, description, url, isClickable = true }: FrameworkButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-full font-light mb-3 text-sm tracking-wide inline-block"
  const clickableClasses = "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105"
  const nonClickableClasses = "border-2 border-gray-400 text-gray-600"
  
  const content = (
    <div className={`${baseClasses} ${isClickable ? clickableClasses : nonClickableClasses}`}
         style={{ fontFamily: DESIGN_TOKENS.fonts.system }}>
      {name}
    </div>
  )

  if (isClickable && url) {
    return (
      <div className="text-center group">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
        {description && <p className="text-sm text-gray-500 font-light">{description}</p>}
      </div>
    )
  }

  return (
    <div className="text-center group">
      {content}
      {description && <p className="text-sm text-gray-500 font-light">{description}</p>}
    </div>
  )
}

export default function TechStack({ title, subtitle, sections, packageDescription }: TechStackProps) {
  return (
    <section className="py-24 px-6 bg-slate-100">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: DESIGN_TOKENS.animations.defaultDuration }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 text-center tracking-tight" 
              style={{ fontFamily: DESIGN_TOKENS.fonts.apple }}>
            {title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: DESIGN_TOKENS.animations.defaultDuration, delay: 0.2 }}
          className="bg-gray-50 p-16 border border-gray-200"
        >
          {sections.map((section, sectionIndex) => (
            <div key={section.title} className={sectionIndex > 0 ? "mt-16" : ""}>
              <div className={sectionIndex > 0 ? "mb-16" : ""}>
                {sectionIndex > 0 && (
                  <div className="flex items-center justify-center mb-16">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md"></div>
                  </div>
                )}
                
                <h3 className="text-2xl font-light text-gray-900 mb-6 text-center tracking-wide" 
                    style={{ fontFamily: DESIGN_TOKENS.fonts.system }}>
                  {section.title}
                </h3>
                
                {section.title === "Custom Swift Packages" && packageDescription && (
                  <p className="text-base text-gray-600 leading-relaxed text-center mb-10 max-w-3xl mx-auto font-light">
                    {packageDescription}
                  </p>
                )}
              </div>

              <div className={`grid gap-8 ${
                section.frameworks.length === 2 
                  ? "flex justify-center gap-8" 
                  : section.frameworks.length === 4
                  ? "grid-cols-2 md:grid-cols-4"
                  : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
              }`}>
                {section.frameworks.map((framework, index) => (
                  <FrameworkButton
                    key={framework.name}
                    name={framework.name}
                    description={framework.description}
                    url={framework.url}
                    isClickable={framework.isClickable}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}