const destinations = [
  {
    id: "paris",
    title: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80&auto=format&fit=crop",
    price: 1200,
    rating: 4.8,
    country: "France (Western Europe)",
    weather: "Temperate (Avg 15°C - 20°C in Spring/Autumn)",
    bestSeason: "Spring (Apr-Jun) & Autumn (Sep-Nov)",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre Dame", "Seine Cruise", "Montmartre"],
    budgetEstimate: "Premium (From $1200+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509060464153-4466739f7600?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "tokyo",
    title: "Tokyo",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80&auto=format&fit=crop",
    price: 1400,
    rating: 4.9,
    country: "Japan (East Asia)",
    weather: "Subtropical (Mild Springs & Crisp, Dry Winters)",
    bestSeason: "Spring (Cherry Blossom, Mar-May) & Autumn (Oct-Nov)",
    attractions: ["Shibuya Crossing", "Sensō-ji Temple", "Tokyo Skytree", "Meiji Shrine", "Akihabara"],
    budgetEstimate: "Premium (From $1400+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554797589-7241bb691973?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "maldives",
    title: "Maldives",
    location: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop",
    price: 1800,
    rating: 5.0,
    country: "Maldives (South Asia)",
    weather: "Tropical Marine (Warm and sunny all year, Avg 28°C)",
    bestSeason: "Dry Season (November to April)",
    attractions: ["Male Atoll Reefs", "Banana Reef", "Vaadhoo Glowing Beach", "Underwater Dining", "Maafushi"],
    budgetEstimate: "Luxury (From $1800+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540206395-68808572332f?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "bali",
    title: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80&auto=format&fit=crop",
    price: 900,
    rating: 4.7,
    country: "Indonesia (Southeast Asia)",
    weather: "Tropical (Warm, humid, Avg 27°C - 30°C year-round)",
    bestSeason: "Dry Season (April to October)",
    attractions: ["Ubud Monkey Forest", "Uluwatu Temple", "Tanah Lot", "Tegallalang Rice Terraces", "Nusa Penida"],
    budgetEstimate: "Budget/Moderate (From $900+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ca9?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577717942855-7c5ee00d43c7?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "santorini",
    title: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80&auto=format&fit=crop",
    price: 1500,
    rating: 4.9,
    country: "Greece (Southern Europe)",
    weather: "Mediterranean (Hot summers, mild and windy winters)",
    bestSeason: "Late Spring (May) and Early Autumn (Sep-Oct)",
    attractions: ["Oia Sunset Viewpoint", "Fira Cliffs", "Red Beach", "Akrotiri Archaeological Site", "Volcano Cruise"],
    budgetEstimate: "Premium (From $1500+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1469796466635-455edf02e69c?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "dubai",
    title: "Dubai",
    location: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format&fit=crop",
    price: 1300,
    rating: 4.8,
    country: "United Arab Emirates (Middle East)",
    weather: "Desert Climate (Extremely hot summers, pleasant winters)",
    bestSeason: "Winter Season (November to March)",
    attractions: ["Burj Khalifa", "The Dubai Mall", "Palm Jumeirah", "Desert Safari", "Dubai Marina"],
    budgetEstimate: "Moderate/Premium (From $1300+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1546412414-e188526159bc?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582672060674-bc2bd8023ed0?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528702748617-c64d49f918af?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "london",
    title: "London",
    location: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80&auto=format&fit=crop",
    price: 1250,
    rating: 4.7,
    country: "United Kingdom (Northern Europe)",
    weather: "Temperate Maritime (Frequent showers, cool summers & mild winters)",
    bestSeason: "Late Spring (May) & Summer (Jun-Aug)",
    attractions: ["Big Ben & Parliament", "Tower Bridge", "The British Museum", "London Eye", "Buckingham Palace"],
    budgetEstimate: "Premium (From $1250+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "new-york",
    title: "New York",
    location: "USA",
    image: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=800&q=80&auto=format&fit=crop",
    price: 1350,
    rating: 4.8,
    country: "United States of America (North America)",
    weather: "Humid Continental (Four distinct seasons, snowy winters & warm summers)",
    bestSeason: "Spring (Apr-Jun) and Autumn/Fall (Sep-Nov)",
    attractions: ["Times Square", "Central Park", "Statue of Liberty", "Empire State Building", "Brooklyn Bridge"],
    budgetEstimate: "Premium (From $1350+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522083165195-342750297f46?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "rome",
    title: "Rome",
    location: "Italy",
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=80&auto=format&fit=crop",
    price: 1100,
    rating: 4.7,
    country: "Italy (Southern Europe)",
    weather: "Mediterranean (Hot, dry summers and cool, humid winters)",
    bestSeason: "Spring (Apr-Jun) and Autumn (Sep-Oct)",
    attractions: ["Colosseum", "Vatican Museums", "Trevi Fountain", "Pantheon", "Roman Forum"],
    budgetEstimate: "Moderate (From $1100+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529260830199-4455b9c41150?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "barcelona",
    title: "Barcelona",
    location: "Spain",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80&auto=format&fit=crop",
    price: 1000,
    rating: 4.6,
    country: "Spain (Southwestern Europe)",
    weather: "Maritime Mediterranean (Warm summers and mild winters)",
    bestSeason: "Spring (May-Jun) & Autumn (Sep-Oct)",
    attractions: ["La Sagrada Família", "Park Güell", "La Rambla", "Gothic Quarter", "Barceloneta Beach"],
    budgetEstimate: "Moderate (From $1000+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e215?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "swiss-alps",
    title: "Swiss Alps",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop",
    price: 2000,
    rating: 5.0,
    country: "Switzerland (Central Europe)",
    weather: "Alpine Climate (Cold, snowy winters & mild, refreshing summers)",
    bestSeason: "Winter (Skiing, Dec-Mar) or Summer (Hiking, Jun-Aug)",
    attractions: ["Matterhorn", "Jungfraujoch", "Interlaken", "Zermatt", "Lucerne Lake"],
    budgetEstimate: "Luxury (From $2000+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "manali",
    title: "Manali",
    location: "India",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80&auto=format&fit=crop",
    price: 500,
    rating: 4.5,
    country: "India (South Asia)",
    weather: "Subtropical Highland (Cool summers and freezing, snowy winters)",
    bestSeason: "March to June (Pleasant) & December to January (Snowfall)",
    attractions: ["Solang Valley", "Rohtang Pass", "Hadimba Temple", "Old Manali", "Jogini Waterfalls"],
    budgetEstimate: "Budget Friendly (From $500+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596760407150-101a10ff61f5?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618083707368-b3823daa2726?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "kashmir",
    title: "Kashmir",
    location: "India",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80&auto=format&fit=crop",
    price: 700,
    rating: 4.9,
    country: "India (South Asia)",
    weather: "Alpine Climate (Mild summers, heavily cold/snowy winters)",
    bestSeason: "March to August (Spring/Summer) & December to February (Winter)",
    attractions: ["Dal Lake Shikara Ride", "Gulmarg Gondola", "Pahalgam Valley", "Sonamarg", "Shalimar Bagh"],
    budgetEstimate: "Budget/Moderate (From $700+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622213702179-b1d5bf009d78?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "munnar",
    title: "Munnar",
    location: "Kerala, India",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80&auto=format&fit=crop",
    price: 450,
    rating: 4.6,
    country: "India (South Asia)",
    weather: "Highland Climate (Pleasant year-round, heavy monsoons)",
    bestSeason: "September to May (Post-monsoon & winter)",
    attractions: ["Eravikulam National Park", "Mattupetty Dam", "Anamudi Peak", "Tea Museum", "Echo Point"],
    budgetEstimate: "Budget Friendly (From $450+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608958416715-bfad09b5ca81?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597486884021-d102434ae9fe?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511185307590-3c2d34199947?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "iceland",
    title: "Iceland",
    location: "Europe",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80&auto=format&fit=crop",
    price: 2100,
    rating: 5.0,
    country: "Iceland (Nordic Europe)",
    weather: "Subpolar Oceanic (Cold, windy, dynamic weather)",
    bestSeason: "Winter (Northern Lights, Nov-Mar) or Summer (Midnight Sun, Jun-Aug)",
    attractions: ["Blue Lagoon", "Gullfoss Waterfall", "Reynisfjara Black Sand Beach", "Golden Circle", "Vatnajökull Ice Caves"],
    budgetEstimate: "Luxury (From $2100+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "kyoto",
    title: "Kyoto",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80&auto=format&fit=crop",
    price: 1400,
    rating: 4.8,
    country: "Japan (East Asia)",
    weather: "Humid Subtropical (Hot, humid summers & cold winters)",
    bestSeason: "Spring (Cherry Blossom, Apr) & Autumn (Foliage, Nov)",
    attractions: ["Fushimi Inari Shrine", "Kinkaku-ji (Golden Pavilion)", "Arashiyama Bamboo Grove", "Gion District", "Kiyomizu-dera"],
    budgetEstimate: "Premium (From $1400+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "singapore",
    title: "Singapore",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80&auto=format&fit=crop",
    price: 1300,
    rating: 4.8,
    country: "Singapore (Southeast Asia)",
    weather: "Tropical Rainforest (Hot, humid, rain showers all year)",
    bestSeason: "Dryer months (February to April)",
    attractions: ["Gardens by the Bay", "Marina Bay Sands", "Sentosa Island", "Universal Studios", "Changi Jewel"],
    budgetEstimate: "Premium (From $1300+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565967511849-75a6012f6641?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "bangkok",
    title: "Bangkok",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80&auto=format&fit=crop",
    price: 800,
    rating: 4.5,
    country: "Thailand (Southeast Asia)",
    weather: "Tropical Savanna (Hot year-round, wet season Jul-Oct)",
    bestSeason: "Cool and Dry Season (November to February)",
    attractions: ["The Grand Palace", "Wat Arun", "Wat Phra Kaew", "Chatuchak Weekend Market", "Khao San Road"],
    budgetEstimate: "Budget/Moderate (From $800+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "phuket",
    title: "Phuket",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80&auto=format&fit=crop",
    price: 850,
    rating: 4.6,
    country: "Thailand (Southeast Asia)",
    weather: "Tropical Monsoonal (Warm beaches, heavy monsoon May-Oct)",
    bestSeason: "November to April",
    attractions: ["Patong Beach", "Phi Phi Islands Tour", "Big Buddha Phuket", "Old Phuket Town", "Karon Viewpoint"],
    budgetEstimate: "Budget/Moderate (From $850+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552083375-1447ce886485?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "sydney",
    title: "Sydney",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80&auto=format&fit=crop",
    price: 1600,
    rating: 4.8,
    country: "Australia (Oceania)",
    weather: "Humid Subtropical (Sunny, hot summers & cool winters)",
    bestSeason: "Spring (Sep-Nov) & Autumn (Mar-May)",
    attractions: ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach", "Darling Harbour", "Taronga Zoo"],
    budgetEstimate: "Premium (From $1600+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524820197278-540916411e20?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490761425401-05436868826f?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "los-angeles",
    title: "Los Angeles",
    location: "USA",
    image: "https://images.unsplash.com/photo-1534196511436-921a4e99f297?w=800&q=80&auto=format&fit=crop",
    price: 1400,
    rating: 4.7,
    country: "United States of America (North America)",
    weather: "Mediterranean (Abundant sunshine year-round, dry and warm)",
    bestSeason: "March to May & September to November",
    attractions: ["Hollywood Walk of Fame", "Santa Monica Pier", "Griffith Observatory", "Universal Studios Hollywood", "Venice Beach"],
    budgetEstimate: "Premium (From $1400+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522083165195-342750297f46?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "amsterdam",
    title: "Amsterdam",
    location: "Netherlands",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800&q=80&auto=format&fit=crop",
    price: 1100,
    rating: 4.6,
    country: "Netherlands (Northwestern Europe)",
    weather: "Oceanic Climate (Mild summers, chilly windy winters)",
    bestSeason: "Spring (Tulip Season, Apr-May) & Summer (Jun-Aug)",
    attractions: ["Rijksmuseum", "Van Gogh Museum", "Anne Frank House", "Canal Cruise", "Vondelpark"],
    budgetEstimate: "Moderate (From $1100+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517736996303-4eec4a66bb75?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "venice",
    title: "Venice",
    location: "Italy",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80&auto=format&fit=crop",
    price: 1250,
    rating: 4.7,
    country: "Italy (Southern Europe)",
    weather: "Humid Subtropical (Warm summers, damp and cold winters)",
    bestSeason: "Spring (April to June) and Autumn (September to October)",
    attractions: ["St. Mark's Basilica", "Doge's Palace", "Grand Canal Gondola", "Rialto Bridge", "Burano Island"],
    budgetEstimate: "Premium (From $1250+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "prague",
    title: "Prague",
    location: "Czech Republic",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80&auto=format&fit=crop",
    price: 950,
    rating: 4.6,
    country: "Czech Republic (Central Europe)",
    weather: "Oceanic/Continental (Warm summers & freezing winters)",
    bestSeason: "Spring (May) and Early Autumn (September)",
    attractions: ["Prague Castle", "Charles Bridge", "Old Town Square", "St. Vitus Cathedral", "Vyšehrad"],
    budgetEstimate: "Moderate (From $950+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541343672885-9be56236302a?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "istanbul",
    title: "Istanbul",
    location: "Turkey",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80&auto=format&fit=crop",
    price: 900,
    rating: 4.7,
    country: "Turkey (Europe/Asia)",
    weather: "Transitional Mediterranean (Warm summers, cool and wet winters)",
    bestSeason: "Spring (Apr-May) and Autumn (Sep-Nov)",
    attractions: ["Hagia Sophia", "Blue Mosque", "Topkapi Palace", "Grand Bazaar", "Bosphorus Cruise"],
    budgetEstimate: "Budget/Moderate (From $900+ per person)",
    gallery: [
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&q=80&auto=format&fit=crop"
    ]
  }
];

export default destinations