'use client'

import { motion } from 'framer-motion'
import { DESIGN_TOKENS } from '@/constants'

interface MediumArticle {
  title: string
  subtitle: string
  url: string
  publishedDate: string
  readTime: string
  tags: string[]
  featured?: {
    text: string
    url: string
  }
}

interface MediumCardProps {
  article: MediumArticle
  index: number
}

export default function MediumCard({ article, index }: MediumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full flex flex-col"
    >
      {/* Header minimaliste */}
      <div className="mb-3">
        <p className="text-xs text-gray-500 mb-1">{article.publishedDate} • {article.readTime}</p>
      </div>

      {/* Titre principal - style Apple - SEUL élément cliquable vers l'article */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 leading-tight tracking-tight group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'var(--font-apple-display)' }}>
          {article.title}
        </h3>
      </a>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed mb-4 flex-grow">
        {article.subtitle}
      </p>

      {/* Featured badge si présent - Lien vers Twitter */}
      {article.featured && (
        <a
          href={article.featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block mb-4 p-3 bg-gray-50 ${DESIGN_TOKENS.borderRadius.card} hover:bg-gray-100 transition-colors`}
        >
          <div className="flex items-start gap-2">
            <img
              src="/images/logos/firebase.png"
              alt="Firebase"
              className="w-4 h-4 mt-0.5 flex-shrink-0 object-contain"
            />
            <span className="text-xs text-gray-600 leading-relaxed">{article.featured.text}</span>
          </div>
        </a>
      )}

      {/* Tags épurés */}
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="text-xs text-gray-500 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}