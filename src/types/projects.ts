export interface ProjectHero {
  icon: string
  title: string
  description: string
  link?: {
    href: string
    text: string
    icon?: string
  }
}

export interface TechnicalChallenge {
  title: string
  description: string
}

export interface ProjectFeature {
  title: string
  description: string
  image?: string | string[]
  imageStyles?: {
    containerClassName?: string
    imageClassName?: string
  }
  codeImage?: {
    src: string
    alt: string
    width: number
    height: number
    caption: string
  }
  codeBlock?: {
    code: string
    language: string
    caption: string
  }
  reversed?: boolean
}

export interface Framework {
  name: string
  link: string
  description: string
}

export interface CustomPackage {
  name: string
  link?: string
  description: string
}

export interface TechStack {
  title: string
  description: string
  frameworks: Framework[]
  customPackages?: CustomPackage[]
}

export interface ProjectArchitecture {
  title: string
  description: string
  image: string
}