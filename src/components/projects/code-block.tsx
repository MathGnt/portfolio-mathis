'use client'

import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/core'
import swift from 'highlight.js/lib/languages/swift'
import 'highlight.js/styles/github.css'

// Enregistrer le langage Swift
hljs.registerLanguage('swift', swift)

interface CodeBlockProps {
  code: string
  language: string
  caption?: string
  className?: string
  containerClassName?: string
  captionClassName?: string
}

export default function CodeBlock({
  code,
  language,
  caption,
  className = '',
  containerClassName = 'mt-8',
  captionClassName = 'text-xs text-gray-400 mt-6 text-center font-mono italic'
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <div className={`${containerClassName} max-w-full overflow-hidden`}>
      <div className="overflow-x-auto w-full sm:max-w-6xl">
        <pre className="!m-0 !px-2 sm:!px-8 !py-2 sm:!py-3 text-[7px] sm:text-xs leading-[1.2] sm:leading-relaxed rounded-lg shadow-xl hljs whitespace-pre w-max min-w-full">
          <code ref={codeRef} className={`language-${language} hljs font-mono`}>
            {code}
          </code>
        </pre>
      </div>
      {caption && (
        <p
          className={`${captionClassName} break-words max-w-full`}
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </div>
  )
}
