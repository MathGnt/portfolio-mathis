export interface MediumArticle {
  title: string
  subtitle: string
  url: string
  publishedDate: string
  readTime: string
  tags: string[]
}

export interface MusicAlbum {
  title: string
  artist: string
  image: string
}

export interface Game {
  title: string
  image: string
}

export interface Movie {
  title: string
  image: string
}

export interface Series {
  title: string
  image: string
}

export interface Book {
  title: string
  author: string
  image: string
}

export interface Framework {
  name: string
  description: string
  url?: string
  isClickable?: boolean
}

export interface TechSection {
  title: string
  frameworks: Framework[]
}

export interface AnimationProps {
  initial?: object
  animate?: object
  whileInView?: object
  viewport?: object
  transition?: object
  delay?: number
}