'use client'

import { useState } from 'react'
import ArchitectureModal from '@/components/ui/architecture-modal'
import ProjectHero from '@/components/projects/project-hero'
import ProjectIntro from '@/components/projects/project-intro'
import ProjectFeature from '@/components/projects/project-feature'
import TechStack from '@/components/projects/tech-stack'
import Divider from '@/components/projects/divider'
import ProjectLink from '@/components/projects/project-link'
import {
  ALBEDO_HERO,
  ALBEDO_CHALLENGE,
  ALBEDO_FEATURES,
  ALBEDO_TECH_STACK,
  BARTINDER_HERO,
  BARTINDER_CHALLENGE,
  BARTINDER_FEATURES,
  BARTINDER_TECH_STACK
} from '@/constants/projects'

export default function Projects() {
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false)

  const albedoIntroDescription = [
    `I’m passionate about astronomy and regularly use the Heavens Above website to track satellites. 
    I wanted to create an app with the same level of accuracy, but delivered through a polished and enjoyable mobile experience`,
    
    `I knew from the start that it would be a relatively advanced app, but that challenge was intentional. 
    It pushed me to dive deep into the codebase, explore Apple’s documentation, run into bugs, learn how to solve them, and develop clean, well-structured code. 
    The design was intentionally kept very native, following Apple’s Human Interface Guidelines and drawing inspiration from the button styles and overall feel of Apple Maps.`
  ]

  const bartenderIntroDescription = [
    `Since Albedo is an app focused on REST APIs and physical calculations, I also wanted to
    create a simpler CRUD application that allows adding, updating and deleting items using Swift Data.`,

    `Built with the simplicity and modern approach of SwiftUI, BarTinder serves as an excellent learning resource for iOS developers at any level. The app leverages the latest iOS 26 APIs and features, including Foundation Models (Apple Intelligence), Liquid Glass design elements, SwiftData for CRUD operations, and Xcode 26's Default Actor Isolation and Approachable Concurrency settings.`,

    `Since I don't have a formal UI/UX design background, I drew heavy inspiration from Apple's stock applications and design language.
    I pay close attention to Apple's Human Interface Guidelines to ensure the app feels truly native.`,

    `I also wanted to build BarTinder with a clean, readable architecture while respecting proper separation of concerns. I wrote extensive tests using Swift Testing
    to practice modern testing techniques, with Xcode Cloud automatically catching any breaking changes.
    By focusing on the CRUD aspect, lists, scroll views and UI/UX, I was targeting a common application pattern
    that is widely used across many types of products.`
  ]

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Albedo Section */}
      <ProjectHero project={ALBEDO_HERO} />
      
      <ProjectIntro 
        title="Why I Built Albedo"
        description={albedoIntroDescription}
        challenge={ALBEDO_CHALLENGE}
      />

      {ALBEDO_FEATURES.map((feature, index) => (
        <ProjectFeature key={index} feature={feature} />
      ))}

      <TechStack techStack={ALBEDO_TECH_STACK} />

      <Divider />

      {/* BarTinder Section */}
      <ProjectHero project={BARTINDER_HERO} />
      
      <ProjectIntro 
        title="Why I Built BarTinder"
        description={bartenderIntroDescription}
        challenge={BARTINDER_CHALLENGE}
      />

      {BARTINDER_FEATURES.map((feature, index) => (
        <ProjectFeature key={index} feature={feature} />
      ))}

      <TechStack
        techStack={BARTINDER_TECH_STACK}
        onArchitectureClick={() => setIsArchitectureModalOpen(true)}
      />

      {BARTINDER_HERO.link && (
        <ProjectLink link={BARTINDER_HERO.link} />
      )}

      <ArchitectureModal
        isOpen={isArchitectureModalOpen}
        onClose={() => setIsArchitectureModalOpen(false)}
      />
    </div>
  )
}