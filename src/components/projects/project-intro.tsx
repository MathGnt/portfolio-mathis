'use client'

import TechnicalChallengeComponent from './technical-challenge'
import { TechnicalChallenge } from '@/types/projects'

interface ProjectIntroProps {
  title: string
  description: string | string[]
  challenge: TechnicalChallenge
}

export default function ProjectIntro({ title, description, challenge }: ProjectIntroProps) {
  return (
    <section className="py-12 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-left">
              {title}
            </h2>
            
            {Array.isArray(description) ? (
              description.map((paragraph, index) => (
                <p key={index} className="text-xl text-gray-700 leading-relaxed text-left mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-xl text-gray-700 leading-relaxed text-left">
                {description}
              </p>
            )}
          </div>
          
          <TechnicalChallengeComponent challenge={challenge} />
        </div>
      </div>
    </section>
  )
}