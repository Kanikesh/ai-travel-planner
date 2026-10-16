import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { TripFormData, Itinerary, BudgetCategory, CompanionType, DayActivity } from '@/types/trip';

const ALLOWED_TAGS: DayActivity['tag'][] = [
  'Sightseeing',
  'Food',
  'Culture',
  'Nature',
  'Adventure',
  'Relaxation',
  'Nightlife',
];

const DEFAULT_HERO_IMAGES: Record<string, string> = {
  default: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
  india: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
  jaipur: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
  rajasthan: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
  udaipur: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80',
  kerala: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
  goa: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
  japan: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
  bali: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
  paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
  italy: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
  swiss: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
  usa: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
};

function resolveHeroImage(destination: string, returnedImage?: string): string {
  if (returnedImage && returnedImage.startsWith('https://images.unsplash.com')) {
    return returnedImage;
  }
  const destLower = destination.toLowerCase();
  for (const [key, url] of Object.entries(DEFAULT_HERO_IMAGES)) {
    if (key !== 'default' && destLower.includes(key)) {
      return url;
    }
  }
  return DEFAULT_HERO_IMAGES.default;
}

function normalizeTag(tag: string): DayActivity['tag'] {
  const match = ALLOWED_TAGS.find((t) => t.toLowerCase() === tag?.trim().toLowerCase());
  return match || 'Sightseeing';
}

