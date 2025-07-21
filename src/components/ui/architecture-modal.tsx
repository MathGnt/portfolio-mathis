'use client'

import { motion } from 'framer-motion'

interface ArchitectureModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ArchitectureModal({ isOpen, onClose }: ArchitectureModalProps) {
  if (!isOpen) return null

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Clean Architecture - BarTinder</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-8 flex justify-center">
            <img 
              src="/images/cleanarchi.png" 
              alt="Clean Architecture Diagram - BarTinder"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
            
          <div className="px-8 pb-8 space-y-4 text-gray-600">
            <p>
              <strong className="text-gray-900">Vertical Separation:</strong> I chose a layered "vertical" architecture over "horizontal" feature-based separation since the app was lightweight. However, for better scalability, one could organize by features "horizontally" first to anticipate future modularity and easier Swift Package Manager integration.
            </p>
            <p>
              <strong className="text-gray-900">Dependency Inversion:</strong> The Repository conforms to the <code className="bg-gray-100 px-2 py-1 rounded text-sm">Servable</code> protocol, allowing for easy testing and flexibility.
            </p>
            <p>
              <strong className="text-gray-900">SwiftUI Integration:</strong> SwiftDataSource is injected via <code className="bg-gray-100 px-2 py-1 rounded text-sm">@Environment</code> for small logic operations that don't require going through all the architecture layers.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}