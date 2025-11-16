import { MediumArticle, MusicAlbum, Game, Movie, Series, Book, TechSection, Contribution } from '@/types'

export const EXTERNAL_URLS = {
  GITHUB: 'https://github.com/MathGnt',
  MEDIUM: 'https://medium.com/@matgnt',
  EMAIL: 'mailto:matgnt@icloud.com',
  LINKEDIN: 'https://www.linkedin.com/in/mathisgnt',
  DISCOGS: 'https://www.discogs.com/user/MatGnt98/collection',
  ALBEDO_APP_STORE: 'https://apps.apple.com/fr/app/albedo/id6744074239?l=en-GB',
  BARTENDER_GITHUB: 'https://github.com/MathGnt/BarTinder',
  MAPKIT_DOCS: 'https://developer.apple.com/documentation/mapkit',
  WEATHERKIT_DOCS: 'https://developer.apple.com/documentation/weatherkit',
  SWIFT_CHARTS_DOCS: 'https://developer.apple.com/documentation/charts',
  SWIFTDATA_DOCS: 'https://developer.apple.com/documentation/swiftdata',
  CORELOCATION_DOCS: 'https://developer.apple.com/documentation/corelocation',
  SWIFT_TESTING_DOCS: 'https://developer.apple.com/documentation/testing',
  PHOTOSUI_DOCS: 'https://developer.apple.com/documentation/photokit',
  FOUNDATION_MODELS_DOCS: 'https://developer.apple.com/documentation/FoundationModels',
  LIQUID_GLASS_DOCS: 'https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass',
  SATELLITE_KIT: 'https://github.com/gavineadie/SatelliteKit',
  TINY_MOON: 'https://github.com/mannylopez/TinyMoon',
  SATELLITE_UTILITIES: 'https://github.com/gavineadie/SatelliteUtilities/tree/main'
} as const

export const MEDIUM_ARTICLES: MediumArticle[] = [
  {
    title: "Mastering Swift 6.2 Concurrency: A Complete Tutorial",
    subtitle: "A comprehensive guide to Swift 6.2's concurrency features including async/await, actors, and structured concurrency. Learn how to write safe, efficient concurrent code with practical examples and best practices.",
    url: "https://medium.com/@matgnt/mastering-swift-6-2-concurrency-a-complete-tutorial-99a939b0f53b",
    publishedDate: "Jul 2025",
    readTime: "19 min read",
    tags: ["Concurrency", "Async/Await", "Sendable", "MainActor"]
  },
  {
    title: "SwiftUI Redraw System In-Depth",
    subtitle: "A comprehensive exploration of SwiftUI's redraw system covering attributes recomputation, diffing algorithms, and observation patterns. Understand how SwiftUI optimizes view updates for smooth, efficient UI rendering.",
    url: "https://medium.com/@matgnt/swiftui-redraw-system-in-depth-attributes-recomputation-diffing-and-observation-66b469fdcada",
    publishedDate: "Sep 2025",
    readTime: "18 min read",
    tags: ["SwiftUI", "View Updates", "Diffing", "Observation"]
  },
  {
    title: "The Art of SwiftData in 2025",
    subtitle: "A technical deep dive into SwiftData's internal mechanisms and a proposed architecture pattern for implementing draft contexts. Learn how to manage temporary changes and context conflicts with clean, maintainable code.",
    url: "https://medium.com/@matgnt/the-art-of-swiftdata-in-2025-from-scattered-pieces-to-a-masterpiece-1fd0cefd8d87",
    publishedDate: "Nov 2025",
    readTime: "25 min read",
    tags: ["SwiftData", "ModelContext", "Bindable"]
  }
]

export const CONTRIBUTIONS: Contribution[] = [
  {
    appName: "MainOrNot",
    description: "Contributed technical fixes and improvements to Swift Concurrency implementation",
    url: "https://apps.apple.com/au/app/mainornot/id6752519866?uo=2",
    icon: "/images/logos/mainornot.webp",
    isTopApp: true,
    topBadge: "Reached Top 10 Developer Tools on the App Store"
  },
  {
    appName: "SatelliteKit",
    description: "Migrated SPM from Swift 5 to Swift 6 with Sendable conformance, eliminating OOP patterns and transitioning to Protocol-Oriented Programming",
    url: EXTERNAL_URLS.SATELLITE_KIT,
    icon: "/images/logos/iconesatellite.png",
    isClickable: true
  },
  {
    appName: "Caffio",
    description: "Integrated HealthKit for health data tracking and set up CI/CD pipeline with GitHub Actions and Fastlane",
    icon: "/images/logos/caffio.webp",
    isClickable: false
  }
]

