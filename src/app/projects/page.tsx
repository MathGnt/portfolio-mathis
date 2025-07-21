'use client'

import { useState } from 'react'
import ArchitectureModal from '@/components/ui/architecture-modal'
import ProjectHero from '@/components/projects/project-hero'
import ProjectIntro from '@/components/projects/project-intro'
import ProjectFeature from '@/components/projects/project-feature'
import TechStack from '@/components/projects/tech-stack'
import Divider from '@/components/projects/divider'
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
    `I wanted to build a relatively advanced app right from the start. My goal was to dive
    deep into the code, explore Apple's documentation in detail, challenge myself by running 
    into bugs and learning to solve them, and develop disciplined, well-organized code.
    In terms of design, I aimed to keep the look and feel very native, drawing inspiration from the
    button styles used in Apple Maps.`,
    
    `As for the app's focus, I'm passionate about astronomy. I often use the Heavens Above website to track
    satellites, and I wanted to create something just as precise; but with a polished and enjoyable mobile experience.`
  ]

  const bartenderIntroDescription = [
    `Since Albedo is an app focused on REST APIs and physical calculations, I also wanted to
    create a simpler CRUD application that allows adding, updating and deleting items using Swift Data.
    I designed the app's architecture around persistent data, and used a local JSON file as a mock API to
    manage ingredients and cocktails.`,
    
    `When iOS 26 beta dropped, I integrated the latest features like Foundation Models (Apple Intelligence)
    and Liquid Glass design elements, as well as the new settings for Xcode 26 (Default Actor Isolation and Approachable Concurrency) to stay current with Apple's newest developments.
    Since I don't have a formal UI/UX design background, I drew heavy inspiration from Apple's stock applications and design language. 
    I pay close attention to Apple's Human Interface Guidelines to ensure the app feels truly native.`,
    
    `I also wanted to build BarTinder with a very clean architecture using use cases, repositories, 
    dependency injection, and proper separation of concerns. I wrote extensive tests using Swift Testing 
    to practice modern testing techniques and catch any breaking changes instantly.
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
      
      <ArchitectureModal 
        isOpen={isArchitectureModalOpen} 
        onClose={() => setIsArchitectureModalOpen(false)} 
      />
    </div>
  )
}