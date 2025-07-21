'use client'

import { motion } from 'framer-motion'

interface Screenshot {
  id: number
  title: string
  alt: string
}

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  tags: string[]
  appStoreLink?: string
  githubLink?: string
  status: 'live' | 'development' | 'coming-soon'
  screenshots: Screenshot[]
  features: string[]
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  appStoreLink,
  githubLink,
  status,
  screenshots,
  features
}: ProjectCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'live':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'development':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'coming-soon':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    }
  }

  const getStatusText = () => {
    switch (status) {
      case 'live':
        return '🟢 Live on App Store'
      case 'development':
        return '🟡 In Development'
      case 'coming-soon':
        return '🔵 Coming Soon'
    }
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 p-8">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-3xl font-bold text-white">{title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>
                {getStatusText()}
              </span>
            </div>
            <p className="text-red-300 font-medium mb-4">{subtitle}</p>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-red-500/10 text-red-300 px-3 py-1 rounded-full text-sm font-medium border border-red-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {appStoreLink && (
              <motion.a
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300"
              >
                📱 App Store
              </motion.a>
            )}
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 border border-gray-600"
              >
                💻 GitHub
              </motion.a>
            )}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Screenshots</h4>
          <div className="grid grid-cols-1 gap-4">
            {screenshots.map((screenshot) => (
              <motion.div
                key={screenshot.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 min-h-[200px] flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-gray-400 font-medium">{screenshot.title}</p>
                  <p className="text-gray-500 text-sm mt-1">Screenshot placeholder</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}