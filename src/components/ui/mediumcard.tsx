'use client'

import { motion } from 'framer-motion'

interface MediumArticle {
  title: string
  subtitle: string
  url: string
  publishedDate: string
  readTime: string
  tags: string[]
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
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group h-full"
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500">Medium</p>
            <p className="text-xs text-gray-400">{article.publishedDate} • {article.readTime}</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </motion.div>
        </div>

        <div className="space-y-3 flex-grow">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-yellow-700 transition-colors tracking-tight cursor-pointer" style={{ fontFamily: 'var(--font-apple-display)' }}>
              {article.title}
            </h3>
          </a>
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
            {article.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <span>Read</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  )
}