export async function POST(request: NextRequest) {
  try {
    // 1. Read secrets exclusively on the server
    const apiKey = process.env.OPENAI_API_KEY?.trim();
    const model = process.env.OPENAI_MODEL?.trim() || 'gpt-4o-mini';

    if (!apiKey || apiKey === '' || apiKey === 'sk-...' || apiKey.startsWith('your_')) {
      return NextResponse.json(
        {
          error:
            'OpenAI API key is missing or not configured. Please add your OPENAI_API_KEY to .env.local to enable real AI trip generation.',
        },
        { status: 400 }
      );
    }

    // 2. Validate incoming request body
    let body: TripFormData;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON request body.' }, { status: 400 });
    }

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Request body must be an object.' }, { status: 400 });
    }

    const destination = typeof body.destination === 'string' ? body.destination.trim() : '';
    if (!destination) {
      return NextResponse.json({ error: 'Destination is required.' }, { status: 400 });
    }

    const durationDays = Number(body.durationDays);
    if (!durationDays || durationDays < 1 || durationDays > 14) {
      return NextResponse.json(
        { error: 'Trip duration must be between 1 and 14 days.' },
        { status: 400 }
      );
    }

    const budget: BudgetCategory = ['budget', 'moderate', 'luxury'].includes(body.budget)
      ? body.budget
      : 'moderate';

    const companion: CompanionType = ['solo', 'couple', 'family', 'friends'].includes(body.companion)
      ? body.companion
      : 'couple';

    const interests = Array.isArray(body.interests)
      ? body.interests.filter((i) => typeof i === 'string')
      : [];

    const notes = typeof body.notes === 'string' ? body.notes.slice(0, 500) : '';

    // 3. Initialize OpenAI client
    const openai = new OpenAI({ apiKey });

    // 4. Construct System & User prompts
    const systemPrompt = `You are a world-class travel architect and itinerary specialist.
Your mission is to generate an authentic, inspiring, realistic, and highly detailed day-by-day travel itinerary.

You must respond ONLY with a single valid JSON object that matches the following structure exactly without markdown code blocks, backticks, or extra text:

{
  "tripTitle": "Engaging, catchy title for the trip",
  "destination": "City/Region name",
  "country": "Country name",
  "durationDays": ${durationDays},
  "budgetCategory": "${budget}",
  "companion": "${companion}",
  "summary": "Captivating 2-3 sentence overview highlighting the journey",
  "estimatedCost": {
    "currency": "USD",
    "totalRange": "e.g. $1,200 - $1,800 per person",
    "breakdown": {
      "accommodation": "e.g. $600 - $900 (Boutique hotel / Resort)",
      "food": "e.g. $300 - $450 (Local dining & cafes)",
      "activities": "e.g. $180 - $250 (Museums, tours, entry tickets)",
      "transportation": "e.g. $120 - $200 (Transit passes & transfers)"
    }
  },
  "weatherAdvice": "Accurate seasonal climate summary and packing clothing tips",
  "packingEssentials": ["Item 1", "Item 2", "Item 3", "Item 4"],
  "travelTips": ["Practical local tip 1", "Practical local tip 2", "Practical local tip 3"],
  "attractionPins": [
    {
      "name": "Attraction Name",
      "category": "e.g. Temple, Museum, Historic, Nature, Market, Viewpoint",
      "lat": 0.0000,
      "lng": 0.0000,
      "rating": 4.8,
      "reviews": 12500
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "theme": "Creative title for Day 1",
      "morning": {
        "time": "09:00 AM",
        "title": "Specific activity title",
        "location": "Specific place name or district",
        "description": "Engaging 2-sentence description of the activity and what to experience",
        "highlight": "Specific memorable highlight or photo spot",
        "tag": "Sightseeing"
      },
      "afternoon": {
        "time": "01:30 PM",
        "title": "Specific activity title",
        "location": "Specific place name or district",
        "description": "Engaging 2-sentence description of the activity",
        "highlight": "Specific highlight",
        "tag": "Culture"
      },
      "evening": {
        "time": "06:30 PM",
        "title": "Specific activity title",
        "location": "Specific place name or district",
        "description": "Engaging 2-sentence description of evening atmosphere & dining",
        "highlight": "Specific highlight",
        "tag": "Food"
      },
      "recommendedDish": {
        "name": "Authentic regional dish name",
        "description": "Flavor description of why it is special",
        "bestSpot": "Name of an authentic restaurant, street stall or area"
      }
    }
  ]
}

Important Guidelines:
1. "days" must contain exactly ${durationDays} items, numbered 1 to ${durationDays}.
2. "tag" in morning, afternoon, and evening MUST be one of: "Sightseeing", "Food", "Culture", "Nature", "Adventure", "Relaxation", "Nightlife".
3. "attractionPins" must contain 4 to 8 real famous tourist attractions with realistic geographic coordinates (lat, lng) within or near ${destination}.
4. Tailor activities, pace, and dining specifically for a ${companion} trip with a ${budget} budget focusing on these interests: ${interests.join(', ') || 'general sightseeing and local food'}.`;

    const userPrompt = `Please plan an unforgettable ${durationDays}-day vacation to ${destination}.
Travel Preferences:
- Budget Tier: ${budget}
- Traveling With: ${companion}
- Key Interests: ${interests.length > 0 ? interests.join(', ') : 'Must-see attractions, culture, culinary'}
${notes ? `- Special Requests / Dietary Notes: ${notes}` : ''}

Generate the complete JSON itinerary now following the schema precisely.`;

    // 5. Execute chat completion with json_object enforcement
    const completion = await openai.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const rawContent = completion.choices[0]?.message?.content;
    if (!rawContent) {
      return NextResponse.json(
        { error: 'OpenAI returned an empty response. Please try again.' },
        { status: 502 }
      );
    }

    // 6. Parse and validate JSON structure
    let parsed: any;
    try {
      parsed = JSON.parse(rawContent);
    } catch {
      return NextResponse.json(
        { error: 'Failed to parse AI response into valid JSON.' },
        { status: 502 }
      );
    }

    // 7. Assemble strictly-typed Itinerary response conforming to src/types/trip.ts
    const sanitizedDays = Array.isArray(parsed.days)
      ? parsed.days.slice(0, durationDays).map((day: any, idx: number) => ({
          dayNumber: Number(day.dayNumber) || idx + 1,
          theme: String(day.theme || `Day ${idx + 1}: Discovering ${destination}`),
          morning: {
            time: String(day.morning?.time || '09:00 AM'),
            title: String(day.morning?.title || 'Morning Exploration'),
            location: String(day.morning?.location || destination),
            description: String(day.morning?.description || `Explore ${destination}'s iconic sights.`),
            highlight: String(day.morning?.highlight || 'Scenic morning views.'),
            tag: normalizeTag(day.morning?.tag),
          },
          afternoon: {
            time: String(day.afternoon?.time || '01:30 PM'),
            title: String(day.afternoon?.title || 'Afternoon Experience'),
            location: String(day.afternoon?.location || destination),
            description: String(day.afternoon?.description || `Immerse yourself in local culture.`),
            highlight: String(day.afternoon?.highlight || 'Artisan crafts and atmosphere.'),
            tag: normalizeTag(day.afternoon?.tag),
          },
          evening: {
            time: String(day.evening?.time || '06:30 PM'),
            title: String(day.evening?.title || 'Evening Dining & Stroll'),
            location: String(day.evening?.location || destination),
            description: String(day.evening?.description || `Enjoy dinner and sunset views.`),
            highlight: String(day.evening?.highlight || 'Local culinary delight.'),
            tag: normalizeTag(day.evening?.tag),
          },
          recommendedDish: {
            name: String(day.recommendedDish?.name || 'Local Specialty'),
            description: String(day.recommendedDish?.description || 'Authentic regional delicacy.'),
            bestSpot: String(day.recommendedDish?.bestSpot || 'Central culinary district'),
          },
        }))
      : [];

    const sanitizedAttractions = Array.isArray(parsed.attractionPins) && parsed.attractionPins.length > 0
      ? parsed.attractionPins.map((pin: any) => ({
          name: String(pin.name || 'Featured Landmark'),
          category: String(pin.category || 'Sightseeing'),
          lat: Number(pin.lat) || 0,
          lng: Number(pin.lng) || 0,
          rating: Number(pin.rating) || 4.7,
          reviews: Number(pin.reviews) || 5000,
        }))
      : [
          {
            name: `${destination} City Center`,
            category: 'Landmark',
            lat: 0,
            lng: 0,
            rating: 4.8,
            reviews: 12000,
          },
        ];

    const itinerary: Itinerary = {
      id: `ai-${Date.now()}`,
      tripTitle: String(parsed.tripTitle || `${durationDays}-Day Trip to ${destination}`),
      destination: String(parsed.destination || destination),
      country: String(parsed.country || destination.split(',')[1]?.trim() || 'Worldwide'),
      durationDays,
      budgetCategory: budget,
      companion,
      summary: String(parsed.summary || `An AI-curated ${durationDays}-day travel experience to ${destination}.`),
      heroImage: resolveHeroImage(destination, parsed.heroImage),
      estimatedCost: {
        currency: 'USD',
        totalRange: String(parsed.estimatedCost?.totalRange || '$1,200 - $1,800 per person'),
        breakdown: {
          accommodation: String(parsed.estimatedCost?.breakdown?.accommodation || '$500 - $800'),
          food: String(parsed.estimatedCost?.breakdown?.food || '$300 - $450'),
          activities: String(parsed.estimatedCost?.breakdown?.activities || '$200 - $350'),
          transportation: String(parsed.estimatedCost?.breakdown?.transportation || '$150 - $250'),
        },
      },
      weatherAdvice: String(
        parsed.weatherAdvice ||
          'Check local weather forecasts before departure and pack comfortable walking shoes and layers.'
      ),
      packingEssentials: Array.isArray(parsed.packingEssentials) && parsed.packingEssentials.length > 0
        ? parsed.packingEssentials.map(String)
        : [
            'Comfortable walking shoes',
            'Universal power adapter',
            'Portable battery bank',
            'Weather-appropriate jacket',
          ],
      travelTips: Array.isArray(parsed.travelTips) && parsed.travelTips.length > 0
        ? parsed.travelTips.map(String)
        : [
            'Book popular museum and attraction tickets ahead of time.',
            'Download offline navigation maps before arrival.',
            'Keep local currency cash for smaller street vendors and transit.',
          ],
      days: sanitizedDays,
      attractionPins: sanitizedAttractions,
      isSampleData: false, // Flag clearly distinguishing real AI generation
      createdAt: new Date().toISOString().split('T')[0],
    };

    return NextResponse.json({ success: true, itinerary });
  } catch (err: any) {
    console.error('API /api/generate-trip error:', err?.message || err);

    if (err?.status === 401) {
      return NextResponse.json(
        { error: 'Invalid OpenAI API key. Please check your OPENAI_API_KEY in .env.local.' },
        { status: 401 }
      );
    }

    if (err?.status === 429) {
      return NextResponse.json(
        { error: 'OpenAI API rate limit or quota exceeded. Please check your OpenAI account usage.' },
        { status: 429 }
      );
    }

    if (err?.status === 404) {
      return NextResponse.json(
        { error: 'Specified OpenAI model not found. Check OPENAI_MODEL in .env.local.' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: err?.message || 'Failed to generate itinerary with OpenAI. Please try again.' },
      { status: 500 }
    );
  }
}
