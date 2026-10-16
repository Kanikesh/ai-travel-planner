import { FeaturedDestination, Itinerary } from '@/types/trip';

export const FEATURED_DESTINATIONS: FeaturedDestination[] = [
  {
    id: 'kyoto-japan',
    name: 'Kyoto & Tokyo',
    country: 'Japan',
    tagline: 'Ancient shrines, neon skylines, and Michelin-star ramen alleys',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 7,
    typicalBudget: 'moderate',
    bestSeason: 'Spring / Autumn',
    tags: ['Culture', 'Culinary', 'Temples', 'Futuristic']
  },
  {
    id: 'paris-france',
    name: 'Paris',
    country: 'France',
    tagline: 'World-renowned art museums, cobblestone cafes, and Seine sunset cruises',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 5,
    typicalBudget: 'luxury',
    bestSeason: 'May - September',
    tags: ['Romance', 'Museums', 'Gastronomy', 'Fashion']
  },
  {
    id: 'bali-indonesia',
    name: 'Bali (Ubud & Canggu)',
    country: 'Indonesia',
    tagline: 'Emerald rice terraces, clifftop temples, and world-class surfing beaches',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 6,
    typicalBudget: 'budget',
    bestSeason: 'April - October',
    tags: ['Wellness', 'Beaches', 'Adventure', 'Yoga']
  },
  {
    id: 'rome-italy',
    name: 'Rome & Amalfi',
    country: 'Italy',
    tagline: 'Gladiatorial ruins, cliffside pastel villages, and authentic handmade pasta',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 6,
    typicalBudget: 'moderate',
    bestSeason: 'Spring / Fall',
    tags: ['History', 'Gelato', 'Coastal Views', 'Architecture']
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps & Lucerne',
    country: 'Switzerland',
    tagline: 'Snow-capped peaks, alpine train journeys, and crystal-clear mountain lakes',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 5,
    typicalBudget: 'luxury',
    bestSeason: 'Summer / Winter',
    tags: ['Hiking', 'Scenic Trains', 'Skiing', 'Nature']
  },
  {
    id: 'rajasthan-india',
    name: 'Jaipur & Udaipur',
    country: 'India',
    tagline: 'Grand hilltop forts, romantic marble lake palaces, and rich royal heritage',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 6,
    typicalBudget: 'moderate',
    bestSeason: 'October - March',
    tags: ['Royal Forts', 'Palaces', 'Culture', 'Spices']
  },
  {
    id: 'kerala-india',
    name: 'Kerala (Munnar & Alleppey)',
    country: 'India',
    tagline: 'Serene palm-fringed backwaters, emerald tea estates, and Ayurvedic retreats',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 5,
    typicalBudget: 'budget',
    bestSeason: 'September - March',
    tags: ['Backwaters', 'Tea Gardens', 'Nature', 'Houseboats']
  },
  {
    id: 'goa-india',
    name: 'Goa (Beaches & Heritage)',
    country: 'India',
    tagline: 'Sun-kissed Arabian shores, Portuguese colonial villas, and beach shacks',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 5,
    typicalBudget: 'budget',
    bestSeason: 'November - February',
    tags: ['Beaches', 'Portuguese Heritage', 'Nightlife', 'Seafood']
  },
  {
    id: 'varanasi-india',
    name: 'Varanasi & Sarnath',
    country: 'India',
    tagline: 'Ancient riverside ghats, glowing evening aartis, and the world\'s oldest living city',
    image: 'https://images.unsplash.com/photo-1561361058-c24e020b9e4b?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 4,
    typicalBudget: 'budget',
    bestSeason: 'October - March',
    tags: ['Spirituality', 'Ghats', 'Ancient History', 'Silk Weaving']
  },
  {
    id: 'agra-india',
    name: 'Agra & Fatehpur Sikri',
    country: 'India',
    tagline: 'The ivory-white Taj Mahal at sunrise, Mughal grandeur, and aromatic Mughlai cuisine',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 3,
    typicalBudget: 'budget',
    bestSeason: 'October - February',
    tags: ['Taj Mahal', 'Mughal Heritage', 'UNESCO Sites', 'Culinary']
  },
  {
    id: 'himachal-india',
    name: 'Manali & Spiti Valley',
    country: 'India',
    tagline: 'Snow-capped Himalayan passes, Buddhist monasteries, and adventure sports paradise',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 7,
    typicalBudget: 'budget',
    bestSeason: 'May - October',
    tags: ['Himalayas', 'Trekking', 'Monasteries', 'Adventure']
  },
  {
    id: 'mumbai-india',
    name: 'Mumbai & Elephanta Caves',
    country: 'India',
    tagline: 'Iconic colonial Gateway of India, Bollywood energy, and legendary street food',
    image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 4,
    typicalBudget: 'moderate',
    bestSeason: 'November - February',
    tags: ['Bollywood', 'Street Food', 'Colonial Heritage', 'City Life']
  },
  {
    id: 'new-york-usa',
    name: 'New York City',
    country: 'United States',
    tagline: 'Broadway spectacles, Central Park strolls, and vibrant diverse neighborhoods',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
    recommendedDays: 4,
    typicalBudget: 'moderate',
    bestSeason: 'September - November',
    tags: ['City Life', 'Shows', 'Skyline', 'Shopping']
  }
];

export const TRAVEL_INTERESTS = [
  { id: 'culinary', label: 'Food & Culinary', icon: 'Utensils', description: 'Local street food, wine tastings & fine dining' },
  { id: 'culture', label: 'Culture & Heritage', icon: 'Landmark', description: 'Historic temples, ancient ruins & museums' },
  { id: 'nature', label: 'Nature & Adventure', icon: 'Compass', description: 'Hiking trails, waterfalls & outdoor thrills' },
  { id: 'beaches', label: 'Beaches & Sunshine', icon: 'Palmtree', description: 'Coastal relaxation, snorkeling & boat tours' },
  { id: 'nightlife', label: 'Nightlife & Social', icon: 'Sparkles', description: 'Rooftop bars, live music & vibrant districts' },
  { id: 'wellness', label: 'Wellness & Relaxation', icon: 'HeartHandshake', description: 'Spas, hot springs, scenic calm retreats' },
  { id: 'photography', label: 'Scenic Photography', icon: 'Camera', description: 'Instagrammable viewpoints and architectural wonders' },
  { id: 'shopping', label: 'Shopping & Markets', icon: 'ShoppingBag', description: 'Boutiques, night bazaars & artisan crafts' },
];

