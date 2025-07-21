'use client'

import { motion } from 'framer-motion'

const albums = [
  {
    title: "The Number of the Beast",
    artist: "Iron Maiden",
    cover: "/albums/iron-maiden.jpg"
  },
  {
    title: "Master of Puppets", 
    artist: "Metallica",
    cover: "/albums/metallica.jpg"
  },
  {
    title: "Paranoid",
    artist: "Black Sabbath", 
    cover: "/albums/sabbath.jpg"
  },
  {
    title: "The Wall",
    artist: "Pink Floyd",
    cover: "/albums/floyd.jpg"
  },
  {
    title: "Back in Black",
    artist: "AC/DC",
    cover: "/albums/acdc.jpg"
  },
  {
    title: "Led Zeppelin IV",
    artist: "Led Zeppelin",
    cover: "/albums/zeppelin.jpg"
  },
  {
    title: "Appetite for Destruction",
    artist: "Guns N' Roses",
    cover: "/albums/gnr.jpg"
  },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    cover: "/albums/floyd2.jpg"
  }
]

export default function VinylCarousel() {
  return (
    <div className="relative overflow-hidden py-8">
      <motion.div 
        className="flex space-x-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {albums.map((album, index) => (
          <motion.div
            key={`first-${index}`}
            className="flex-shrink-0 w-48 h-48 relative group cursor-pointer"
            whileHover={{ scale: 1.05, rotateY: 15 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-red-900 via-red-800 to-red-700 rounded-lg shadow-2xl flex items-center justify-center text-white font-bold text-center p-4 relative overflow-hidden">
              <div className="z-10">
                <div className="text-lg mb-2 leading-tight">{album.artist}</div>
                <div className="text-sm opacity-80 leading-tight">{album.title}</div>
              </div>
              
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-4 rounded-full border-2 border-white/30"></div>
                <div className="absolute inset-8 rounded-full border border-white/20"></div>
                <div className="absolute inset-12 rounded-full border border-white/10"></div>
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            
            <div className="absolute inset-0 rounded-lg bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">🎵</div>
                <div className="text-sm font-medium">Now Playing</div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {albums.map((album, index) => (
          <motion.div
            key={`second-${index}`}
            className="flex-shrink-0 w-48 h-48 relative group cursor-pointer"
            whileHover={{ scale: 1.05, rotateY: 15 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-red-900 via-red-800 to-red-700 rounded-lg shadow-2xl flex items-center justify-center text-white font-bold text-center p-4 relative overflow-hidden">
              <div className="z-10">
                <div className="text-lg mb-2 leading-tight">{album.artist}</div>
                <div className="text-sm opacity-80 leading-tight">{album.title}</div>
              </div>
              
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-4 rounded-full border-2 border-white/30"></div>
                <div className="absolute inset-8 rounded-full border border-white/20"></div>
                <div className="absolute inset-12 rounded-full border border-white/10"></div>
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            
            <div className="absolute inset-0 rounded-lg bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">🎵</div>
                <div className="text-sm font-medium">Now Playing</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}