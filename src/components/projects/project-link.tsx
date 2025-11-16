'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectLinkProps {
  link: {
    href: string
    text: string
    icon?: string
  }
}

export default function ProjectLink({ link }: ProjectLinkProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href={link.href}
            target="_blank"
            className="inline-flex items-center px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-colors duration-300 space-x-3 text-lg"
          >
            {link.icon && (
              <Image
                src={link.icon}
                alt="GitHub logo"
                width={24}
                height={24}
                className="invert"
              />
            )}
            <span>{link.text}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
