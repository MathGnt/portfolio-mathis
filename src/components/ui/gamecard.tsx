'use client'

import { motion } from 'framer-motion'

interface Game {
  title: string
  genre: string
  platform: string
  image: string
}

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  const getGenreColor = (genre: string) => {
    switch (genre.toLowerCase()) {
      case 'rpg':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
      case 'action rpg':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
      case 'open world':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'action':
        return 'bg-red-500/20 text-red-300 border-red-500/30'
      case 'fps':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/30'
      case 'sports':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 10 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
    >
      <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
        <div className="text-center p-4">
          <div className="text-3xl mb-2">🎮</div>
          <p className="text-gray-400 font-medium text-sm">{game.title}</p>
        </div>
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <div className="text-white font-semibold mb-1">{game.title}</div>
            <div className="text-gray-300 text-sm">{game.platform}</div>
          </div>
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-white text-sm mb-2 truncate">{game.title}</h3>
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getGenreColor(game.genre)}`}>
            {game.genre}
          </span>
          <span className="text-gray-400 text-xs">{game.platform}</span>
        </div>
      </div>
    </motion.div>
  )
}