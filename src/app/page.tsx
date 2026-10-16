'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { DestinationGrid } from '@/components/DestinationGrid';
import { TripForm } from '@/components/TripForm';
import { ItineraryView } from '@/components/ItineraryView';
import { TechStackRoadmap } from '@/components/TechStackRoadmap';
import { Footer } from '@/components/Footer';
import { TripFormData, Itinerary, FeaturedDestination } from '@/types/trip';
import { SAMPLE_ITINERARIES } from '@/data/sampleTrips';

export default function Home() {
  const [formData, setFormData] = useState<TripFormData>({
    destination: 'Kyoto & Tokyo, Japan',
    durationDays: 7,
    budget: 'moderate',
    companion: 'couple',
    interests: ['culinary', 'culture', 'photography'],
    notes: 'Interested in authentic matcha tea ceremony and local ramen alleys',
  });

  const [itinerary, setItinerary] = useState<Itinerary | null>(SAMPLE_ITINERARIES['kyoto-japan']);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Scroll helpers
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDestination = (dest: FeaturedDestination) => {
    setFormData((prev) => ({
      ...prev,
      destination: `${dest.name}, ${dest.country}`,
      durationDays: dest.recommendedDays,
      budget: dest.typicalBudget,
    }));
    scrollTo('trip-planner-form');
  };

  const handleLoadSample = (sampleKey: string) => {
    const sample = SAMPLE_ITINERARIES[sampleKey] || SAMPLE_ITINERARIES['kyoto-japan'];
    setItinerary(sample);
    setFormData({
      destination: sample.destination,
      durationDays: sample.durationDays,
      budget: sample.budgetCategory,
      companion: sample.companion,
      interests: ['culinary', 'culture'],
      notes: '',
    });
    setTimeout(() => {
      scrollTo('itinerary-result');
    }, 100);
  };

  const handleGenerateTrip = (submittedData: TripFormData) => {
    setIsGenerating(true);
    setFormData(submittedData);

    // Simulate AI synthesis process (In next phase, this calls POST /api/generate-trip to OpenAI)
    setTimeout(() => {
      const destLower = submittedData.destination.toLowerCase();
      
      if (destLower.includes('bali')) {
        setItinerary(SAMPLE_ITINERARIES['bali-indonesia']);
      } else if (destLower.includes('kyoto') || destLower.includes('tokyo') || destLower.includes('japan')) {
        setItinerary(SAMPLE_ITINERARIES['kyoto-japan']);
      } else {
        // Dynamically synthesize a tailored itinerary based on user inputs
        const generatedDays = Array.from({ length: submittedData.durationDays }, (_, i) => {
          const dayNum = i + 1;
          return {
            dayNumber: dayNum,
            theme: dayNum === 1 
              ? `Arrival & First Impressions of ${submittedData.destination}` 
              : dayNum === submittedData.durationDays 
              ? `Farewell & Souvenirs in ${submittedData.destination}` 
              : `Day ${dayNum}: Immersive Discoveries & Local Hidden Gems`,
            morning: {
              time: '09:00 AM',
              title: `Explore Iconic Landmark & Morning Walk`,
              location: `${submittedData.destination} Historic Centre`,
              description: `Begin your morning exploring prominent historic landmarks with morning light and fewer crowds. Tailored for ${submittedData.companion} travelers.`,
              highlight: `Panoramic vista over the skyline and city architecture.`,
              tag: 'Sightseeing' as const,
            },
            afternoon: {
              time: '01:30 PM',
              title: `Curated ${submittedData.interests[0] || 'Culture'} Experience`,
              location: `${submittedData.destination} Cultural Quarter`,
              description: `Afternoon immersion aligned with your selected interest in ${submittedData.interests.join(' & ')}.`,
              highlight: `Guided local artisanal immersion.`,
              tag: 'Culture' as const,
            },
            evening: {
              time: '06:30 PM',
              title: `Sunset Atmosphere & Local Dining`,
              location: `${submittedData.destination} Riverside / Promenade`,
              description: `A relaxed evening stroll taking in twilight views, vibrant night streetscape, and local music.`,
              highlight: `Cozy authentic evening atmosphere.`,
              tag: 'Food' as const,
            },
            recommendedDish: {
              name: `Signature Regional Specialty of ${submittedData.destination}`,
              description: `Authentic local dish prepared with fresh seasonal ingredients according to local recipes.`,
              bestSpot: `Top-rated local bistro in ${submittedData.destination}`,
            },
          };
        });

        const budgetRange = submittedData.budget === 'budget' 
          ? '$600 - $950 per person'
          : submittedData.budget === 'luxury'
          ? '$2,800 - $4,200 per person'
          : '$1,400 - $1,950 per person';

        const customItinerary: Itinerary = {
          id: `custom-${Date.now()}`,
          tripTitle: `Tailored ${submittedData.durationDays}-Day Escape to ${submittedData.destination}`,
          destination: submittedData.destination,
          country: submittedData.destination.split(',')[1]?.trim() || 'Worldwide',
          durationDays: submittedData.durationDays,
          budgetCategory: submittedData.budget,
          companion: submittedData.companion,
          summary: `A personalized travel schedule generated specifically for ${submittedData.companion} travelers seeking ${submittedData.interests.join(', ')} in ${submittedData.destination}.`,
          heroImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
          isSampleData: true,
          createdAt: new Date().toISOString().split('T')[0],
          estimatedCost: {
            currency: 'USD',
            totalRange: budgetRange,
            breakdown: {
              accommodation: submittedData.budget === 'luxury' ? '$1,600 (5★ Luxury Boutique)' : '$650 (3-4★ Comfortable Hotel)',
              food: submittedData.budget === 'budget' ? '$200 (Street Food & Cafes)' : '$500 (Curated Local Dining)',
              activities: '$250 (Museums, Entry tickets & Tours)',
              transportation: '$180 (City transit pass & transfers)',
            },
          },
          weatherAdvice: 'Mild seasonal climate. Comfortable walking shoes and layered clothing are strongly recommended.',
          packingEssentials: [
            'Comfortable walking sneakers',
            'Portable battery charger (power bank)',
            'Universal power plug adapter',
            'Lightweight travel jacket'
          ],
          travelTips: [
            'Book high-demand museum and attraction tickets 2-3 weeks in advance.',
            'Download offline navigation maps on Google Maps before wandering.',
            'Keep small local currency denominations handy for market vendors.'
          ],
          attractionPins: [
            { name: `${submittedData.destination} Central Plaza`, category: 'Plaza & Landmark', lat: 48.8566, lng: 2.3522, rating: 4.8, reviews: 21500 },
            { name: `${submittedData.destination} Heritage Museum`, category: 'Museum', lat: 48.8606, lng: 2.3376, rating: 4.7, reviews: 31200 },
            { name: `${submittedData.destination} Scenic Overlook`, category: 'Scenic View', lat: 48.8584, lng: 2.2945, rating: 4.9, reviews: 42000 },
          ],
          days: generatedDays,
        };

        setItinerary(customItinerary);
      }

      setIsGenerating(false);
      setTimeout(() => {
        scrollTo('itinerary-result');
      }, 150);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation Bar */}
      <Navbar
        onPlanTripClick={() => scrollTo('trip-planner-form')}
        onExploreClick={() => scrollTo('destinations-section')}
        onSampleClick={() => handleLoadSample('kyoto-japan')}
        onRoadmapClick={() => scrollTo('tech-architecture')}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onStartPlanning={() => scrollTo('trip-planner-form')}
          onLoadSample={handleLoadSample}
        />

        {/* Featured Destination Cards Grid */}
        <DestinationGrid
          onSelectDestination={handleSelectDestination}
          onQuickLoadSample={handleLoadSample}
        />

        {/* Trip Creation Form */}
        <TripForm
          initialData={formData}
          onSubmit={handleGenerateTrip}
          isGenerating={isGenerating}
        />

        {/* Itinerary Results Section */}
        {itinerary && (
          <ItineraryView
            itinerary={itinerary}
            onReset={() => scrollTo('trip-planner-form')}
          />
        )}

        {/* Step-by-Step Architecture Roadmap */}
        <TechStackRoadmap />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