export const SAMPLE_ITINERARIES: Record<string, Itinerary> = {
  'kyoto-japan': {
    id: 'sample-kyoto-7d',
    tripTitle: 'Enchanting Kyoto & Tokyo: Tradition Meets Future',
    destination: 'Kyoto & Tokyo',
    country: 'Japan',
    durationDays: 7,
    budgetCategory: 'moderate',
    companion: 'couple',
    summary: 'A curated 7-day blend of sacred wooden temples, bamboo groves, bustling Shinjuku neon lights, and authentic kaiseki dining experiences.',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    isSampleData: true,
    createdAt: '2026-10-16',
    estimatedCost: {
      currency: 'USD',
      totalRange: '$1,650 - $2,300 per person',
      breakdown: {
        accommodation: '$800 - $1,100 (Boutique Ryokan + 4★ Tokyo Hotel)',
        food: '$450 - $650 (Izakayas, Ramen, Matcha Teahouses)',
        activities: '$200 - $280 (Shrine passes, teamLab tickets, tea ceremony)',
        transportation: '$200 - $270 (JR Shinkansen bullet train + Suica IC card)',
      }
    },
    weatherAdvice: 'Mild autumn temperatures (16°C - 21°C). Comfortable walking shoes and a light jacket are essential.',
    packingEssentials: [
      'Slip-on comfortable shoes (easy to take off for temples)',
      'Universal power adapter (Type A/B)',
      'Light rain jacket or compact umbrella',
      'Portable power bank for maps and photos'
    ],
    travelTips: [
      'Purchase an IC card (Suica / Pasmo) for seamless train and subway transit.',
      'Visit Fushimi Inari Taisha early at 7:00 AM to beat tour bus crowds.',
      'Most temples require cash for entrance admission amulets and stamps (Goshuin).'
    ],
    attractionPins: [
      { name: 'Fushimi Inari Shrine', category: 'Shrine', lat: 34.9671, lng: 135.7727, rating: 4.8, reviews: 34200 },
      { name: 'Kinkaku-ji (Golden Pavilion)', category: 'Temple', lat: 35.0394, lng: 135.7292, rating: 4.7, reviews: 28900 },
      { name: 'Arashiyama Bamboo Grove', category: 'Nature', lat: 35.0169, lng: 135.6713, rating: 4.6, reviews: 22100 },
      { name: 'Shibuya Crossing', category: 'Landmark', lat: 35.6595, lng: 139.7004, rating: 4.7, reviews: 45000 },
      { name: 'teamLab Planets', category: 'Art Experience', lat: 35.6491, lng: 139.7898, rating: 4.9, reviews: 18500 }
    ],
    days: [
      {
        dayNumber: 1,
        theme: 'Arrival & Ancient Whispers of Historic Kyoto',
        morning: {
          time: '08:30 AM',
          title: 'Walk the 10,000 Vermilion Torii Gates of Fushimi Inari',
          location: 'Fushimi Ward, Kyoto',
          description: 'Hike through scenic mountain trails covered with thousands of bright orange Torii gates dedicated to the god of rice and commerce.',
          highlight: 'Quiet mid-mountain summit with panoramic views over Kyoto valley.',
          tag: 'Culture'
        },
        afternoon: {
          time: '01:30 PM',
          title: 'Stroll Through the Historic Geisha District of Gion',
          location: 'Gion & Hanami-koji Street',
          description: 'Explore preserved wooden machiya merchant townhouses, tranquil tea houses, and traditional sweets shops.',
          highlight: 'Traditional matcha ceremony in a 150-year-old courtyard.',
          tag: 'Sightseeing'
        },
        evening: {
          time: '06:30 PM',
          title: 'Dining Along the Pontocho Alley Lantern Canal',
          location: 'Pontocho, Kamogawa River',
          description: 'Dine on open-air raised wooden platforms (kawayuka) overlooking the cool waters of the Kamo River.',
          highlight: 'Seasonal Kyoto vegetable tempura and chilled craft sake.',
          tag: 'Food'
        },
        recommendedDish: {
          name: 'Kamo-Nanban Soba (Duck & Leek Buckwheat Noodles)',
          description: 'Rich warm broth with tender duck breast and charred scallions served in an artisanal lacquer bowl.',
          bestSpot: 'Honke Owariya (Serving soba since 1465)'
        }
      },
      {
        dayNumber: 2,
        theme: 'Zen Temples, Golden Reflections & Bamboo Pathways',
        morning: {
          time: '09:00 AM',
          title: 'Kinkaku-ji: The Splendor of the Golden Pavilion',
          location: 'Kita Ward, Kyoto',
          description: 'Marvel at the top two floors of the Zen temple entirely covered in delicate pure gold leaf, reflected in Mirror Pond.',
          highlight: 'Strolling through the Muromachi period garden with bonsai islets.',
          tag: 'Culture'
        },
        afternoon: {
          time: '01:00 PM',
          title: 'Arashiyama Bamboo Forest & Tenryu-ji Temple',
          location: 'Western Kyoto',
          description: 'Listen to the soothing rustle of soaring bamboo stalks, then cross the historic Togetsukyo wooden bridge.',
          highlight: 'Scenic riverside coffee stop at % Arabica overlooking the gorge.',
          tag: 'Nature'
        },
        evening: {
          time: '06:00 PM',
          title: 'Nishiki Market Food Crawl',
          location: 'Nakagyo Ward, Kyoto',
          description: 'Kyoto’s famous "Kitchen" with over 100 stalls of skewered seafood, tamagoyaki omelettes, and pickled delicacies.',
          highlight: 'Freshly roasted sweet dango with sweetened soy glaze.',
          tag: 'Food'
        },
        recommendedDish: {
          name: 'Yudofu (Silken Simmered Kyoto Tofu)',
          description: 'Delicate artisanal tofu simmered in kombu dashi broth with citrusy ponzu sauce.',
          bestSpot: 'Tousuiro Kiyamachi'
        }
      },
      {
        dayNumber: 3,
        theme: 'Bullet Train to the Future: Tokyo Neon & Skyscrapers',
        morning: {
          time: '09:30 AM',
          title: 'Shinkansen Shinkansen Bullet Train to Tokyo (2.5 hrs)',
          location: 'Kyoto Station -> Tokyo Station',
          description: 'Sit back at 300 km/h with an Ekiben bento box as Mount Fuji flashes past your cabin window.',
          highlight: 'Catching Mt. Fuji view on the left-hand seats (E seats).',
          tag: 'Sightseeing'
        },
        afternoon: {
          time: '02:00 PM',
          title: 'Electric City Akihabara & Retro Arcade Exploration',
          location: 'Chiyoda, Tokyo',
          description: 'Immerse yourself in Japan’s premier electronics and anime district filled with multi-level gaming complexes.',
          highlight: 'Trying vintage crane games and tasting matcha Taiyaki pastries.',
          tag: 'Adventure'
        },
        evening: {
          time: '07:00 PM',
          title: 'Shinjuku Omoide Yokocho (Memory Lane)',
          location: 'Nishi-Shinjuku, Tokyo',
          description: 'Cozy post-war laneways packed with smokey yakitori skewers, friendly locals, and ice-cold draft beer.',
          highlight: 'Grilled charcoal chicken skewers with scallion and yuzu kosho.',
          tag: 'Food'
        },
        recommendedDish: {
          name: 'Charcoal Grilled Yakitori Skewers',
          description: 'Tender chicken skewers basted with sweet tare glaze over binchotan white charcoal.',
          bestSpot: 'Toriyoshi Shinjuku'
        }
      },
      {
        dayNumber: 4,
        theme: 'Digital Art Frontiers & Waterfront Odaiba',
        morning: {
          time: '10:00 AM',
          title: 'teamLab Planets Immersive Digital Sensory Museum',
          location: 'Toyosu, Tokyo',
          description: 'Wade barefoot through water surrounded by floating illuminated digital koi fish and endless crystal mirror rooms.',
          highlight: 'The Infinite Crystal Universe mirror hall.',
          tag: 'Culture'
        },
        afternoon: {
          time: '02:00 PM',
          title: 'Tsukiji Outer Seafood Market',
          location: 'Chuo, Tokyo',
          description: 'Savor freshly torched A5 Wagyu beef skewers, fatty tuna (Otoro) nigiri, and fresh sea urchin rice bowls.',
          highlight: 'Directly observing knife-masters slicing fresh tuna.',
          tag: 'Food'
        },
        evening: {
          time: '06:30 PM',
          title: 'Shibuya Sky 360-Degree Sunset Observation Deck',
          location: 'Shibuya Scramble Square',
          description: 'Stand 229 meters above Tokyo looking down onto the famous Shibuya Crossing with Tokyo Tower glowing in the distance.',
          highlight: 'Watching thousands of pedestrians cross Shibuya below simultaneously.',
          tag: 'Sightseeing'
        },
        recommendedDish: {
          name: 'Triple-Fat Otoro Tuna Nigiri',
          description: 'Melt-in-your-mouth bluefin tuna belly over warm seasoned sushi rice.',
          bestSpot: 'Sushi Zanmai Main Branch'
        }
      }
    ]
  },
  'bali-indonesia': {
    id: 'sample-bali-6d',
    tripTitle: 'Tropical Sanctuary: Ubud Jungles & Canggu Sunsets',
    destination: 'Bali (Ubud & Canggu)',
    country: 'Indonesia',
    durationDays: 6,
    budgetCategory: 'budget',
    companion: 'friends',
    summary: 'An exhilarating 6-day tropical escape filled with sunrise volcano hikes, sacred waterfall swims, healthy smoothie bowls, and boho beach clubs.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    isSampleData: true,
    createdAt: '2026-10-16',
    estimatedCost: {
      currency: 'USD',
      totalRange: '$650 - $980 per person',
      breakdown: {
        accommodation: '$240 - $400 (Private pool villa shared among friends)',
        food: '$150 - $240 (Warung local dinners, organic cafes)',
        activities: '$140 - $200 (Mount Batur trek, surfing lessons, massage)',
        transportation: '$120 - $140 (Private scooter rentals + Grab driver)',
      }
    },
    weatherAdvice: 'Warm tropical sunshine (28°C - 31°C). Bring sunscreen, swimwear, and insect repellent.',
    packingEssentials: [
      'Eco-friendly reef-safe sunscreen',
      'Waterproof dry bag for boat & waterfall adventures',
      'Comfortable hiking footwear for sunrise trek',
      'Sarong for temple entrances (can also rent locally)'
    ],
    travelTips: [
      'Download Grab or Gojek apps for cheap and reliable transport.',
      'Always dress respectfully covering shoulders and knees when visiting Pura temples.',
      'Drink only bottled or filtered water.'
    ],
    attractionPins: [
      { name: 'Tegallalang Rice Terrace', category: 'Nature', lat: -8.4312, lng: 115.2785, rating: 4.6, reviews: 29000 },
      { name: 'Mount Batur Volcano', category: 'Adventure', lat: -8.2421, lng: 115.3753, rating: 4.8, reviews: 15400 },
      { name: 'Tegenungan Waterfall', category: 'Waterfall', lat: -8.5752, lng: 115.2891, rating: 4.5, reviews: 18200 },
      { name: 'Echo Beach Canggu', category: 'Beach', lat: -8.6558, lng: 115.1274, rating: 4.7, reviews: 21000 }
    ],
    days: [
      {
        dayNumber: 1,
        theme: 'Arrival in Cultural Ubud & Jungle Waterfalls',
        morning: {
          time: '09:00 AM',
          title: 'Tegallalang Emerald Rice Terraces & Jungle Swings',
          location: 'Tegallalang, Ubud',
          description: 'Wander through the ancient Subak cooperative irrigation system carved into steep green ravines.',
          highlight: 'Soaring on the valley swing with endless palm canopy below.',
          tag: 'Nature'
        },
        afternoon: {
          time: '01:30 PM',
          title: 'Sacred Monkey Forest Sanctuary',
          location: 'Padangtegal, Ubud',
          description: 'Encounter hundreds of Balinese long-tailed macaques among moss-covered temple guardian statues.',
          highlight: 'Shaded path through the Holy Spring temple ravine.',
          tag: 'Sightseeing'
        },
        evening: {
          time: '06:00 PM',
          title: 'Balinese Herbal Spa & Candlelit Ricefield Dinner',
          location: 'Ubud Centre',
          description: 'Indulge in a 90-minute Balinese oil massage followed by organic dining overlooking lotus ponds.',
          highlight: 'Traditional floral foot bath ritual.',
          tag: 'Relaxation'
        },
        recommendedDish: {
          name: 'Nasi Campur Bali (Mixed Rice Platter)',
          description: 'Fragrant steamed rice served with chicken sate lilit, lawar green beans, and spicy sambal matah.',
          bestSpot: 'Warung Babi Guling Ibu Oka'
        }
      },
      {
        dayNumber: 2,
        theme: 'Sunrise Caldera Trek & Natural Volcanic Hot Springs',
        morning: {
          time: '03:30 AM',
          title: 'Mount Batur Sunrise Summit Trek (1,717m)',
          location: 'Kintamani, Bangli',
          description: 'Hike through volcanic rock beneath stars to watch the golden sun rise above cloud blankets and Lake Batur.',
          highlight: 'Breakfast eggs steam-cooked in natural volcanic earth vents.',
          tag: 'Adventure'
        },
        afternoon: {
          time: '11:00 AM',
          title: 'Toya Devasya Geothermal Hot Springs',
          location: 'Lake Batur, Kintamani',
          description: 'Soak tired muscles in mineral-rich hot springs right at the edge of the crater lake.',
          highlight: 'Infinity pool views directly facing Mount Abang.',
          tag: 'Relaxation'
        },
        evening: {
          time: '06:30 PM',
          title: 'Campuhan Ridge Golden Hour Walk',
          location: 'Ubud Ridge',
          description: 'A tranquil 2km paved ridge trail between two lush river valleys during dramatic sunset skies.',
          highlight: 'Cool breezes and fresh coconut water at Karsa Cafe.',
          tag: 'Nature'
        },
        recommendedDish: {
          name: 'Sate Lilit Ikan (Spiced Minced Fish on Lemongrass Stalks)',
          description: 'Delicately grilled minced mackerel seasoned with turmeric, coconut milk, and chili.',
          bestSpot: 'Warung Mina Ubud'
        }
      }
    ]
  },
  'rajasthan-india': {
    id: 'sample-rajasthan-6d',
    tripTitle: 'Royal Splendor: Forts, Palaces & Sunset Lakes of Rajasthan',
    destination: 'Jaipur & Udaipur',
    country: 'India',
    durationDays: 6,
    budgetCategory: 'moderate',
    companion: 'couple',
    summary: 'An enchanting 6-day journey through the Pink City of Jaipur and the romantic City of Lakes, Udaipur. Experience majestic Amber Fort, sunset cruises on Lake Pichola, royal thali feasts, and Rajput architecture.',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    isSampleData: true,
    createdAt: '2026-10-16',
    estimatedCost: {
      currency: 'USD',
      totalRange: '$480 - $750 (₹40,000 - ₹62,000) per person',
      breakdown: {
        accommodation: '$220 - $380 (Heritage Haveli & 4★ Boutique Hotels)',
        food: '$120 - $180 (Royal Rajasthani Thalis, Street Chaat, Cafes)',
        activities: '$70 - $100 (Amber Fort, City Palace tickets & Lake Pichola boat)',
        transportation: '$70 - $90 (Intercity AC train / private cab + auto rickshaws)',
      }
    },
    weatherAdvice: 'Pleasant daytime temperatures (22°C - 27°C) and cool evenings (13°C - 17°C). Light cottons for daytime and a light jacket or shawl for evenings.',
    packingEssentials: [
      'Comfortable slip-on walking shoes (easy to remove for temple visits)',
      'Polarized sunglasses & wide-brim sun hat',
      'Modest lightweight clothing covering shoulders and knees',
      'Universal power adapter (Type C/D/M) and power bank'
    ],
    travelTips: [
      'Visit Amber Palace early at 8:30 AM to beat the mid-day heat and large tour crowds.',
      'Book the sunset boat cruise on Lake Pichola in advance for golden hour views of Jag Mandir.',
      'Try authentic Dal Baati Churma and sweet Ghewar at heritage eateries in Jaipur Old City.'
    ],
    attractionPins: [
      { name: 'Amber Fort & Palace', category: 'Heritage Fort', lat: 26.9855, lng: 75.8513, rating: 4.7, reviews: 48500 },
      { name: 'Hawa Mahal (Palace of Winds)', category: 'Landmark', lat: 26.9239, lng: 75.8267, rating: 4.6, reviews: 62000 },
      { name: 'City Palace Jaipur', category: 'Palace', lat: 26.9258, lng: 75.8236, rating: 4.5, reviews: 36000 },
      { name: 'Udaipur City Palace', category: 'Palace', lat: 24.5764, lng: 73.6835, rating: 4.8, reviews: 52000 },
      { name: 'Lake Pichola & Jag Mandir', category: 'Scenic Lake', lat: 24.5714, lng: 73.6738, rating: 4.8, reviews: 42000 },
      { name: 'Saheliyon-ki-Bari', category: 'Royal Gardens', lat: 24.6033, lng: 73.6841, rating: 4.5, reviews: 29000 }
    ],
    days: [
      {
        dayNumber: 1,
        theme: 'The Pink City: Royal Architecture & The Palace of Winds',
        morning: {
          time: '09:00 AM',
          title: 'Marvel at Hawa Mahal & Historic Jantar Mantar',
          location: 'Pink City, Jaipur',
          description: 'Admire the 953 honeycombed pink sandstone windows of Hawa Mahal, then explore the UNESCO-listed 18th-century astronomical instruments at Jantar Mantar.',
          highlight: 'Morning sun illuminating the ornate facade from Wind View Cafe.',
          tag: 'Culture'
        },
        afternoon: {
          time: '01:30 PM',
          title: 'City Palace Museum & Peacock Courtyard',
          location: 'Old City, Jaipur',
          description: 'Stroll through courtyards blending Rajput and Mughal architecture, visiting the legendary Pritam Niwas Chowk with its vivid peacock gateway.',
          highlight: 'The giant sterling silver urns (Gangajali) in Diwan-i-Khas.',
          tag: 'Sightseeing'
        },
        evening: {
          time: '06:30 PM',
          title: 'Bazaar Exploration & Dinner Near Jal Mahal',
          location: 'Johari Bazaar & Man Sagar Lake',
          description: 'Wander through vibrant bazaars filled with blue pottery and block-printed textiles, followed by lakeside views of the floating Jal Mahal palace.',
          highlight: 'Illuminated floating palace reflecting across calm evening waters.',
          tag: 'Food'
        },
        recommendedDish: {
          name: 'Rajasthani Dal Baati Churma with Pure Ghee',
          description: 'Crisp baked wheat balls crushed into spiced lentil curry, paired with sweet churma and tangy garlic chutney.',
          bestSpot: 'LMB (Laxmi Mishthan Bhandar), Johari Bazaar'
        }
      },
      {
        dayNumber: 2,
        theme: 'Hilltop Fortresses & Sunset Over the Aravalli Hills',
        morning: {
          time: '08:30 AM',
          title: 'Ascend Amber Fort & The Sheesh Mahal (Mirror Palace)',
          location: 'Amer, Jaipur',
          description: 'Explore the grand hilltop citadel, walking through marble halls with thousands of convex mirrors that glow in candlelight.',
          highlight: 'Panoramic vista over Maota Lake and the defensive Great Wall of Amer.',
          tag: 'Culture'
        },
        afternoon: {
          time: '01:30 PM',
          title: 'Traditional Block Printing Workshop & Jaigarh Fort',
          location: 'Amer Town',
          description: 'Visit an authentic artisan textile atelier, followed by Jaigarh Fort, home to the Jaivana cannon—once the largest cannon on wheels.',
          highlight: 'Hands-on wooden stamp block-printing demonstration.',
          tag: 'Sightseeing'
        },
        evening: {
          time: '06:00 PM',
          title: 'Sunset Panorama from Nahargarh Fort Rooftop',
          location: 'Nahargarh, Aravalli Hills',
          description: 'Perched on the mountain ridge, watch the entire Pink City light up in dusk colors while sipping masala chai.',
          highlight: '360-degree sunset golden hour over Jaipur skyline.',
          tag: 'Adventure'
        },
        recommendedDish: {
          name: 'Royal Rajasthani Laal Maas',
          description: 'Slow-cooked tender lamb in a fiery Mathania red chili gravy seasoned with cloves and cardamom.',
          bestSpot: 'Handi Restaurant, MI Road'
        }
      },
      {
        dayNumber: 3,
        theme: 'Journey to the City of Lakes: Romantic Udaipur',
        morning: {
          time: '09:00 AM',
          title: 'Scenic Travel to Udaipur & Check-in to a Lakeside Haveli',
          location: 'Jaipur -> Udaipur',
          description: 'Arrive in Udaipur, known as the Venice of the East. Settle into a traditional whitewashed heritage haveli with jharokha balconies.',
          highlight: 'First glimpse of Lake Pichola sparkling in the afternoon sun.',
          tag: 'Sightseeing'
        },
        afternoon: {
          time: '02:00 PM',
          title: 'Explore Gangaur Ghat & Jagdish Temple',
          location: 'Old City, Udaipur',
          description: 'Climb the carved stone steps of the 17th-century Jagdish Temple, then stroll through colorful lake ghats filled with painters and folk musicians.',
          highlight: 'Intricately carved stone pillars depicting mythological scenes.',
          tag: 'Culture'
        },
        evening: {
          time: '06:30 PM',
          title: 'Dharohar Cultural Folk Dance & Puppet Show at Bagore Ki Haveli',
          location: 'Gangaur Ghat, Lake Pichola',
          description: 'Experience an energetic live performance of Chari fire dance, Ghoomar, and Rajasthani puppet storytelling in a historic courtyard.',
          highlight: 'The Bhavai dancer balancing 9 brass pots atop her head.',
          tag: 'Culture'
        },
        recommendedDish: {
          name: 'Ker Sangri with Bajre ki Roti & Jaggery',
          description: 'Tangy desert beans and capers cooked in mustard oil, served with hearty pearl millet flatbread and fresh white butter.',
          bestSpot: 'Ambrai Restaurant, overlooking Lake Palace'
        }
      },
      {
        dayNumber: 4,
        theme: 'White Marble Palaces & Golden Hour Lake Cruise',
        morning: {
          time: '09:00 AM',
          title: 'Udaipur City Palace & The Crystal Gallery',
          location: 'City Palace Complex, Udaipur',
          description: 'Wander Rajasthan’s largest palace complex, adorned with colored stained-glass mosaics, silver thrones, and courtyards overlooking the lake.',
          highlight: 'The Mor Chowk courtyard with dazzling glass-inlay peacocks.',
          tag: 'Culture'
        },
        afternoon: {
          time: '01:30 PM',
          title: 'Saheliyon-ki-Bari Royal Fountains & Lotus Pools',
          location: 'Saheli Marg, Udaipur',
          description: 'Relax in peaceful ornamental gardens designed for royal maidens, featuring marble elephant fountains and rain-simulator water pavilions.',
          highlight: 'Natural gravity-fed fountains singing like gentle monsoon rain.',
          tag: 'Nature'
        },
        evening: {
          time: '05:30 PM',
          title: 'Golden Sunset Boat Cruise on Lake Pichola',
          location: 'Rameshwar Ghat -> Jag Mandir Island',
          description: 'Glide past the iconic Taj Lake Palace and step ashore onto Jag Mandir island palace surrounded by stone elephant sentinels as dusk settles.',
          highlight: 'Sipping chilled iced tea on the island marble terrace under golden skies.',
          tag: 'Sightseeing'
        },
        recommendedDish: {
          name: 'Sweet Saffron Ghewar & Pyaaz Kachori',
          description: 'Crispy honeycomb pastry soaked in saffron cardamom syrup, preceded by hot flaky onion-stuffed kachori.',
          bestSpot: 'Jagdish Mishthan Bhandar (JMB), Udaipur'
        }
      }
    ]
  },
  'kerala-india': {
    id: 'sample-kerala-5d',
    tripTitle: 'Kerala Serenity: Backwaters, Tea Hills & Ayurvedic Bliss',
    destination: 'Kerala (Munnar & Alleppey)',
    country: 'India',
    durationDays: 5,
    budgetCategory: 'budget',
    companion: 'couple',
    summary: 'A serene 5-day escape through misty Munnar tea estates, tranquil Alleppey houseboat backwaters, and rejuvenating Ayurvedic retreats in God\'s Own Country.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    isSampleData: true,
    createdAt: '2026-10-16',
    estimatedCost: {
      currency: 'USD',
      totalRange: '$300 - $500 (₹25,000 - ₹42,000) per person',
      breakdown: {
        accommodation: '$130 - $220 (Plantation resort + overnight houseboat)',
        food: '$80 - $130 (Kerala sadhya meals, seafood, coconut curries)',
        activities: '$50 - $80 (Ayurvedic massage, boat cruise, tea estate tour)',
        transportation: '$40 - $70 (AC bus, auto, private cab transfers)',
      }
    },
    weatherAdvice: 'Pleasant cool climate in Munnar (14°C - 24°C). Alleppey is warm and humid (27°C - 32°C). Carry a light rain jacket.',
    packingEssentials: [
      'Light cotton clothing and a rain poncho or jacket',
      'Eco-friendly insect repellent (mosquitoes near backwaters)',
      'Comfortable sandals for houseboat and beach days',
      'Small daypack and reusable water bottle'
    ],
    travelTips: [
      'Book your Alleppey houseboat at least a week in advance during peak season (Oct–Feb).',
      'Try a traditional Kerala sadhya (banana-leaf feast) on a Sunday for the full experience.',
      'The best tea views in Munnar are from Eravikulam National Park at sunrise.'
    ],
    attractionPins: [
      { name: 'Munnar Tea Estates', category: 'Nature', lat: 10.0889, lng: 77.0595, rating: 4.7, reviews: 31000 },
      { name: 'Alleppey Backwaters', category: 'Scenic Waterway', lat: 9.4981, lng: 76.3388, rating: 4.8, reviews: 44000 },
      { name: 'Eravikulam National Park', category: 'Wildlife', lat: 10.1667, lng: 77.0667, rating: 4.6, reviews: 18000 },
      { name: 'Kumarakom Bird Sanctuary', category: 'Nature', lat: 9.6167, lng: 76.4333, rating: 4.5, reviews: 12000 }
    ],
    days: [
      {
        dayNumber: 1,
        theme: 'Arrival in Munnar & Emerald Tea Valleys',
        morning: {
          time: '09:00 AM',
          title: 'Scenic Drive to Munnar Through Cardamom Hills',
          location: 'Kochi → Munnar (130 km)',
          description: 'Wind through misty mountain roads flanked by endless green tea terraces, rubber plantations, and spice gardens filling the air with cardamom and pepper.',
          highlight: 'Cheeyappara Waterfalls viewpoint stop along the way.',
          tag: 'Nature'
        },
        afternoon: {
          time: '01:30 PM',
          title: 'Tea Museum & Estate Walk at KDHP',
          location: 'Munnar Town',
          description: 'Learn the century-old story of tea cultivation from leaf to cup, then stroll through manicured emerald terraces with a plucking demonstration.',
          highlight: 'Free-sampling of freshly brewed estate teas in the museum café.',
          tag: 'Culture'
        },
        evening: {
          time: '05:30 PM',
          title: 'Echo Point & Sunset Over Mattupetty Lake',
          location: 'Mattupetty, Munnar',
          description: 'Watch the sun sink behind the rolling hills while enjoying a paddleboat on the calm reservoir surrounded by lush sholas.',
          highlight: 'Golden reflections of tea terraces in the lake at dusk.',
          tag: 'Sightseeing'
        },
        recommendedDish: {
          name: 'Kerala Puttu & Kadala Curry',
          description: 'Steamed rice flour cylinders with coconut served with spiced black chickpea curry — a beloved Kerala breakfast.',
          bestSpot: 'Rapsy Restaurant, Munnar'
        }
      },
      {
        dayNumber: 2,
        theme: 'Wildlife, Waterfalls & Misty Peaks',
        morning: {
          time: '07:00 AM',
          title: 'Eravikulam National Park & Nilgiri Tahr Spotting',
          location: 'Rajamala, Munnar',
          description: 'Visit the home of the endangered Nilgiri Tahr mountain goat on the highest plains of Kerala, often shrouded in dramatic clouds.',
          highlight: 'Spotting tahr within 5 metres on the misty grassland plateau.',
          tag: 'Nature'
        },
        afternoon: {
          time: '12:30 PM',
          title: 'Attukal Waterfalls & Spice Garden Walk',
          location: 'Attukal, Munnar',
          description: 'Cool off at a cascading waterfall set inside a spice garden, and pick fresh pepper and cardamom pods from the vines.',
          highlight: 'Grinding fresh coffee beans in a traditional stone mill.',
          tag: 'Adventure'
        },
        evening: {
          time: '06:00 PM',
          title: 'Kathakali Performance & Kerala Dinner',
          location: 'Munnar Cultural Centre',
          description: 'Watch a traditional Kathakali dance-drama with elaborate costumes and expressive eye movements, then enjoy a full Kerala meal on banana leaf.',
          highlight: 'Artist applying intricate chukithi face paint — up close.',
          tag: 'Culture'
        },
        recommendedDish: {
          name: 'Karimeen Pollichathu (Pearl Spot Fish)',
          description: 'Fresh pearl spot fish marinated in red chili and turmeric, wrapped in banana leaf and grilled until smoky perfection.',
          bestSpot: 'Saravana Bhavan Munnar'
        }
      },
      {
        dayNumber: 3,
        theme: 'Journey to Alleppey & Houseboat Overnight',
        morning: {
          time: '09:00 AM',
          title: 'Transfer to Alleppey (Alappuzha) Backwaters',
          location: 'Munnar → Alleppey (145 km)',
          description: 'Descend from the hills to the coast through rubber forests and paddy fields, arriving at the Venice of the East.',
          highlight: 'First view of the palm-fringed canal network of the backwaters.',
          tag: 'Sightseeing'
        },
        afternoon: {
          time: '12:00 PM',
          title: 'Board Traditional Kettuvallam Houseboat',
          location: 'Alleppey Boat Jetty',
          description: 'Cruise slowly through narrow canals past fishing villages, coconut groves, and Chinese fishing nets. Enjoy lunch freshly cooked on board by your chef.',
          highlight: 'Watching village life unfold from the front deck with a coconut in hand.',
          tag: 'Relaxation'
        },
        evening: {
          time: '06:00 PM',
          title: 'Sunset on Lake Vembanad & Overnight Stay',
          location: 'Vembanad Lake',
          description: 'Drift across Kerala\'s largest lake as the sky turns crimson and kingfishers dive into the still water. Sleep aboard the houseboat under stars.',
          highlight: 'Watching the reflection of the full moon on the glassy lake at midnight.',
          tag: 'Nature'
        },
        recommendedDish: {
          name: 'Kerala Fish Curry with Red Rice & Papadam',
          description: 'Tangy coconut milk fish curry with raw mango, cooked fresh on the houseboat with morning-market fish.',
          bestSpot: 'On board your houseboat chef'
        }
      }
    ]
  },
  'goa-india': {
    id: 'sample-goa-5d',
    tripTitle: 'Goa Sunshine: Portuguese Villas, Beach Shacks & Spice Farms',
    destination: 'Goa (Beaches & Heritage)',
    country: 'India',
    durationDays: 5,
    budgetCategory: 'budget',
    companion: 'friends',
    summary: 'A vibrant 5-day Goan escape with golden beaches, Portuguese Baroque churches, a spice farm lunch, cashew feni tasting, and legendary beach shack seafood at sunset.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    isSampleData: true,
    createdAt: '2026-10-16',
    estimatedCost: {
      currency: 'USD',
      totalRange: '$250 - $420 (₹21,000 - ₹35,000) per person',
      breakdown: {
        accommodation: '$100 - $180 (Beach hostel dorm or guesthouse)',
        food: '$70 - $120 (Beach shack seafood, local tavernas, fruit stalls)',
        activities: '$40 - $70 (Scooter rental, water sports, spice farm, cruises)',
        transportation: '$40 - $50 (Scooter hire + local buses)',
      }
    },
    weatherAdvice: 'Warm and sunny (27°C - 33°C) Nov–Feb. Avoid monsoon season (June–September) for beach activities.',
    packingEssentials: [
      'Reef-safe sunscreen SPF 50+ and aloe vera gel',
      'Swimwear, beach cover-up, and flip-flops',
      'International driving permit if renting a scooter',
      'Light linen clothes for church visits and Old Goa'
    ],
    travelTips: [
      'Rent a scooter for ₹300-400/day — the best way to explore Goa at your own pace.',
      'North Goa beaches (Anjuna, Arambol) are lively and social; South Goa (Palolem) is peaceful and clean.',
      'Try Goan feni (cashew or coconut spirit) responsibly — it\'s a local cultural icon.'
    ],
    attractionPins: [
      { name: 'Basilica of Bom Jesus', category: 'Heritage Church', lat: 15.5009, lng: 73.9116, rating: 4.7, reviews: 39000 },
      { name: 'Palolem Beach', category: 'Beach', lat: 15.0100, lng: 74.0233, rating: 4.8, reviews: 28000 },
      { name: 'Dudhsagar Waterfalls', category: 'Waterfall', lat: 15.3139, lng: 74.3142, rating: 4.7, reviews: 22000 },
      { name: 'Anjuna Flea Market', category: 'Market', lat: 15.5734, lng: 73.7476, rating: 4.4, reviews: 15000 }
    ],
    days: [
      {
        dayNumber: 1,
        theme: 'North Goa Beaches & Vibrant Anjuna Market',
        morning: {
          time: '09:30 AM',
          title: 'Baga & Calangute Beach Morning Stroll',
          location: 'North Goa Coastline',
          description: 'Walk along the golden sands as fishing boats return with the morning catch. Watch local fishermen mend their nets and bargain for fresh prawns.',
          highlight: 'Fresh-grilled masala prawns straight from the morning boat at Fiesta shack.',
          tag: 'Beaches'
        },
        afternoon: {
          time: '12:30 PM',
          title: 'Anjuna Psychedelic Flea Market',
          location: 'Anjuna Beach',
          description: 'Browse hundreds of stalls selling Tibetan jewelry, antique coconut carvings, hammocks, and boho clothing under shady casuarina trees.',
          highlight: 'Haggling for a hand-stitched mandala wall hanging with chai in hand.',
          tag: 'Shopping'
        },
        evening: {
          time: '06:00 PM',
          title: 'Sunset at Vagator Beach & Hilltop Chapora Fort',
          location: 'Vagator & Chapora',
          description: 'Climb the red laterite ruins of Chapora Fort and watch the sun dip into the Arabian Sea.',
          highlight: 'Golden light painting the entire Vagator beach cove from the fort walls.',
          tag: 'Sightseeing'
        },
        recommendedDish: {
          name: 'Goan Fish Thali',
          description: 'A generous platter of fried kingfish, tangy prawn curry, sol kadhi, rice, and papadam — the complete Goan comfort meal.',
          bestSpot: 'Ritz Classic, Panaji'
        }
      },
      {
        dayNumber: 2,
        theme: 'Old Goa Heritage & Spice Farm Lunch',
        morning: {
          time: '09:00 AM',
          title: 'UNESCO Basilica of Bom Jesus & Se Cathedral',
          location: 'Old Goa (Velha Goa)',
          description: 'Explore the baroque splendor of Old Goa\'s 16th-century Portuguese churches, including the tomb of St. Francis Xavier and Asia\'s largest church bell.',
          highlight: 'The gilded baroque altar of Bom Jesus — gold leaf from floor to ceiling.',
          tag: 'Culture'
        },
        afternoon: {
          time: '12:30 PM',
          title: 'Savoi Plantation Spice Farm Lunch Tour',
          location: 'Ponda, Central Goa',
          description: 'Walk through vanilla, cardamom, nutmeg, and pepper vines on a family-run spice estate, followed by a traditional Goan buffet lunch on banana leaves.',
          highlight: 'Plucking and biting into a fresh cardamom pod.',
          tag: 'Culinary'
        },
        evening: {
          time: '06:00 PM',
          title: 'Panjim Latin Quarter Walk & Colourful Heritage Houses',
          location: 'Fontainhas, Panaji',
          description: 'Wander through narrow lanes of brightly painted Portuguese villas with terracotta roofs, iron grilles, and Madonna niches at every corner.',
          highlight: 'Sipping bebinca (layered Goan cake) at a century-old bakery.',
          tag: 'Sightseeing'
        },
        recommendedDish: {
          name: 'Chicken Cafreal & Pork Sorpotel',
          description: 'Piri-piri marinated green chicken and tangy pork offal curry — the twin crown jewels of Goan cuisine.',
          bestSpot: 'Hotel Venite, Panaji'
        }
      },
      {
        dayNumber: 3,
        theme: 'Dudhsagar Waterfall Trek & South Goa Beaches',
        morning: {
          time: '07:30 AM',
          title: 'Dudhsagar Falls Jeep Safari',
          location: 'Mollem National Park',
          description: 'Bounce through the Western Ghats jungle in a 4WD jeep to reach India\'s tallest tiered waterfall, plunging 310 metres into a milky-white pool.',
          highlight: 'Swimming in the natural plunge pool directly under the falls.',
          tag: 'Adventure'
        },
        afternoon: {
          time: '02:00 PM',
          title: 'Palolem Crescent Beach Hammock Afternoon',
          location: 'South Goa',
          description: 'Relax on one of India\'s most photographed beaches — a perfect crescent bay with calm turquoise waters and sea-kayaking.',
          highlight: 'Dolphin-spotting boat trip departing from Palolem at 3 PM.',
          tag: 'Beaches'
        },
        evening: {
          time: '07:00 PM',
          title: 'Silent Disco Beach Party',
          location: 'Palolem Beach',
          description: 'Experience Palolem\'s unique silent disco — headphones on, stars above, and sand between your toes with three music channels to choose from.',
          highlight: 'Everyone suddenly singing the same song without knowing it.',
          tag: 'Nightlife'
        },
        recommendedDish: {
          name: 'Tiger Prawn Butter Garlic Masala',
          description: 'Jumbo tiger prawns tossed in butter, garlic, and Goan masala spices, best enjoyed beach-side at sunset.',
          bestSpot: 'Magic Italy Restaurant, Palolem'
        }
      }
    ]
  },
  'varanasi-india': {
    id: 'sample-varanasi-4d',
    tripTitle: 'Varanasi & Sarnath: The Eternal City of Light',
    destination: 'Varanasi & Sarnath',
    country: 'India',
    durationDays: 4,
    budgetCategory: 'budget',
    companion: 'solo',
    summary: 'A profound 4-day spiritual journey through the world\'s oldest living city — witnessing the sacred Ganga Aarti at dusk, pre-dawn boat rides on the Ganges, ancient silk weaving workshops, and the serene deer park of Sarnath.',
    heroImage: 'https://images.unsplash.com/photo-1561361058-c24e020b9e4b?auto=format&fit=crop&w=1200&q=80',
    isSampleData: true,
    createdAt: '2026-10-16',
    estimatedCost: {
      currency: 'USD',
      totalRange: '$150 - $280 (₹13,000 - ₹23,000) per person',
      breakdown: {
        accommodation: '$60 - $120 (Ghat-view heritage guesthouse)',
        food: '$40 - $70 (Thandai, kachori sabzi, banarasi paan, lassi)',
        activities: '$25 - $50 (Boat rides, aarti viewing, Sarnath Museum)',
        transportation: '$25 - $40 (Auto-rickshaws, cycle rickshaws, e-boats)',
      }
    },
    weatherAdvice: 'October–March is ideal: 18°C - 28°C. Fog may occur in December–January. Monsoon (July–Sep) brings dramatic Ganges flooding.',
    packingEssentials: [
      'Modest conservative clothing (avoid revealing attire at ghats and temples)',
      'Comfortable walking shoes for uneven ghat steps',
      'Small bag for shoes (remove before temples)',
      'Mosquito repellent for evening ghat walks'
    ],
    travelTips: [
      'Arrive at Dashashwamedh Ghat 30 minutes before sunset to get a good seated viewing spot for the Ganga Aarti.',
      'Pre-dawn boat rides (5:00 AM) offer the most atmospheric Ganges experience with fog and morning rituals.',
      'Varanasi silk is among the finest in the world — buy directly from weaver families in Madanpura.'
    ],
    attractionPins: [
      { name: 'Dashashwamedh Ghat', category: 'Sacred Ghat', lat: 25.3062, lng: 83.0107, rating: 4.8, reviews: 55000 },
      { name: 'Manikarnika Burning Ghat', category: 'Sacred Ghat', lat: 25.3095, lng: 83.0097, rating: 4.5, reviews: 31000 },
      { name: 'Kashi Vishwanath Temple', category: 'Temple', lat: 25.3108, lng: 83.0106, rating: 4.7, reviews: 62000 },
      { name: 'Sarnath Dhamek Stupa', category: 'Buddhist Heritage', lat: 25.3817, lng: 83.0246, rating: 4.7, reviews: 24000 }
    ],
    days: [
      {
        dayNumber: 1,
        theme: 'Arrival & The Grand Ganga Aarti at Dusk',
        morning: {
          time: '10:00 AM',
          title: 'Ghat Walk: From Assi to Dashashwamedh',
          location: 'Assi Ghat, Varanasi',
          description: 'Begin the sacred 2 km ghat walk from Assi — watching pilgrims bathe, yoga practitioners on the steps, and dhobis washing river laundry.',
          highlight: 'The view of 88 ghats curving along the ancient Ganges crescent.',
          tag: 'Sightseeing'
        },
        afternoon: {
          time: '01:30 PM',
          title: 'Kashi Vishwanath Temple & Ancient Lanes',
          location: 'Vishwanath Gali, Varanasi',
          description: 'Navigate the narrow labyrinthine lanes of the old city to reach the golden-spired Jyotirlinga temple, one of the 12 most sacred Shiva shrines in India.',
          highlight: 'The buzzing flower, bead, and incense market inside the inner gali.',
          tag: 'Culture'
        },
        evening: {
          time: '07:00 PM',
          title: 'Ganga Aarti Ceremony at Dashashwamedh Ghat',
          location: 'Dashashwamedh Ghat',
          description: 'Watch 11 priests simultaneously perform the hypnotic fire ritual with multi-tiered brass lamps, flower offerings, and conch shells against a mist of incense.',
          highlight: 'The synchronized spinning fire lamps reflecting on the Ganges surface.',
          tag: 'Culture'
        },
        recommendedDish: {
          name: 'Banarasi Kachori Sabzi & Thandai',
          description: 'Crispy deep-fried lentil kachori with spiced potato-tomato sabzi, followed by chilled thandai (rose-almond milk).',
          bestSpot: 'Deena Chaat Bhandar, Godowlia Crossing'
        }
      },
      {
        dayNumber: 2,
        theme: 'Pre-Dawn River Boat & Sarnath Buddhist Heritage',
        morning: {
          time: '05:00 AM',
          title: 'Pre-Dawn Rowing Boat on the Sacred Ganges',
          location: 'Main Ghat, Varanasi',
          description: 'Float silently along the holy river as dawn breaks: watch priests perform morning rituals, see smoke rising from Manikarnika, and witness hundreds of pilgrims in spiritual immersion.',
          highlight: 'The moment the first golden sunray hits the ghats through morning mist.',
          tag: 'Sightseeing'
        },
        afternoon: {
          time: '12:00 PM',
          title: 'Sarnath: Where Buddha Gave His First Sermon',
          location: 'Sarnath, 10 km from Varanasi',
          description: 'Visit the Dhamek Stupa (500 CE), the deer park where the Buddha taught his first disciples, and the Sarnath Museum housing the original Ashoka Lion Capital.',
          highlight: 'Standing in the exact spot where Buddhism was born 2,500 years ago.',
          tag: 'Culture'
        },
        evening: {
          time: '06:00 PM',
          title: 'Banarasi Silk Weaving Family Workshop',
          location: 'Madanpura, Varanasi',
          description: 'Visit a generational Muslim weaving family and watch the intricate process of creating zari-woven Banarasi silk sarees on handlooms.',
          highlight: 'Touching a saree that took 3 months to weave by hand.',
          tag: 'Culture'
        },
        recommendedDish: {
          name: 'Banarasi Paan & Malaiyo',
          description: 'Silky saffron-dusted Malaiyo (whipped milk foam dessert) followed by a freshly rolled meetha paan.',
          bestSpot: 'Blue Lassi Shop, Kachori Gali'
        }
      }
    ]
  },
  'agra-india': {
    id: 'sample-agra-3d',
    tripTitle: 'Agra & Fatehpur Sikri: Taj at Sunrise & Mughal Majesty',
    destination: 'Agra & Fatehpur Sikri',
    country: 'India',
    durationDays: 3,
    budgetCategory: 'budget',
    companion: 'couple',
    summary: 'A breathtaking 3-day immersion into Mughal grandeur — a sunrise Taj Mahal, the blood-red Agra Fort, ghost-city of Fatehpur Sikri, and legendary Mughlai dastarkhwan feasting.',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    isSampleData: true,
    createdAt: '2026-10-16',
    estimatedCost: {
      currency: 'USD',
      totalRange: '$150 - $260 (₹12,500 - ₹21,500) per person',
      breakdown: {
        accommodation: '$60 - $110 (Taj-view hotel or boutique heritage inn)',
        food: '$35 - $65 (Mughlai biryani, kebabs, sweets, rooftop restaurants)',
        activities: '$30 - $55 (Taj Mahal, Agra Fort, Fatehpur Sikri tickets)',
        transportation: '$25 - $30 (Autorickshaw, e-rickshaw, cab to Fatehpur)',
      }
    },
    weatherAdvice: 'October–February is ideal: 10°C - 26°C. Avoid May–June (extreme 40°C+ heat). Fog in December–January can affect travel.',
    packingEssentials: [
      'Slip-on shoes (mandatory to remove at Taj Mahal entrance)',
      'Light cottons and a shawl for cool evenings',
      'Sunglasses and cap (marble reflects harsh UV at the Taj)',
      'DSLR or phone with a wide-angle lens for Taj photography'
    ],
    travelTips: [
      'Enter the Taj Mahal from the East or West gate to avoid longer queues at the South Gate.',
      'The Taj at sunrise (6:00–7:30 AM) is magical — golden mist, few tourists, and perfect light.',
      'Book the Mehtab Bagh sunset view (across the river) for the best Taj photography angle.'
    ],
    attractionPins: [
      { name: 'Taj Mahal', category: 'UNESCO Wonder', lat: 27.1751, lng: 78.0421, rating: 4.9, reviews: 187000 },
      { name: 'Agra Fort (Lal Qila)', category: 'Heritage Fort', lat: 27.1800, lng: 78.0219, rating: 4.6, reviews: 68000 },
      { name: 'Fatehpur Sikri', category: 'UNESCO Site', lat: 27.0945, lng: 77.6619, rating: 4.5, reviews: 42000 },
      { name: 'Mehtab Bagh Gardens', category: 'Garden', lat: 27.1797, lng: 78.0396, rating: 4.6, reviews: 28000 }
    ],
    days: [
      {
        dayNumber: 1,
        theme: 'Taj Mahal at Sunrise & Agra Fort Grandeur',
        morning: {
          time: '05:45 AM',
          title: 'Taj Mahal Sunrise: The Wonder of the World',
          location: 'Taj Mahal, Agra',
          description: 'Enter the Taj complex as the first amber light illuminates the white marble dome. Watch the stone shift from pink to gold to brilliant white over 90 magical minutes.',
          highlight: 'Sitting at the Diana bench with the Taj perfectly framed in the reflecting pool.',
          tag: 'Sightseeing'
        },
        afternoon: {
          time: '01:00 PM',
          title: 'Agra Fort: Red Sandstone Citadel of the Mughals',
          location: 'Agra Fort, Yamuna Riverside',
          description: 'Explore the massive Mughal fortress where Emperor Shah Jahan spent his final years imprisoned, with a distant view of the Taj Mahal from the Musamman Burj tower.',
          highlight: 'Seeing the Taj from Shah Jahan\'s prison window — the view he had for 8 years.',
          tag: 'Culture'
        },
        evening: {
          time: '06:00 PM',
          title: 'Mehtab Bagh Sunset View Across the Yamuna',
          location: 'Mehtab Bagh, Opposite Taj',
          description: 'Watch the Taj Mahal turn rose-gold at sunset from the Mughal Moonlit Garden directly across the Yamuna River — the best photography angle.',
          highlight: 'The Taj\'s shadow stretching across the river in the final rays of light.',
          tag: 'Photography'
        },
        recommendedDish: {
          name: 'Mughlai Dum Biryani & Galauti Kebab',
          description: 'Slow-cooked saffron rice with whole spices and tender mutton, paired with melt-on-the-tongue minced lamb kebabs from a charcoal sigri.',
          bestSpot: 'Pind Balluchi, Sadar Bazaar Agra'
        }
      },
      {
        dayNumber: 2,
        theme: 'Ghost City of Fatehpur Sikri & Marble Inlay Crafts',
        morning: {
          time: '09:00 AM',
          title: 'Fatehpur Sikri: Akbar\'s Abandoned Red Capital',
          location: 'Fatehpur Sikri, 40 km from Agra',
          description: 'Explore the perfectly preserved yet entirely deserted Mughal capital abandoned after only 14 years — with the Hall of Private Audience and imposing Buland Darwaza.',
          highlight: 'The Buland Darwaza gateway — at 54 metres, the tallest in Asia.',
          tag: 'Culture'
        },
        afternoon: {
          time: '01:30 PM',
          title: 'Taj Mahal Marble Pietra Dura Workshop',
          location: 'Tajganj Craft Quarter, Agra',
          description: 'Watch master craftsmen inlay precious semi-precious stones into white marble in the same technique used on the Taj itself.',
          highlight: 'Trying your hand at a simple flower petal inlay under the craftsman\'s guidance.',
          tag: 'Culture'
        },
        evening: {
          time: '06:30 PM',
          title: 'Sadar Bazaar Street Food Walk',
          location: 'Sadar Bazaar, Agra',
          description: 'Explore Agra\'s beloved street food market — petha (crystallized ash gourd candy), bedai puri, and jalebi still sizzling in the kadai.',
          highlight: 'Watching a halwai make giant round jalebis with one fluid wrist motion.',
          tag: 'Food'
        },
        recommendedDish: {
          name: 'Agra Petha & Bedai with Sabzi',
          description: 'Agra\'s famous crystallized ash-gourd sweet in saffron, rose, and kesar varieties, followed by crispy puffed bedai puris with spiced potato filling.',
          bestSpot: 'Panchhi Petha, Moti Katra'
        }
      }
    ]
  },
  'himachal-india': {
    id: 'sample-himachal-7d',
    tripTitle: 'Manali & Spiti Valley: Himalayan Passes, Monasteries & Snow',
    destination: 'Manali & Spiti Valley',
    country: 'India',
    durationDays: 7,
    budgetCategory: 'budget',
    companion: 'friends',
    summary: 'An epic 7-day high-altitude adventure — crossing the Rohtang Pass, reaching the moonscape desert valley of Spiti, sleeping in remote Buddhist monasteries, and encountering snow leopard territory at 4,500 metres.',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    isSampleData: true,
    createdAt: '2026-10-16',
    estimatedCost: {
      currency: 'USD',
      totalRange: '$200 - $380 (₹17,000 - ₹32,000) per person',
      breakdown: {
        accommodation: '$70 - $130 (Guesthouses, monastery stays, camping)',
        food: '$50 - $90 (Thenthuk, momos, dal-rice, local dhabas)',
        activities: '$50 - $100 (Rohtang permits, rafting, bike hire, jeep safaris)',
        transportation: '$30 - $60 (Shared cabs, local bus, Spiti jeep circuits)',
      }
    },
    weatherAdvice: 'Best May–October. June–September best for Spiti. Always carry warm layers — temperatures drop to 5°C at night even in summer at altitude.',
    packingEssentials: [
      'Thermal base layers, fleece jacket, and a heavy down puffer jacket',
      'Altitude sickness medication (Diamox) — consult a doctor before departure',
      'Waterproof trekking boots and UV-protection sunglasses',
      'Portable oxygen canister and high-SPF sunscreen (50+)'
    ],
    travelTips: [
      'Acclimatize in Manali for 1-2 days before heading to higher altitudes of Spiti.',
      'Rohtang Pass requires a government permit booked online at least 24 hours in advance.',
      'Carry enough cash — ATMs are extremely scarce beyond Kaza in Spiti Valley.'
    ],
    attractionPins: [
      { name: 'Rohtang Pass (3,978m)', category: 'Mountain Pass', lat: 32.3720, lng: 77.2412, rating: 4.7, reviews: 28000 },
      { name: 'Key Monastery (Ki Gompa)', category: 'Monastery', lat: 32.3006, lng: 78.0118, rating: 4.8, reviews: 11000 },
      { name: 'Chandratal Lake', category: 'Alpine Lake', lat: 32.4833, lng: 77.6167, rating: 4.9, reviews: 14000 },
      { name: 'Hadimba Devi Temple', category: 'Temple', lat: 32.2396, lng: 77.1738, rating: 4.5, reviews: 35000 }
    ],
    days: [
      {
        dayNumber: 1,
        theme: 'Arrival in Manali & Old Town Exploration',
        morning: {
          time: '10:00 AM',
          title: 'Hadimba Devi Temple & Dhungri Forest',
          location: 'Old Manali',
          description: 'Visit the ancient cedar-wood pagoda temple of the forest goddess Hadimba set in a stunning deodar forest carpeted with ferns and wildflowers.',
          highlight: 'The intricately carved 4-storey pagoda roof against a backdrop of white peaks.',
          tag: 'Culture'
        },
        afternoon: {
          time: '01:00 PM',
          title: 'Old Manali Cafe Street & Himalayan Arts',
          location: 'Old Manali Village',
          description: 'Explore bohemian cafes, silver jewelry shops, and Tibetan thangka painting galleries on the hippie streets of old Manali.',
          highlight: 'Fresh-baked apple pie and chai with a Beas River valley view.',
          tag: 'Sightseeing'
        },
        evening: {
          time: '05:30 PM',
          title: 'Beas River Rafting & Riverside Bonfire',
          location: 'Beas River, Pirdi',
          description: 'Navigate Grade II–III rapids on the icy Beas River as the valley walls tower above, ending with a bonfire dinner on the riverbank.',
          highlight: 'The Solang Valley snowfields visible from the river.',
          tag: 'Adventure'
        },
        recommendedDish: {
          name: 'Siddu (Himachali Stuffed Steamed Bread)',
          description: 'Slow-fermented wheat dumplings stuffed with poppy seed paste and served with green peas or ghee-laden dal.',
          bestSpot: 'Drifters Inn, Old Manali'
        }
      },
      {
        dayNumber: 2,
        theme: 'Rohtang Pass: Above the Clouds at 3,978 Metres',
        morning: {
          time: '06:00 AM',
          title: 'Rohtang Pass Summit Drive',
          location: 'Manali → Rohtang La (51 km)',
          description: 'Ascend hairpin bends through cloud forests and glacial moraines to reach one of India\'s most dramatic high-altitude passes with year-round snow.',
          highlight: 'First sight of the vast Lahaul Valley opening below the pass — a truly alien landscape.',
          tag: 'Adventure'
        },
        afternoon: {
          time: '12:00 PM',
          title: 'Snow Activities & Beas Kund Glacier',
          location: 'Rohtang Pass Snow Fields',
          description: 'Play in the snow, try a snow scooter ride, and walk toward the glacial source of the Beas River with panoramic Himalayan peak views.',
          highlight: 'Throwing snowballs at 3,978 metres while the valley is green below.',
          tag: 'Adventure'
        },
        evening: {
          time: '05:30 PM',
          title: 'Solang Valley Cable Car & Paragliding',
          location: 'Solang Valley',
          description: 'Take the gondola cable car for sweeping valley views, or try a tandem paragliding flight over the snow-streaked meadows.',
          highlight: 'The adrenaline of banking over the valley with Manali visible far below.',
          tag: 'Adventure'
        },
        recommendedDish: {
          name: 'Thenthuk (Tibetan Hand-Pulled Noodle Soup)',
          description: 'Hand-pulled wheat noodles in a hearty ginger-yak broth with fresh vegetables — perfect warmth after a cold mountain day.',
          bestSpot: 'Johnson\'s Cafe, Manali'
        }
      },
      {
        dayNumber: 3,
        theme: 'Journey into Spiti Valley: The Middle Land',
        morning: {
          time: '07:00 AM',
          title: 'Drive Over Kunzum Pass to Spiti (160 km)',
          location: 'Manali → Kaza, Spiti Valley',
          description: 'The world\'s most dramatic road trip — crossing two high-altitude passes and entering the stark brown moonscape of Spiti Valley.',
          highlight: 'Seeing the abrupt transition from green Kullu valley to the barren Spiti desert.',
          tag: 'Sightseeing'
        },
        afternoon: {
          time: '03:00 PM',
          title: 'Kaza Town & Spiti River Walk',
          location: 'Kaza, Spiti Valley',
          description: 'Explore the remote district headquarters of Spiti: a small bustling Tibetan-influenced bazaar at 3,800 metres elevation.',
          highlight: 'First glimpse of Key Monastery perched on its dramatic cliff.',
          tag: 'Culture'
        },
        evening: {
          time: '06:00 PM',
          title: 'Homestay Stay & Stargazing in Zero Light Pollution',
          location: 'Kaza Homestay',
          description: 'Stay with a local Spitian family for a traditional meal. After dinner, lie on the roof and witness one of India\'s most spectacular Milky Way skies.',
          highlight: 'Counting shooting stars while wrapped in a yak wool blanket.',
          tag: 'Relaxation'
        },
        recommendedDish: {
          name: 'Skyu (Spiti Root Vegetable Stew)',
          description: 'Hearty traditional Spitian stew with hand-rolled pasta pieces, turnips, and yak butter — staple warming fuel at altitude.',
          bestSpot: 'Your homestay family kitchen'
        }
      }
    ]
  },
  'mumbai-india': {
    id: 'sample-mumbai-4d',
    tripTitle: 'Mumbai & Elephanta: Gateway City, Bollywood & Street Food',
    destination: 'Mumbai & Elephanta Caves',
    country: 'India',
    durationDays: 4,
    budgetCategory: 'moderate',
    companion: 'friends',
    summary: 'A vibrant 4-day Mumbai experience — the colonial grandeur of Gateway of India, UNESCO Elephanta Caves by ferry, legendary Vada Pav at CST, and a real Bollywood film studio tour.',
    heroImage: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1200&q=80',
    isSampleData: true,
    createdAt: '2026-10-16',
    estimatedCost: {
      currency: 'USD',
      totalRange: '$280 - $480 (₹23,000 - ₹40,000) per person',
      breakdown: {
        accommodation: '$120 - $220 (Boutique hotel in Colaba or Bandra)',
        food: '$80 - $140 (Street food, Irani cafes, coastal seafood, rooftop bars)',
        activities: '$40 - $70 (Elephanta ferry, studio tour, heritage walk, nightlife)',
        transportation: '$40 - $50 (Local train, auto, Uber, ferry)',
      }
    },
    weatherAdvice: 'November–February is ideal: 20°C - 32°C. Avoid June–September (intense monsoon).',
    packingEssentials: [
      'Smart-casual clothing (Mumbai has dress codes at high-end restaurants and clubs)',
      'Comfortable walking shoes for extensive street exploration',
      'Travel card for local trains (most cost-effective transport)',
      'Power bank — long days out in the city drain battery fast'
    ],
    travelTips: [
      'Take the Central or Western Railway local train for the authentic Mumbai "spirit" — and it\'s incredibly cheap.',
      'The Elephanta ferry from Gateway of India departs every hour from 9 AM; buy return tickets at the jetty.',
      'For the best vada pav, go to Anand Stall outside CST Station — legendary since 1965.'
    ],
    attractionPins: [
      { name: 'Gateway of India', category: 'Landmark', lat: 18.9220, lng: 72.8347, rating: 4.6, reviews: 89000 },
      { name: 'Elephanta Caves', category: 'UNESCO Heritage', lat: 18.9633, lng: 72.9315, rating: 4.5, reviews: 35000 },
      { name: 'Chhatrapati Shivaji Terminus', category: 'Heritage Railway', lat: 18.9398, lng: 72.8355, rating: 4.7, reviews: 61000 },
      { name: 'Bandra-Worli Sea Link', category: 'Landmark', lat: 18.9983, lng: 72.8151, rating: 4.7, reviews: 42000 }
    ],
    days: [
      {
        dayNumber: 1,
        theme: 'Colonial Colaba & the Gateway of India',
        morning: {
          time: '09:00 AM',
          title: 'Gateway of India & Taj Mahal Palace Hotel Walk',
          location: 'Colaba, South Mumbai',
          description: 'Stand beneath the great Basalt arch where King George V once landed, watching fishing boats and ferries pass against the backdrop of the iconic Taj Hotel.',
          highlight: 'Morning chai from a street cart directly facing the Gateway with the harbor breeze.',
          tag: 'Sightseeing'
        },
        afternoon: {
          time: '01:00 PM',
          title: 'Colaba Causeway Market & Sassoon Dock',
          location: 'Colaba, Mumbai',
          description: 'Browse stalls of antique silverware, Bollywood posters, leather bags, and beachwear on the vibrant Causeway.',
          highlight: 'Finding a vintage Bollywood film poster print for under ₹200.',
          tag: 'Shopping'
        },
        evening: {
          time: '06:30 PM',
          title: 'Marine Drive (Queen\'s Necklace) Sunset Walk',
          location: '3.6 km Coastal Promenade, Mumbai',
          description: 'Stroll the iconic curved Art Deco promenade at golden hour, watching waves crash against the sea wall as the city lights begin to twinkle.',
          highlight: 'The city\'s full necklace of lights appearing as darkness falls.',
          tag: 'Sightseeing'
        },
        recommendedDish: {
          name: 'Vada Pav & Mumbai Cutting Chai',
          description: 'Mumbai\'s soul food — spiced potato dumpling in a bun with green chutney and garlic powder, paired with half-glass strong milky cutting tea.',
          bestSpot: 'Anand Stall, CST Station Exit'
        }
      },
      {
        dayNumber: 2,
        theme: 'Elephanta Caves & Chhatrapati Shivaji Terminus',
        morning: {
          time: '09:00 AM',
          title: 'Ferry to Elephanta Island & Cave Sculptures',
          location: 'Gateway of India → Elephanta Island',
          description: 'Sail 10 km into the harbour to discover UNESCO-listed rock-cut caves featuring a 6-metre trimurti (three-faced Shiva) carved in 450 CE.',
          highlight: 'The Maheshmurti — Shiva\'s three faces representing creation, preservation, and destruction.',
          tag: 'Culture'
        },
        afternoon: {
          time: '01:30 PM',
          title: 'CST Victorian Gothic Railway Terminus',
          location: 'Chhatrapati Shivaji Maharaj Terminus',
          description: 'Explore the UNESCO-listed Victorian Gothic railway terminus — a dramatic blend of Indian architectural elements with European Gothic stonework and gargoyles.',
          highlight: 'Standing at the main hall as millions of daily commuters flow around you.',
          tag: 'Sightseeing'
        },
        evening: {
          time: '06:00 PM',
          title: 'Crawford Market & Mohammed Ali Road Street Food',
          location: 'Crawford Market, South Mumbai',
          description: 'Explore the Norman-style covered market and then walk to Mohammed Ali Road for Mughlai specialties — kebabs, nihari, and seviyan kheer in atmospheric evening bustle.',
          highlight: 'The entire street lit up by festive bulbs, packed with diners at shared plastic tables.',
          tag: 'Food'
        },
        recommendedDish: {
          name: 'Bombay Duck Fry & Sol Kadhi',
          description: 'Crispy fried Bombay duck fish paired with pink kokum-coconut digestive drink — a true coastal Mumbai classic.',
          bestSpot: 'Mahesh Lunch Home, Fort'
        }
      },
      {
        dayNumber: 3,
        theme: 'Bollywood Studio Tour & Bandra Cool Scene',
        morning: {
          time: '10:00 AM',
          title: 'Film City (Goregaon) Bollywood Studio Tour',
          location: 'Film City, Goregaon',
          description: 'Walk through 520 acres of live film sets, prop warehouses, and dubbing studios where India\'s massive film industry comes to life daily.',
          highlight: 'Accidentally walking through a live soap opera outdoor set.',
          tag: 'Culture'
        },
        afternoon: {
          time: '02:30 PM',
          title: 'Bandra Bandstand, Reclamation & Street Art',
          location: 'Bandra West, Mumbai',
          description: 'Explore the seafront promenade below Shah Rukh Khan\'s Mannat mansion, Bandra Fort ruins, and colourful street murals covering entire building facades.',
          highlight: 'Finding the SRK fan graffiti wall outside Mannat.',
          tag: 'Sightseeing'
        },
        evening: {
          time: '07:00 PM',
          title: 'Bandra-Worli Sea Link Drive & Rooftop Bar',
          location: 'Worli, Mumbai',
          description: 'Drive across the 8-lane cable-stayed Sea Link as city lights shimmer on the bay, then head to a Worli rooftop bar for craft cocktails with skyline views.',
          highlight: 'The Sea Link at night lit in white — a perfect skyline moment.',
          tag: 'Nightlife'
        },
        recommendedDish: {
          name: 'Pav Bhaji & Mango Mastani',
          description: 'Mumbai\'s beloved butter-soaked vegetable mash on soft Ladi pav bun, followed by a thick mango mastani milkshake topped with ice cream.',
          bestSpot: 'Sardar Pav Bhaji, Tardeo'
        }
      }
    ]
  }
};
