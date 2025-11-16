import { ProjectHero, TechnicalChallenge, ProjectFeature, TechStack, ProjectArchitecture } from '@/types/projects'

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
  description: 'One key challenge was implementing the complex physics calculations to determine the exact minute when satellites enter and exit Earth\'s shadow, plus calculating magnitude variations throughout each pass. Obviously the architecture wasn\'t simple, I was at the beginning of my learning journey. I had to break and rebuild the app several times until I truly understood SwiftUI architecture.'
}

export const ALBEDO_FEATURES: ProjectFeature[] = [
  {
    title: 'Live Ground Tracks & Pass Prediction',
    description: 'Watch real-time satellite ground tracks with MapKit integration, fully optimized for dark mode. See the next pass for your selected satellite and get precise visibility chances based on weather conditions.',
    image: ['/images/screenshots/mapportrait.png', '/images/screenshots/IMG_7204-portrait.png'],
    codeBlock: {
      code: `public static func calculateOrbitPaths(for satellite: Satellite) throws -> [CLLocationCoordinate2D] {
    var coordinates: [CLLocationCoordinate2D] = []
    let startDate = Date()

    for minute in 0...90 {
        let futureDate = startDate.addingTimeInterval(Double(minute) * 60)
        let position = try satellite.geoPosition(julianDays: futureDate.julianDate)
        let coordinate = CLLocationCoordinate2D(
            latitude: position.lat,
            longitude: position.lon - floor((position.lon + 180) / 360) * 360
        )
        coordinates.append(coordinate)
    }
    return coordinates
}`,
      language: 'swift',
      caption: 'Ground tracks calculation method: SGP4 for low Earth orbit satellites (90-minute revolutions), SDP4 for high orbit satellites. Implementation from my custom Swift Package Manager AlbedoKit.'
    }
  },
  {
    title: 'Deep Dive into Pass Details',
    description: 'Explore every aspect of a satellite pass across 7 days of visibility. Get rise and set times, detailed weather conditions, satellite magnitude variations, and astronomical context.',
    image: ['/images/screenshots/passlist.png', '/images/screenshots/maindetail.png'],
    codeBlock: {
      code: `do {
    async let hourlyForecast = weatherService.weather(
        for: userLocation,
        including: .hourly(startDate: nowDate, endDate: sevenDaysAhead)
    )
    async let dailyForecast = weatherService.weather(
        for: userLocation,
        including: .daily(startDate: nowDate, endDate: sevenDaysAhead)
    )

    let (hourly, daily) = try await (hourlyForecast, dailyForecast)
    return (hourly, daily)

} catch {
    throw WeatherError.failedToFetchWeather
}`,
      language: 'swift',
      caption: 'Albedo powered by WeatherKit for pass forecasting, visibility probability calculations, and weather conditions analysis.'
    },
    reversed: true
  },
  {
    title: 'Visual Tracking & Navigation',
    description: 'Swift Charts integration provides clear visual representations of satellite data. An integrated compass helps you track exactly where the satellite will pass in the sky.',
    image: '/images/screenshots/chartportrait.png',
    codeBlock: {
      code: `switch model.selectionState {
case .selected(let selectedMagnitude):
    RuleMarkSelection(selectedMagnitude: selectedMagnitude, shadowEvent: model.pass.shadowEvent)
case .unselectedWithShadowEvent(let shadowState):
    ShadowRuleMark(shadowState: shadowState)
case .unselected:
    EmptyRuleMark()
}`,
      language: 'swift',
      caption: 'Chart selection switcher using chartXSelection to manage interactive data visualization.'
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
    { name: 'StoreKit', link: 'https://developer.apple.com/documentation/storekit/', description: 'In-app purchases' },
    { name: 'CoreLocation', link: 'https://developer.apple.com/documentation/corelocation', description: 'Position tracking' }
  ],
  customPackages: [
    { name: 'Vapor', link: 'https://vapor.codes', description: 'Backend' },
    { name: 'SatelliteKit', link: 'https://github.com/gavineadie/SatelliteKit', description: 'TLE parsing & mechanics' },
    { name: 'TinyMoon', link: 'https://github.com/mannylopez/TinyMoon', description: 'Moon illumination' },
    { name: 'SatelliteUtilities', link: 'https://github.com/gavineadie/SatelliteUtilities/tree/main', description: 'Coordinate transforms' }
  ]
}

export const ALBEDO_ARCHITECTURE: ProjectArchitecture = {
  title: 'Architecture',
  description: 'Throughout Albedo\'s development, I broke and rebuilt the application multiple times to master SwiftUI architecture patterns. I evolved from basic MVC to MVVM, then embraced Clean Architecture principles for better separation of concerns. The final iteration features a horizontal, modular architecture built with Swift Package Manager, enabling excellent scalability, comprehensive testing, and seamless feature additions without disrupting the entire codebase.',
  image: '/images/screenshots/albedo-architecture.png'
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
  description: 'Allowing users to cancel cocktail edits while using @Bindable presented a significant challenge. The solution required creating a draft SwiftData context to handle temporary changes, carefully managing potential conflicts between different contexts and @Query, all while maintaining clean and maintainable code architecture throughout the project.'
}

export const BARTINDER_FEATURES: ProjectFeature[] = [
  {
    title: 'Swipe Your Taste',
    description: 'Browse through ingredient cards with familiar swipe gestures. Love an ingredient? Swipe right. Not a fan? Swipe left.',
    image: '/images/screenshots/swipegrenadine.png',
    codeBlock: {
      code: `private func handleSwipe(_ value: DragGesture.Value) {
    if value.translation.width >= threshold {
        offset = BarTinderApp.SwipingSettings.swipeOutDistance
        rotation = BarTinderApp.SwipingSettings.maxRotation
        Task { await model.swipeRight(card: cardIngredient) }
    } else if value.translation.width <= -threshold {
        offset = -BarTinderApp.SwipingSettings.swipeOutDistance
        rotation = -BarTinderApp.SwipingSettings.maxRotation
        Task { await model.swipeLeft(card: cardIngredient)  }
    } else {
        offset = 0
        rotation = 0
    }
}`,
      language: 'swift',
      caption: 'Swipe gestures managed with threshold detection, offset calculations, and rotation animations for smooth card interactions.'
    }
  },
  {
    title: 'Discover Perfect Matches',
    description: 'Based on your ingredient preferences, BarTinder shows you cocktails you can make right now with what you have. Sort them by name, glass type, or difficulty, and add your favorites to the Bar for quick access.',
    image: '/images/screenshots/homepagedark.png',
    codeBlock: {
      code: `func executeUpdatePossibleCocktails() {
    let cocktails = repo.callGetContextContent()
    for cocktail in cocktails {
        let ingredientNames = Set(cocktail.ingredients.map(\\.name))
        if selectedIngredients.isSuperset(of: ingredientNames) {
            cocktail.isPossible = true
        }
    }
    repo.callContextSave()
}`,
      language: 'swift',
      caption: 'My first idea was to use Sets for easy ingredient comparison, and even deduce missing ingredients if needed.'
    },
    reversed: true
  },
  {
    title: 'Create Your Signature',
    description: 'Create custom cocktails with your own photos from the library, choose your ingredients, quantities, glassware, and preparation steps. Edit or delete your creations anytime.',
    image: ['/images/screenshots/createcocktail.png', '/images/screenshots/createingredients.png'],
    codeBlock: {
      code: `struct CreateEditCocktail: View {
    @Environment(\\.modelContext) private var context
    @State private var model = CocktailCreationModel()
    @Bindable var cocktail: Cocktail

    var body: some View {
        List {
            Section {
                CocktailPreviewSection(selectedImage: $model.selectedPic, cocktail: cocktail)
            }
            // ...
        }
        .toolbar {
            CreationToolbar(cocktail: cocktail)
        }
        .navigationTitle(context.insertedModelsArray.isEmpty ? "Edit Cocktail" : "New Cocktail")
        .navigationBarBackButtonHidden()
        .navigationBarTitleDisplayMode(.inline)
        .scrollDismissesKeyboard(.interactively)
        .environment(model)
    }
}`,
      language: 'swift',
      caption: 'Since @Model uses @Observable under the hood, I can directly bind cocktail properties to UI components like TextFields and Pickers. This allows me to pass a @Bindable cocktail to the view and use the same view for both creating and editing.'
    }
  },
  {
    title: 'Detailed Cocktail View',
    description: 'Dive deep into each cocktail with comprehensive details: ingredients list, glassware, and all characteristics. Add cocktails to your personal bar, edit recipes, or customize them to your taste.',
    image: '/images/screenshots/cocktaildetail.png',
    codeBlock: {
      code: `@Model
final class Cocktail {
    #Index<Cocktail>([\\.isInBar, \\.isPossible])

    @Attribute(.unique)
    var name: String
    @Relationship(deleteRule: .cascade, inverse: \\Ingredient.cocktail)
    var ingredients: [Ingredient]
    var isInBar: Bool
    var isPossible: Bool
    var imageName: String?
    @Attribute(.externalStorage)
    var imageData: Data?
    var style: CocktailStyle
    var glass: CocktailGlass
    var mixingTechnique: CocktailMixingTechnique
    var difficulty: CocktailDifficulty

    init(...) { ... }
}

@Model
final class Ingredient {
    var name: String
    var measure: String
    var unit: Units

    var cocktail: Cocktail?

    init(...) { ... }
}`,
      language: 'swift',
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