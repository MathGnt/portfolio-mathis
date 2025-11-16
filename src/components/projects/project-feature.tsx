'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectFeature } from '@/types/projects'
import CodeImage from './code-image'
import CodeBlock from './code-block'

interface ProjectFeatureProps {
  feature: ProjectFeature
}

export default function ProjectFeatureComponent({ feature }: ProjectFeatureProps) {
  const isReversed = feature.reversed
  const isMultipleImages = Array.isArray(feature.image)

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-100 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center w-full">
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
                  className={feature.title === 'Create Your Signature' ? 'scale-100 sm:scale-125 ml-0 sm:ml-16' :
                            feature.title === 'Detailed Cocktail View' ? 'scale-90 ml-0 sm:-ml-8' :
                            feature.title === 'Visual Tracking & Navigation' ? 'scale-100 sm:scale-125 ml-0 sm:ml-17' : ''}
                  containerClassName={feature.title === 'Create Your Signature' ? 'mt-8 sm:mt-12 w-full' :
                                    feature.title === 'Detailed Cocktail View' ? 'mt-2 w-full' :
                                    feature.title === 'Visual Tracking & Navigation' ? 'mt-8 sm:mt-12 w-full' : 'mt-8 w-full'}
                  captionClassName={feature.title === 'Create Your Signature' ? 'text-[10px] sm:text-xs text-gray-400 mt-6 sm:mt-12 text-center font-mono italic ml-0 sm:ml-24 break-words px-2' :
                                  feature.title === 'Detailed Cocktail View' ? 'text-[10px] sm:text-xs text-gray-400 -mt-2 text-center font-mono italic ml-0 sm:-ml-8 break-words px-2' :
                                  feature.title === 'Visual Tracking & Navigation' ? 'text-[10px] sm:text-xs text-gray-400 mt-4 sm:mt-6 text-center font-mono italic ml-0 sm:ml-36 break-words px-2' :
                                  'text-[10px] sm:text-xs text-gray-400 mt-4 sm:mt-6 text-center font-mono italic ml-0 sm:ml-6 break-words px-2'}
                />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex justify-center items-center w-full max-w-full overflow-visible ${
              isReversed ? 'lg:order-2' : ''
            } ${
              feature.title === 'Visual Tracking & Navigation' ? 'lg:ml-10 lg:mt-8' :
              feature.title === 'Deep Dive into Pass Details' ? 'lg:-mt-8 lg:ml-20' :
              feature.title === 'Live Ground Tracks & Pass Prediction' ? 'lg:-mt-16 lg:ml-20' : ''
            } ${
              feature.title === 'Create Your Signature' ? 'gap-2 sm:gap-4 lg:ml-32 lg:scale-90' : ''
            }`}
          >
            {isMultipleImages && Array.isArray(feature.image) ? (
              <>
                <Image
                  src={feature.image[0]}
                  alt="Custom recipe creation"
                  width={280}
                  height={560}
                  className="drop-shadow-2xl w-[45%] h-auto lg:w-auto"
                />
                <Image
                  src={feature.image[1]}
                  alt="Ingredient creation"
                  width={280}
                  height={560}
                  className="drop-shadow-2xl w-[45%] h-auto lg:w-auto"
                />
              </>
            ) : (
              feature.image && typeof feature.image === 'string' && (
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={600}
                  className="drop-shadow-2xl w-[55%] h-auto lg:w-auto mx-auto"
                />
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}