export type BudgetCategory = 'budget' | 'moderate' | 'luxury';

export type CompanionType = 'solo' | 'couple' | 'family' | 'friends';

export interface TripFormData {
  destination: string;
  durationDays: number;
  budget: BudgetCategory;
  companion: CompanionType;
  interests: string[];
  notes?: string;
}

export interface DayActivity {
  time: string;
  title: string;
  location: string;
  description: string;
  highlight: string;
  tag: 'Sightseeing' | 'Food' | 'Culture' | 'Nature' | 'Adventure' | 'Relaxation' | 'Nightlife' | 'Beaches' | 'Shopping' | 'Photography' | 'Culinary';
}

export interface DayPlan {
  dayNumber: number;
  theme: string;
  morning: DayActivity;
  afternoon: DayActivity;
  evening: DayActivity;
  recommendedDish: {
    name: string;
    description: string;
    bestSpot: string;
  };
}

export interface Itinerary {
  id: string;
  tripTitle: string;
  destination: string;
  country: string;
  durationDays: number;
  budgetCategory: BudgetCategory;
  companion: CompanionType;
  summary: string;
  heroImage: string;
  estimatedCost: {
    currency: string;
    totalRange: string;
    breakdown: {
      accommodation: string;
      food: string;
      activities: string;
      transportation: string;
    };
  };
  weatherAdvice: string;
  packingEssentials: string[];
  travelTips: string[];
  days: DayPlan[];
  attractionPins: Array<{
    name: string;
    category: string;
    lat: number;
    lng: number;
    rating: number;
    reviews: number;
  }>;
  isSampleData: boolean;
  createdAt: string;
}

export interface FeaturedDestination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  image: string;
  recommendedDays: number;
  typicalBudget: BudgetCategory;
  bestSeason: string;
  tags: string[];
}
