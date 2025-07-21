'use client'

import { TechnicalChallenge } from '@/types/projects'

interface TechnicalChallengeProps {
  challenge: TechnicalChallenge
}

export default function TechnicalChallengeComponent({ challenge }: TechnicalChallengeProps) {
  return (
    <div className="bg-gray-200/60 rounded-2xl shadow-xl border-2 border-gray-300/40 max-w-xs mx-auto">
      {/* Top spacer */}
      <div className="h-8"></div>
      
      <div className="px-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center tracking-wide" 
            style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
          {challenge.title}
        </h3>
        
        <p className="text-base text-gray-700 leading-relaxed text-center font-light" 
           style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
          {challenge.description}
        </p>
      </div>
      
      {/* Bottom spacer */}
      <div className="h-8"></div>
    </div>
  )
}