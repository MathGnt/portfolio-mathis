'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectHero } from '@/types/projects'

interface ProjectHeroProps {
  project: ProjectHero
}

export default function ProjectHeroComponent({ project }: ProjectHeroProps) {
  return (
    <section className="px-6 py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center space-x-6 mb-8"
        >
          <Image
            src={project.icon}
            alt={`${project.title} App Icon`}
            width={80}
            height={80}
            className="rounded-2xl shadow-lg"
          />
          <h1 className="text-6xl font-black text-gray-900 tracking-tight" 
              style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
            {project.title}
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl font-light leading-relaxed max-w-3xl mx-auto"
          style={{ color: '#86868b' }}
        >
          {project.description}
        </motion.p>

        {project.link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <a 
              href={project.link.href}
              target="_blank"
              className={project.link.icon && project.link.icon.includes('DOTASUS') ? 
                "inline-block hover:scale-105 transition-transform duration-300" :
                "inline-flex items-center px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-colors duration-300 space-x-2"
              }
            >
              {project.link.icon && project.link.icon.includes('DOTASUS') ? (
                <Image
                  src={project.link.icon}
                  alt={project.link.text}
                  width={180}
                  height={60}
                  className="hover:opacity-90 transition-opacity duration-300"
                />
              ) : (
                <>
                  <img src="/images/screenshots/logos/github-mark.png" alt="GitHub logo" className="w-5 h-5 invert" />
                  <span>{project.link.text}</span>
                </>
              )}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}