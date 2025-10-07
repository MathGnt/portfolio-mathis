'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectFeature } from '@/types/projects'
import CodeImage from './code-image'

interface ProjectFeatureProps {
  feature: ProjectFeature
}

export default function ProjectFeatureComponent({ feature }: ProjectFeatureProps) {
  const isReversed = feature.reversed
  const isMultipleImages = Array.isArray(feature.image)

  return (
    <section className="py-20 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isReversed ? 'lg:order-1' : ''}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {feature.title}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {feature.description}
            </p>
            
            {feature.codeImage && (
              <CodeImage
                src={feature.codeImage.src}
                alt={feature.codeImage.alt}
                width={feature.codeImage.width}
                height={feature.codeImage.height}
                caption={feature.codeImage.caption}
                className={feature.title === 'Create Your Signature' ? 'scale-100 sm:scale-125 ml-0 sm:ml-16' :
                          feature.title === 'Detailed Cocktail View' ? 'scale-90 ml-0 sm:-ml-8' :
                          feature.title === 'Visual Tracking & Navigation' ? 'scale-100 sm:scale-125 ml-0 sm:ml-17' : ''}
                containerClassName={feature.title === 'Create Your Signature' ? 'mt-12' : 
                                  feature.title === 'Detailed Cocktail View' ? 'mt-2' : 
                                  feature.title === 'Visual Tracking & Navigation' ? 'mt-12' : 'mt-8'}
                captionClassName={feature.title === 'Create Your Signature' ? 'text-xs text-gray-400 mt-12 text-center font-mono italic ml-0 sm:ml-24' :
                                feature.title === 'Detailed Cocktail View' ? 'text-xs text-gray-400 -mt-2 text-center font-mono italic ml-0 sm:-ml-8' :
                                feature.title === 'Visual Tracking & Navigation' ? 'text-xs text-gray-400 mt-6 text-center font-mono italic ml-0 sm:ml-36' :
                                'text-xs text-gray-400 mt-6 text-center font-mono italic ml-0 sm:ml-6'}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex justify-center ${
              isReversed ? 'lg:order-2' : ''
            } ${
              feature.title === 'Visual Tracking & Navigation' ? 'lg:ml-10 lg:mt-8' :
              feature.title === 'Deep Dive into Pass Details' ? 'lg:-mt-8 lg:ml-20' :
              feature.title === 'Live Ground Tracks & Pass Prediction' ? 'lg:-mt-16' : ''
            } ${
              feature.title === 'Create Your Signature' ? 'flex-col sm:flex-row gap-2 sm:gap-4 lg:ml-96 lg:scale-125' :
              isMultipleImages ? 'flex-col sm:flex-row gap-4 sm:gap-6' : ''
            }`}
          >
            {isMultipleImages && Array.isArray(feature.image) ? (
              <>
                <Image
                  src={feature.image[0]}
                  alt="Custom recipe creation"
                  width={280}
                  height={560}
                  className="drop-shadow-2xl"
                />
                <Image
                  src={feature.image[1]}
                  alt="Ingredient creation"
                  width={280}
                  height={560}
                  className="drop-shadow-2xl"
                />
              </>
            ) : (
              feature.image && typeof feature.image === 'string' && (
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={600}
                  className="drop-shadow-2xl"
                />
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}