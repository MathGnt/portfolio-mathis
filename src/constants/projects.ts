import { ProjectHero, TechnicalChallenge, ProjectFeature, TechStack } from '@/types/projects'

export const ALBEDO_HERO: ProjectHero = {
  icon: '/images/screenshots/logos/albedo.jpg',
  title: 'Albedo',
  description: 'Track satellites with precision. Get weather-based visibility predictions. Experience the cosmos from your pocket.',
  link: {
    href: 'https://apps.apple.com/fr/app/albedo/id6744074239?l=en-GB',
    text: 'Download on the App Store',
    icon: '/images/screenshots/logos/DOTASUS.svg'
  }
}

export const ALBEDO_CHALLENGE: TechnicalChallenge = {
  title: 'Technical Challenge',
  description: 'The biggest challenge was implementing the complex physics calculations to determine the exact minute when satellites enter and exit Earth\'s shadow, plus calculating magnitude variations throughout each pass. Obviously the architecture wasn\'t simple, I was at the beginning of my learning journey. I had to break and rebuild the app several times until I truly understood SwiftUI architecture.'
}

export const ALBEDO_FEATURES: ProjectFeature[] = [
  {
    title: 'Live Ground Tracks & Pass Prediction',
    description: 'Watch real-time satellite ground tracks with MapKit integration. See the next pass for your selected satellite and get precise visibility chances based on weather conditions.',
    image: '/images/screenshots/screenshot1.png',
    codeImage: {
      src: '/images/screenshots/groundtracks.png',
      alt: 'Ground tracks implementation',
      width: 1205,
      height: 401,
      caption: 'Ground tracks calculation method: SGP4 for low Earth orbit satellites (90-minute revolutions), SDP4 for high orbit satellites.'
    }
  },
  {
    title: 'Deep Dive into Pass Details',
    description: 'Explore every aspect of a satellite pass across 7 days of visibility. Get rise and set times, detailed weather conditions, satellite magnitude variations, and astronomical context.',
    image: '/images/screenshots/screenshot2.png',
    codeImage: {
      src: '/images/screenshots/weatherkit.png',
      alt: 'WeatherKit integration',
      width: 955,
      height: 527,
      caption: 'Albedo powered by WeatherKit for pass forecasting, visibility probability calculations, and weather conditions analysis.'
    },
    reversed: true
  },
  {
    title: 'Visual Tracking & Navigation',
    description: 'Swift Charts integration provides clear visual representations of satellite data. An integrated compass helps you track exactly where the satellite will pass in the sky.',
    image: '/images/screenshots/screenshot3.png',
    codeImage: {
      src: '/images/screenshots/chartselection.png',
      alt: 'Chart selection implementation',
      width: 1080,
      height: 380,
      caption: 'Chart selection method using chartXSelection to manage interactive data visualization.'
    }
  }
]

export const ALBEDO_TECH_STACK: TechStack = {
  title: 'What\'s under the hood',
  description: 'Technologies and frameworks powering Albedo\'s precision',
  frameworks: [
    { name: 'MapKit', link: 'https://developer.apple.com/documentation/mapkit', description: 'Ground tracks' },
    { name: 'WeatherKit', link: 'https://developer.apple.com/documentation/weatherkit', description: 'Visibility forecasts' },
    { name: 'Swift Charts', link: 'https://developer.apple.com/documentation/charts', description: 'Data visualization' },
    { name: 'SwiftData', link: 'https://developer.apple.com/documentation/swiftdata', description: 'Local cache' },
    { name: 'CoreLocation', link: 'https://developer.apple.com/documentation/corelocation', description: 'Position tracking' }
  ],
  customPackages: [
    { name: 'Vapor', link: 'https://vapor.codes', description: 'Backend' },
    { name: 'SatelliteKit', link: 'https://github.com/gavineadie/SatelliteKit', description: 'TLE parsing & mechanics' },
    { name: 'TinyMoon', link: 'https://github.com/mannylopez/TinyMoon', description: 'Moon illumination' },
    { name: 'SatelliteUtilities', link: 'https://github.com/gavineadie/SatelliteUtilities/tree/main', description: 'Coordinate transforms' }
  ]
}

