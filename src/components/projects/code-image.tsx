'use client'

interface CodeImageProps {
  src: string
  alt: string
  width: number
  height: number
  caption: string
  className?: string
  containerClassName?: string
  captionClassName?: string
}

export default function CodeImage({ 
  src, 
  alt, 
  width, 
  height, 
  caption, 
  className = '',
  containerClassName = 'mt-8',
  captionClassName = 'text-xs text-gray-400 mt-6 text-center font-mono italic ml-0 sm:ml-6'
}: CodeImageProps) {
  return (
    <div className={containerClassName}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-xl shadow-lg scale-90 sm:scale-110 ml-0 sm:ml-6 max-w-full h-auto ${className}`}
        style={{ imageRendering: 'crisp-edges' }}
      />
      <p 
        className={captionClassName}
        dangerouslySetInnerHTML={{ __html: caption }}
      />
    </div>
  )
}