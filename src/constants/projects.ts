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
  description: 'One major challenge was processing data from three APIs, mapping them into entities, applying business logic to calculate statistics, and handling it all with structured concurrency. Another was implementing physics calculations to pinpoint when satellites enter and exit Earth’s shadow and track magnitude variations for each pass.'
}

export const ALBEDO_FEATURES: ProjectFeature[] = [
  {
    title: 'Live Ground Tracks',
    description: 'I created AlbedoKit, my Swift Package Manager for handling orbital mechanics calculations. It enables clean code reuse and makes it easy to write focused, targeted tests for each component, ensuring a modular and maintainable design.',
    image: ['/images/screenshots/mapportrait.png', '/images/screenshots/IMG_7204-portrait.png'],
    imageStyles: {
      containerClassName: 'gap-2 sm:gap-4 lg:ml-32'
    },
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
    title: 'Structured Concurrency',
    description: 'Anything that could be fetched or calculated in parallel was handled with structured concurrency. TaskGroup and async let were my best friends for delivering a smooth and responsive experience for the user. WeatherKit played a key role as well, offering seamless Swift integration and a rich set of comprehensive data.',
    image: ['/images/screenshots/passlist.png', '/images/screenshots/maindetail.png'],
    imageStyles: {
      containerClassName: 'gap-2 sm:gap-4 lg:ml-32'
    },
    codeBlock: {
      code: `let validPasses = try await withThrowingTaskGroup { group in
    for pass in passResult.passes {
        group.addTask(name: "Create domain pass") {
            // ... Get Pass Times
            let satellitePass = SatellitePass(satellite: satellite, startTime: startTime, setTime: setTime, observer: userLocationLLA)
            let shadowEvent = try await ShadowEvents.calculateShadowEvents(satellitePass)
            let riseTime = await mapper.getRiseTime(startTime, shadowEvent)
            let setTime = await mapper.getSetTime(endTime, shadowEvent)
            
            async let celestialWeatherSC = mapWeather(riseTime, setTime, weather)
            async let apparentMagnitudesSC = try Magnitude.calculateMagnitudeRange(satellitePass)
            
            let (celestialWeather, apparentMagnitudes) = try await (celestialWeatherSC, apparentMagnitudesSC)
            // ... Domain Pass
        }
    }
    var results: [Pass] = []
    results.reserveCapacity(passResult.passes.count)
    
    for try await pass in group {
        results.append(pass)
    }
    return results
}`,
      language: 'swift',
      caption: 'Albedo powered by WeatherKit for pass forecasting, visibility probability calculations, and weather conditions analysis.'
    },
    reversed: true
  },
  {
    title: 'Visual Tracking & Navigation',
    description: 'I loved Swift Charts from the very first day I discovered it. I find this framework incredibly powerful for displaying real-time statistics, and it was a perfect fit for my use case.',
    image: '/images/screenshots/chartportrait.png',
    codeBlock: {
      code: `Chart(model.pass.apparentMagnitudes) { magnitude in
    if let date = magnitude.date,
       let magnitude = magnitude.magnitude {
        Plot {
            LineMark(
                x: .value("Date", date, unit: .second),
                y: .value("Magnitude", magnitude)
            )
            .foregroundStyle(.chartPrimary)
            .symbol(by: .value("Magnitude", "Magnitude"))
            .interpolationMethod(.catmullRom)
        }
        
        switch model.selectionState {
        case .selected(let selectedMagnitude):
            RuleMarkSelection(selectedMagnitude: selectedMagnitude, shadowEvent: model.pass.shadowEvent)
        case .unselectedWithShadowEvent(let shadowState):
            ShadowRuleMark(shadowState: shadowState)
        case .unselected:
            EmptyRuleMark()
        }
    }
}
.animation(.easeOut(duration: 0.3), value: model.rawSelectedDate)`,
      language: 'swift',
      caption: 'Chart selection switcher using chartXSelection to manage interactive data visualization.'
    }
  },
    {
    title: 'Live Activity',
    description: 'While I initially created a demo implementing Apple\'s Live Activity to display satellites passing in real time on the lock screen / dynamic island, I decided to leave it aside for now to focus on core, essential features. This allowed me to deliver a working product quickly, gather user feedback, and iterate efficiently.',
    image: '/videos/liveactivitydemo.mov',
    imageStyles: {
      containerClassName: 'lg:scale-75'
    },
    codeBlock: {
      code: `DynamicIslandExpandedRegion(.leading) {
    HStack {
        Image(context.attributes.satellitePic)
            .resizable()
            .aspectRatio(contentMode: .fit)
            .frame(width: 21)
        Text(context.attributes.satelliteName)
        
    }
    .padding(.leading, 8)
    .minimumScaleFactor(0.7)
    .lineLimit(1)
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
    title: 'Swipe Gesture',
    description: 'I wanted to push my skills with advanced SwiftUI animations, and I managed to recreate the Tinder-style swipe in a smooth and intuitive way. SwiftUI includes a new GestureState property wrapper that automatically resets to its default value when the gesture ends. However, I chose not to use it because my system needed to work with a threshold and disappearance animations.',
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
    description: 'By tracking the ingredients users like through swipe gestures, I use sets to quickly identify which cocktails they can make with their chosen ingredients. There are multiple ways to achieve this, but it struck me to use isSuperset when designing the ingredient comparison system.',
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
    title: 'Cocktail Creation',
    description: 'The goal was to provide a single view for both creating and editing a cocktail. This keeps the user in context and ensures reusability. I implemented this feature using a generic Swift Data draft context. This way, the view is only responsible for doing its job: displaying content.',
    image: ['/images/screenshots/createcocktail.png', '/images/screenshots/createingredients.png'],
    imageStyles: {
      containerClassName: 'gap-2 sm:gap-4 lg:ml-32'
    },
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
    title: 'Swift Data',
    description: 'I leveraged Swift Data to its full potential, using all the features it offers. The Index macro improves performance when iterating heavily over certain values. I also learned to use the externalStorage option to avoid storing large data directly in the main storage.',
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