export const BARTINDER_HERO: ProjectHero = {
  icon: '/images/screenshots/logos/bartinder.png',
  title: 'BarTinder',
  description: 'Swipe through ingredients. Discover cocktails. Create your own recipes. The modern way to explore mixology.',
  link: {
    href: 'https://github.com/MathGnt/BarTinder',
    text: 'View on GitHub',
    icon: '/images/screenshots/logos/github-mark.png'
  }
}

export const BARTINDER_CHALLENGE: TechnicalChallenge = {
  title: 'Technical Challenge',
  description: 'Managing relationships between cocktails, ingredients, and measurements was challenging with SwiftData. Apple encourages using \\.modelContext directly in views, but I wanted cleaner architecture. My solution was centralizing data logic in a custom class and injecting it into the SwiftUI environment.'
}

export const BARTINDER_FEATURES: ProjectFeature[] = [
  {
    title: 'Swipe Your Taste',
    description: 'Browse through ingredient cards with familiar swipe gestures. Like vodka? Swipe right. Hate Campari? Swipe left.',
    image: '/images/screenshots/swiping-portrait.png',
    codeImage: {
      src: '/images/screenshots/swiping-code.png',
      alt: 'Swipe gesture implementation',
      width: 980,
      height: 464,
      caption: 'Swipe gestures managed with threshold detection, offset calculations, and rotation animations for smooth card interactions.'
    }
  },
  {
    title: 'Discover Perfect Matches',
    description: 'Based on your ingredient preferences, BarTinder shows you cocktails you can make right now with what you have. Sort them by name, glass type, or difficulty, and add your favorites to the Bar for quick access.',
    image: '/images/screenshots/yourcocktails-portrait.png',
    codeImage: {
      src: '/images/screenshots/possible-cocktails.png',
      alt: 'Possible cocktails algorithm',
      width: 955,
      height: 296,
      caption: 'My first idea was to use Sets for easy ingredient comparison, and even deduce missing ingredients if needed.'
    },
    reversed: true
  },
  {
    title: 'Create Your Signature',
    description: 'Create custom cocktails with your own photos from the library, choose your ingredients, quantities, glassware, and preparation steps. Edit or delete your creations anytime.',
    image: ['/images/screenshots/cocktailcreation-portrait.png', '/images/screenshots/ingredientscreation-portrait.png'],
    codeImage: {
      src: '/images/screenshots/create-edit.png',
      alt: 'Create and edit cocktail implementation',
      width: 1105,
      height: 653,
      caption: 'Since @Model uses @Observable under the hood, I can directly bind cocktail properties to UI components like TextFields and Pickers. This allows me to pass a @Bindable cocktail to the view and use the same view for both creating and editing.'
    }
  },
  {
    title: 'Detailed Cocktail View',
    description: 'Dive deep into each cocktail with comprehensive details: ingredients list, glassware, and all characteristics. Add cocktails to your personal bar, edit recipes, or customize them to your taste.',
    image: '/images/screenshots/cocktaildetail-portrait.png',
    codeImage: {
      src: '/images/screenshots/domain-entities.png',
      alt: 'Domain entities structure',
      width: 830,
      height: 737,
      caption: 'A cocktail has a lot to offer. It includes glassware, style, technique, and difficulty.<br />Plus ingredients with measurements and units.'
    },
    reversed: true
  }
]

export const BARTINDER_TECH_STACK: TechStack = {
  title: 'What\'s under the hood',
  description: 'Technologies and frameworks powering BarTinder\'s cocktail experience',
  frameworks: [
    { name: 'SwiftData', link: 'https://developer.apple.com/documentation/swiftdata', description: 'Local persistence' },
    { name: 'Swift Testing', link: 'https://developer.apple.com/documentation/testing', description: 'Unit testing' },
    { name: 'PhotosUI', link: 'https://developer.apple.com/documentation/photokit', description: 'Photo selection' },
    { name: 'FoundationModels', link: 'https://developer.apple.com/documentation/FoundationModels', description: 'Apple Intelligence' }
  ]
}