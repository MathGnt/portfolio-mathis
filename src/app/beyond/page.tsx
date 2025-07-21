'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MUSIC_ALBUMS, GAMES, MOVIES, SERIES, BOOKS, EXTERNAL_URLS } from '@/constants'

export default function Beyond() {

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-gray-900 mb-6"
          >
            Beyond Code
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#86868b' }}
          >
            I'm a huge music fan and listen to it while coding. 
            I also play guitar and watch detective fiction.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900 mb-6"
              >
                Music
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                Music is a huge part of my life. I've been playing guitar since my youth and have a deep love for classic rock from the 70s. 
                I grew up listening to music from my era, but gradually became interested in all types and periods. 
                I love owning music physically, so I collect CDs and vinyl records. 
                I also listen to a lot of music on streaming platforms obviously, I find that algorithms are always really good at helping us discover new gems!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-4"
              >
                <a 
                  href={EXTERNAL_URLS.DISCOGS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-colors duration-300 space-x-2"
                >
                  <Image src="/images/screenshots/logos/discogslogo.png" alt="Discogs logo" className="w-5 h-5 invert" width={20} height={20} />
                  <span>View my collection</span>
                </a>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {MUSIC_ALBUMS.map((album, index) => (
                  <motion.div
                    key={album.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <div className="aspect-square bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 relative">
                      <Image
                        src={album.image}
                        alt={album.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20 pointer-events-none"></div>
                      <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 mt-3 text-center">{album.artist}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Gaming Favorites
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-center mb-12 max-w-2xl mx-auto"
            style={{ color: '#86868b' }}
          >
            I'm not a huge gamer, but there are some games I've really loved 
            and enjoy revisiting from time to time. Oh, and I happen to play chess too.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {GAMES.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-2xl shadow-lg overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    width={480}
                    height={640}
                    className="w-full h-full object-cover rounded-2xl"
                    quality={100}
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mt-3 text-center">{game.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Movies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-center mb-12 max-w-2xl mx-auto"
            style={{ color: '#86868b' }}
          >
            The movies I love blend my passions together, 
            astronomy, detective stories, mystery, and mind-bending plots.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {MOVIES.map((movie, index) => (
              <motion.div
                key={movie.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="aspect-[2/3] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mt-3 text-center">{movie.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-4"
          >
            TV Series
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-center mb-12 max-w-2xl mx-auto"
            style={{ color: '#86868b' }}
          >
            If there are two series that are my absolute favorites, these are them. 
            Lost completely blew me away, and Severance continues to surprise me each season.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {SERIES.map((show, index) => (
              <motion.div
                key={show.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="aspect-[2/3] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <Image
                    src={show.image}
                    alt={show.title}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mt-3 text-center">{show.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-4"
          >
            My Library
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-center mb-12 max-w-2xl mx-auto"
            style={{ color: '#86868b' }}
          >
            I don't take enough time to read, but here's what I'm enjoying right now. 
            Actually, maybe it's better this way, otherwise I think my library would fill up pretty quickly.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-amber-800 to-amber-700 h-6 rounded-lg shadow-lg mb-4"></div>
            
            <div className="flex justify-center items-end space-x-4 mb-8">
              {BOOKS.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, y: 50, rotateY: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="group"
                >
                  <div className="relative">
                    <div className="absolute -right-1 top-2 w-full h-full bg-black/20 rounded-r-lg transform skew-y-1"></div>
                    
                    <div className="bg-white rounded-lg shadow-xl border-2 border-gray-300 p-2 relative">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={144}
                        height={192}
                        className="rounded object-contain w-auto h-48"
                        quality={100}
                      />
                    </div>
                    
                    <div className="mt-3 text-center">
                      <h3 className="text-sm font-bold text-gray-800">{book.title}</h3>
                      <p className="text-xs text-gray-600">{book.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-amber-900 to-amber-800 h-4 rounded-lg shadow-xl"></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}