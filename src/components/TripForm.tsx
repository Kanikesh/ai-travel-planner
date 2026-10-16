'use client';

import React, { useState } from 'react';
import { TripFormData, BudgetCategory, CompanionType } from '@/types/trip';
import { TRAVEL_INTERESTS } from '@/data/sampleTrips';
import {
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Sparkles,
  Plane,
  Utensils,
  Landmark,
  Compass,
  Palmtree,
  Camera,
  ShoppingBag,
  HeartHandshake,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface TripFormProps {
  initialData: TripFormData;
  onSubmit: (formData: TripFormData) => void;
  isGenerating: boolean;
  errorMessage?: string | null;
  onClearError?: () => void;
}

export const TripForm: React.FC<TripFormProps> = ({
  initialData,
  onSubmit,
  isGenerating,
  errorMessage,
  onClearError,
}) => {
  const [formData, setFormData] = useState<TripFormData>(initialData);
  const [generationStep, setGenerationStep] = useState<string>('');

  // Sync if parent updates initialData (e.g. clicking a destination card)
  React.useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const quickDestinations = [
    'Jaipur & Udaipur, India',
    'Goa, India',
    'Kerala, India',
    'Kyoto & Tokyo, Japan',
    'Bali, Indonesia',
    'Paris, France',
    'Swiss Alps, Switzerland',
  ];

  const budgetOptions: Array<{
    id: BudgetCategory;
    title: string;
    description: string;
    range: string;
    icon: string;
  }> = [
    {
      id: 'budget',
      title: 'Budget-Friendly',
      description: 'Hostels, local eateries, public transit, free walking tours',
      range: '$50 - $100 / day',
      icon: '💵',
    },
    {
      id: 'moderate',
      title: 'Balanced & Comfortable',
      description: '3-4★ boutique hotels, curated dining, guided activities',
      range: '$150 - $250 / day',
      icon: '💳',
    },
    {
      id: 'luxury',
      title: 'Luxury & Indulgent',
      description: '5★ resorts, private chauffeurs, Michelin-star gastronomy',
      range: '$400+ / day',
      icon: '💎',
    },
  ];

  const companionOptions: Array<{
    id: CompanionType;
    label: string;
    description: string;
    icon: string;
  }> = [
    { id: 'solo', label: 'Solo Traveler', description: 'Me, myself and adventure', icon: '🎒' },
    { id: 'couple', label: 'Couple', description: 'Romantic & couple-friendly spots', icon: '💑' },
    { id: 'family', label: 'Family with Kids', description: 'Kid-friendly, relaxed pacing', icon: '👨‍👩‍👧' },
    { id: 'friends', label: 'Friends Group', description: 'Social, vibrant & fun activities', icon: '👯' },
  ];

  const handleInterestToggle = (id: string) => {
    if (formData.interests.includes(id)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter((i) => i !== id),
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, id],
      });
    }
  };

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-amber-500" />;
      case 'Landmark':
        return <Landmark className="w-4 h-4 text-indigo-500" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-emerald-500" />;
      case 'Palmtree':
        return <Palmtree className="w-4 h-4 text-teal-500" />;
      case 'Camera':
        return <Camera className="w-4 h-4 text-rose-500" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-4 h-4 text-purple-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4 text-pink-500" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-4 h-4 text-sky-500" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.destination.trim()) {
      alert('Please enter or select a destination!');
      return;
    }
    onSubmit(formData);
  };

  return (
    <section id="trip-planner-form" className="py-12 sm:py-16 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Container Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/80 overflow-hidden">
          {/* Card Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-medium mb-3 backdrop-blur-sm border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Travel Assistant</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Plan Your Next Adventure
              </h2>
              <p className="mt-1.5 text-slate-300 text-sm sm:text-base max-w-xl">
                Fill in your preferences below. Our AI synthesizes your custom day-by-day plan in seconds.
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
            {/* 1. Destination Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-500" />
                Where do you want to travel?
                <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Kyoto, Japan or Bali, Indonesia or Paris, France"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 text-slate-900 placeholder:text-slate-400 font-medium text-base shadow-sm"
                />
              </div>

              {/* Quick suggestion pills */}
              <div className="mt-2.5 flex items-center flex-wrap gap-1.5 text-xs">
                <span className="text-slate-500 font-medium mr-1">Popular:</span>
                {quickDestinations.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setFormData({ ...formData, destination: city })}
                    className={`px-2.5 py-1 rounded-lg border transition ${
                      formData.destination === city
                        ? 'bg-sky-100 border-sky-300 text-sky-800 font-medium'
                        : 'bg-slate-100 hover:bg-slate-200/80 border-slate-200 text-slate-600'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Duration of Trip */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-500" />
                  Trip Duration: <span className="text-sky-600 font-bold">{formData.durationDays} Days</span>
                </label>
                <span className="text-xs text-slate-500 font-medium">1 to 14 days</span>
              </div>

              {/* Quick duration presets */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mb-3">
                {[3, 4, 5, 6, 7, 10].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setFormData({ ...formData, durationDays: days })}
                    className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition text-center ${
                      formData.durationDays === days
                        ? 'bg-sky-500 border-sky-500 text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {days} Days
                  </button>
                ))}
              </div>

              {/* Slider for precision */}
              <input
                type="range"
                min="1"
                max="14"
                value={formData.durationDays}
                onChange={(e) => setFormData({ ...formData, durationDays: parseInt(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>

            {/* 3. Budget Input Cards */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                Select Your Budget Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {budgetOptions.map((opt) => {
                  const isSelected = formData.budget === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setFormData({ ...formData, budget: opt.id })}
                      className={`cursor-pointer rounded-2xl p-4 border-2 transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-sky-500 bg-sky-50/60 shadow-md ring-2 ring-sky-500/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-2xl">{opt.icon}</span>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            isSelected ? 'bg-sky-200/80 text-sky-800' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {opt.range}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">{opt.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {opt.description}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-100/80 flex items-center justify-end">
                        <span className={`text-xs font-semibold ${isSelected ? 'text-sky-600' : 'text-slate-400'}`}>
                          {isSelected ? '✓ Selected' : 'Choose'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Travel Companion */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-500" />
                Who is Traveling With You?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {companionOptions.map((comp) => {
                  const isSelected = formData.companion === comp.id;
                  return (
                    <div
                      key={comp.id}
                      onClick={() => setFormData({ ...formData, companion: comp.id })}
                      className={`cursor-pointer p-3.5 rounded-2xl border-2 transition text-center flex flex-col items-center ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-50/60 shadow-sm ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-3xl mb-1.5">{comp.icon}</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{comp.label}</span>
                      <span className="text-[11px] text-slate-500 mt-0.5">{comp.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 5. Travel Preferences & Interests */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Travel Vibe & Interests (Select all that apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {TRAVEL_INTERESTS.map((interest) => {
                  const isSelected = formData.interests.includes(interest.id);
                  return (
                    <button
                      type="button"
                      key={interest.id}
                      onClick={() => handleInterestToggle(interest.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                        isSelected
                          ? 'border-sky-500 bg-sky-50/80 shadow-sm ring-1 ring-sky-500'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        {getInterestIcon(interest.icon)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{interest.label}</div>
                        <div className="text-[10px] text-slate-500 leading-tight mt-0.5 line-clamp-1">
                          {interest.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 6. Special Requests / Notes */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                Special Requests or Dietary Preferences <span className="text-xs font-normal text-slate-400">(Optional)</span>
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Vegetarian food options, avoiding very steep stairs, love vintage vinyl record shops, or honeymoon romantic dinner"
                value={formData.notes || ''}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 text-slate-900 placeholder:text-slate-400 text-sm shadow-sm"
              />
            </div>

            {/* Error Message Box */}
            {errorMessage && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 text-sm flex items-start justify-between gap-3 shadow-sm animate-in slide-in-from-top-2">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Trip Generation Notice</span>
                    <p className="text-xs text-rose-700 mt-1 leading-relaxed">{errorMessage}</p>
                  </div>
                </div>
                {onClearError && (
                  <button
                    type="button"
                    onClick={onClearError}
                    className="text-rose-500 hover:text-rose-700 font-bold text-xs p-1"
                    title="Dismiss"
                  >
                    ✕
                  </button>
                )}
              </div>
            )}

            {/* Information Banner for OpenAI Integration */}
            <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-200 flex items-start gap-3 text-xs text-sky-950">
              <Sparkles className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">OpenAI Powered:</span> Custom itineraries are synthesized using real-time GPT models based on your destination, budget, companion, and preferences. Pre-configured sample trips (Kyoto, Bali) remain accessible anytime.
              </div>
            </div>

            {/* 7. Generate Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isGenerating}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-teal-500 text-white font-bold text-base sm:text-lg shadow-xl shadow-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/50 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-75 disabled:cursor-not-allowed group"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Curating Your AI Itinerary...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
                    <span>Generate My Trip Itinerary</span>
                    <Plane className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
