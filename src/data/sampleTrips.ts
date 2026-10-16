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
  }
};
