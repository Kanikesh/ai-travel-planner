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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    setErrorMessage(null);
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
    setErrorMessage(null);
    setTimeout(() => {
      scrollTo('itinerary-result');
    }, 100);
  };

  const handleGenerateTrip = async (submittedData: TripFormData) => {
    setIsGenerating(true);
    setErrorMessage(null);
    setFormData(submittedData);

    try {
      const response = await fetch('/api/generate-trip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submittedData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to generate itinerary with AI.');
      }

      // Replace sample data ONLY when real API response succeeds
      setItinerary(data.itinerary);
      setErrorMessage(null);

      setTimeout(() => {
        scrollTo('itinerary-result');
      }, 150);
    } catch (err: any) {
      console.error('Trip generation error:', err);
      setErrorMessage(
        err.message || 'An unexpected error occurred while communicating with OpenAI. Please try again.'
      );
    } finally {
      setIsGenerating(false);
    }
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
          errorMessage={errorMessage}
          onClearError={() => setErrorMessage(null)}
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
