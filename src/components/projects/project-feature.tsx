'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectFeature } from '@/types/projects'
import CodeImage from './code-image'
import CodeBlock from './code-block'
import { DESIGN_TOKENS } from '@/constants'

interface ProjectFeatureProps {
  feature: ProjectFeature
}

export default function ProjectFeatureComponent({ feature }: ProjectFeatureProps) {
  const isReversed = feature.reversed
  const isMultipleImages = Array.isArray(feature.image)

  const isVideo = (src: string) => {
    const lowerSrc = src.toLowerCase()
    return lowerSrc.endsWith('.mov') || lowerSrc.endsWith('.mp4')
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-100 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center w-full">
          {/* Left Content - Completely independent */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`w-full max-w-full ${isReversed ? 'lg:order-1' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight break-words max-w-full">
              {feature.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words max-w-full">
              {feature.description}
            </p>

            {feature.codeBlock && (
              <CodeBlock
                code={feature.codeBlock.code}
                language={feature.codeBlock.language}
                caption={feature.codeBlock.caption}
                className=""
                containerClassName="mt-6 sm:mt-8 w-full"
                captionClassName="text-[10px] sm:text-xs text-gray-400 mt-4 sm:mt-6 text-center font-mono italic break-words px-2"
              />
            )}

            {feature.codeImage && (
              <div className="w-full max-w-full overflow-hidden">
                <CodeImage
                  src={feature.codeImage.src}
                  alt={feature.codeImage.alt}
                  width={feature.codeImage.width}
                  height={feature.codeImage.height}
                  caption={feature.codeImage.caption}
                  className=""
                  containerClassName="mt-8 w-full"
                  captionClassName="text-[10px] sm:text-xs text-gray-400 mt-4 sm:mt-6 text-center font-mono italic break-words px-2"
                />
              </div>
            )}
          </motion.div>

          {/* Right Images - Completely independent */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex justify-center items-center w-full max-w-full ${
              isReversed ? 'lg:order-2' : ''
            } ${feature.imageStyles?.containerClassName || ''}`}
          >
            {isMultipleImages && Array.isArray(feature.image) ? (
              <>
                {feature.image.map((src, index) =>
                  isVideo(src) ? (
                    <video
                      key={index}
                      src={src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`drop-shadow-2xl w-[45%] h-auto lg:w-auto ${DESIGN_TOKENS.borderRadius.card} ${feature.imageStyles?.imageClassName || ''}`}
                    />
                  ) : (
                    <Image
                      key={index}
                      src={src}
                      alt="Custom recipe creation"
                      width={280}
                      height={560}
                      className={`drop-shadow-2xl w-[45%] h-auto lg:w-auto ${feature.imageStyles?.imageClassName || ''}`}
                    />
                  )
                )}
              </>
            ) : (
              feature.image && typeof feature.image === 'string' && (
                isVideo(feature.image) ? (
                  <video
                    src={feature.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`drop-shadow-2xl w-[55%] h-auto lg:w-auto mx-auto ${DESIGN_TOKENS.borderRadius.card} ${feature.imageStyles?.imageClassName || ''}`}
                  />
                ) : (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={600}
                    className={`drop-shadow-2xl w-[55%] h-auto lg:w-auto mx-auto ${feature.imageStyles?.imageClassName || ''}`}
                  />
                )
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}