export const MUSIC_ALBUMS: MusicAlbum[] = [
  { title: "Boston", artist: "Boston", image: "/images/bands/boston.jpg" },
  { title: "Animals", artist: "Pink Floyd", image: "/images/bands/floyd.jpg" },
  { title: "Tom Petty", artist: "Tom Petty", image: "/images/bands/petty.jpg" },
  { title: "Frank Sinatra", artist: "Sinatra", image: "/images/bands/sinatra.png" },
  { title: "The Rolling Stones", artist: "The Rolling Stones", image: "/images/bands/stones.png" },
  { title: "Sum 41", artist: "Sum 41", image: "/images/bands/sum41.jpg" }
]

export const GAMES: Game[] = [
  { title: "Ace Attorney", image: "/images/games/attorney.png" },
  { title: "Far Cry 5", image: "/images/games/farcry5.jpg" },
  { title: "Layton", image: "/images/games/layton.jpg" },
  { title: "Terraria", image: "/images/games/terraria.jpg" }
]

export const MOVIES: Movie[] = [
  { title: "Interstellar", image: "/images/movies/interstellar.jpg" },
  { title: "Prestige", image: "/images/movies/prestige.jpg" },
  { title: "Se7en", image: "/images/movies/seven.png" },
  { title: "Shutter Island", image: "/images/movies/shutter.jpg" },
  { title: "The Usual Suspects", image: "/images/movies/suspects.jpg" }
]

export const SERIES: Series[] = [
  { title: "Lost", image: "/images/series/lost.jpg" },
  { title: "Severance", image: "/images/series/severance.jpg" }
]

export const BOOKS: Book[] = [
  { title: "Sherlock Holmes", author: "Arthur Conan Doyle", image: "/images/books/sherlock.jpg" },
  { title: "Detective Conan", author: "Gosho Aoyama", image: "/images/books/conan.jpg" },
  { title: "Life", author: "Keith Richards", image: "/images/books/keithlife.jpg" },
  { title: "Exploits & Opinions", author: "Alfred Jarry", image: "/images/books/jarry.jpg" }
]

export const ALBEDO_TECH_STACK: TechSection[] = [
  {
    title: "Apple Frameworks",
    frameworks: [
      { name: "MapKit", description: "Ground tracks", url: EXTERNAL_URLS.MAPKIT_DOCS, isClickable: true },
      { name: "WeatherKit", description: "Visibility forecasts", url: EXTERNAL_URLS.WEATHERKIT_DOCS, isClickable: true },
      { name: "Swift Charts", description: "Data visualization", url: EXTERNAL_URLS.SWIFT_CHARTS_DOCS, isClickable: true },
      { name: "SwiftData", description: "Local cache", url: EXTERNAL_URLS.SWIFTDATA_DOCS, isClickable: true },
      { name: "CoreLocation", description: "Position tracking", url: EXTERNAL_URLS.CORELOCATION_DOCS, isClickable: true }
    ]
  },
  {
    title: "Custom Swift Packages",
    frameworks: [
      { name: "AlbedoKit", description: "In-depth satellite analysis", isClickable: false },
      { name: "SatelliteKit", description: "TLE parsing & mechanics", url: EXTERNAL_URLS.SATELLITE_KIT, isClickable: true },
      { name: "TinyMoon", description: "Moon illumination", url: EXTERNAL_URLS.TINY_MOON, isClickable: true },
      { name: "SatelliteUtilities", description: "Coordinate transforms", url: EXTERNAL_URLS.SATELLITE_UTILITIES, isClickable: true }
    ]
  }
]

export const ALBEDO_PACKAGE_DESCRIPTION = "I initially created my own package (AlbedoKit) for magnitude calculations and Earth shadow computations and proposed integrating it into SatelliteKit. The maintainer preferred to keep SatelliteKit focused on its core functionality, but suggested I contribute to his other package (SatelliteUtilities) that specializes in satellite processing like ground tracks. I added my work to that project."

export const BARTENDER_TECH_STACK: TechSection[] = [
  {
    title: "Apple Frameworks",
    frameworks: [
      { name: "SwiftData", description: "Local persistence", url: EXTERNAL_URLS.SWIFTDATA_DOCS, isClickable: true },
      { name: "Swift Testing", description: "Unit testing", url: EXTERNAL_URLS.SWIFT_TESTING_DOCS, isClickable: true },
      { name: "PhotosUI", description: "Photo selection", url: EXTERNAL_URLS.PHOTOSUI_DOCS, isClickable: true },
      { name: "FoundationModels", description: "Apple Intelligence", url: EXTERNAL_URLS.FOUNDATION_MODELS_DOCS, isClickable: true }
    ]
  },
  {
    title: "Architecture & Design",
    frameworks: [
      { name: "Clean Architecture", description: "", isClickable: false },
      { name: "Liquid Glass", description: "", url: EXTERNAL_URLS.LIQUID_GLASS_DOCS, isClickable: true }
    ]
  }
]

export const DESIGN_TOKENS = {
  colors: {
    primary: '#86868b',
    accent: '#3b82f6'
  },
  fonts: {
    apple: 'var(--font-apple-display)',
    serif: 'ui-serif, Georgia, serif',
    system: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
  },
  animations: {
    defaultDuration: 0.8,
    staggerDelay: 0.1
  }
} as const